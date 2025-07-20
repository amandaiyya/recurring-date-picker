import { render, screen, fireEvent } from '@testing-library/react';
import DateRangePicker from './DateRangePicker';
import { useRecurrence } from '../../context/RecurrenceContext';

// Mock the context
jest.mock('../../context/RecurrenceContext', () => ({
  useRecurrence: jest.fn(),
}));

describe('DateRangePicker', () => {
  it('renders start and end date inputs with labels', () => {
    useRecurrence.mockReturnValue({
      startDate: '2025-01-01',
      setStartDate: jest.fn(),
      endDate: '2025-01-31',
      setEndDate: jest.fn(),
    });

    render(<DateRangePicker />);

    expect(screen.getByLabelText('Start Date:')).toBeInTheDocument();
    expect(screen.getByLabelText('End Date:')).toBeInTheDocument();
    expect(screen.getByDisplayValue('2025-01-01')).toBeInTheDocument();
    expect(screen.getByDisplayValue('2025-01-31')).toBeInTheDocument();
    expect(screen.getByText('Optional')).toBeInTheDocument();
  });

  it('calls setStartDate and setEndDate when values change', () => {
    const mockSetStartDate = jest.fn();
    const mockSetEndDate = jest.fn();

    useRecurrence.mockReturnValue({
      startDate: '2025-01-01',
      setStartDate: mockSetStartDate,
      endDate: '2025-01-31',
      setEndDate: mockSetEndDate,
    });

    render(<DateRangePicker />);

    const startInput = screen.getByLabelText('Start Date:');
    const endInput = screen.getByLabelText('End Date:');

    fireEvent.change(startInput, { target: { value: '2025-02-01' } });
    fireEvent.change(endInput, { target: { value: '2025-02-28' } });

    expect(mockSetStartDate).toHaveBeenCalledWith('2025-02-01');
    expect(mockSetEndDate).toHaveBeenCalledWith('2025-02-28');
  });
});

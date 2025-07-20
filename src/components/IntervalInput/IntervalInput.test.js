import { render, screen, fireEvent } from '@testing-library/react';
import IntervalInput from './IntervalInput';
import { useRecurrence } from '../../context/RecurrenceContext';

// Mock the context
jest.mock('../../context/RecurrenceContext', () => ({
  useRecurrence: jest.fn(),
}));

describe('IntervalInput', () => {
  it('renders input and label when recurrenceType is provided', () => {
    useRecurrence.mockReturnValue({
      intervalValue: 2,
      setIntervalValue: jest.fn(),
      recurrenceType: 'weekly',
    });

    render(<IntervalInput />);

    expect(screen.getByLabelText('Repeat every')).toBeInTheDocument();
    expect(screen.getByDisplayValue('2')).toBeInTheDocument();
    expect(screen.getByText('week(s)')).toBeInTheDocument();
  });

  it('does not render if recurrenceType is missing', () => {
    useRecurrence.mockReturnValue({
      intervalValue: 1,
      setIntervalValue: jest.fn(),
      recurrenceType: '',
    });

    const { container } = render(<IntervalInput />);
    expect(container).toBeEmptyDOMElement();
  });

  it('calls setIntervalValue on input change', () => {
    const mockSetIntervalValue = jest.fn();
    useRecurrence.mockReturnValue({
      intervalValue: 1,
      setIntervalValue: mockSetIntervalValue,
      recurrenceType: 'daily',
    });

    render(<IntervalInput />);
    const input = screen.getByDisplayValue('1');
    fireEvent.change(input, { target: { value: '5' } });

    expect(mockSetIntervalValue).toHaveBeenCalledWith('5');
  });
});

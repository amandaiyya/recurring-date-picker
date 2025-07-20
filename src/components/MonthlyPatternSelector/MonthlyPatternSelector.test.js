import { render, screen, fireEvent } from '@testing-library/react';
import MonthlyPatternSelector from './MonthlyPatternSelector';
import { useRecurrence } from '@/context/RecurrenceContext';

// Mock the context
jest.mock('@/context/RecurrenceContext', () => ({
  useRecurrence: jest.fn(),
}));

describe('MonthlyPatternSelector', () => {
  it('renders dropdowns when recurrenceType is monthly', () => {
    useRecurrence.mockReturnValue({
      recurrenceType: 'monthly',
      monthlyPattern: { week: 2, day: 'Wednesday' },
      setMonthlyPattern: jest.fn(),
    });

    render(<MonthlyPatternSelector />);

    expect(screen.getByText('Repeat on')).toBeInTheDocument();
    expect(screen.getByDisplayValue('2nd week')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Wednesday')).toBeInTheDocument();
  });

  it('does not render anything when recurrenceType is not monthly', () => {
    useRecurrence.mockReturnValue({
      recurrenceType: 'weekly',
      monthlyPattern: { week: 1, day: 'Monday' },
      setMonthlyPattern: jest.fn(),
    });

    const { container } = render(<MonthlyPatternSelector />);
    expect(container).toBeEmptyDOMElement();
  });

  it('calls setMonthlyPattern when week is changed', () => {
    const mockSetMonthlyPattern = jest.fn();
    useRecurrence.mockReturnValue({
      recurrenceType: 'monthly',
      monthlyPattern: { week: 2, day: 'Wednesday' },
      setMonthlyPattern: mockSetMonthlyPattern,
    });

    render(<MonthlyPatternSelector />);
    fireEvent.change(screen.getByDisplayValue('2nd week'), {
      target: { value: '3' },
    });

    expect(mockSetMonthlyPattern).toHaveBeenCalledWith({
      week: 3,
      day: 'Wednesday',
    });
  });

  it('calls setMonthlyPattern when day is changed', () => {
    const mockSetMonthlyPattern = jest.fn();
    useRecurrence.mockReturnValue({
      recurrenceType: 'monthly',
      monthlyPattern: { week: 2, day: 'Wednesday' },
      setMonthlyPattern: mockSetMonthlyPattern,
    });

    render(<MonthlyPatternSelector />);
    fireEvent.change(screen.getByDisplayValue('Wednesday'), {
      target: { value: 'Friday' },
    });

    expect(mockSetMonthlyPattern).toHaveBeenCalledWith({
      week: 2,
      day: 'Friday',
    });
  });
});

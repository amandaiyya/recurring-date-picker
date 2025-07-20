import { render, screen, fireEvent } from '@testing-library/react';
import WeekDaySelector from './WeekDaySelector';
import { useRecurrence } from '../../context/RecurrenceContext';

// Mock the useRecurrence hook
jest.mock('../../context/RecurrenceContext', () => ({
  useRecurrence: jest.fn(),
}));

describe('WeekDaySelector', () => {
  it('should render weekday buttons when recurrenceType is weekly', () => {
    useRecurrence.mockReturnValue({
      recurrenceType: 'weekly',
      weekDays: [],
      setWeekDays: jest.fn(),
    });

    render(<WeekDaySelector />);

    expect(screen.getByText('Mon')).toBeInTheDocument();
    expect(screen.getByText('Sun')).toBeInTheDocument();
  });

  it('should not render anything if recurrenceType is not weekly', () => {
    useRecurrence.mockReturnValue({
      recurrenceType: 'daily',
      weekDays: [],
      setWeekDays: jest.fn(),
    });

    const { container } = render(<WeekDaySelector />);
    expect(container).toBeEmptyDOMElement();
  });

  it('should call setWeekDays when a button is clicked', () => {
    const mockSetWeekDays = jest.fn();
    useRecurrence.mockReturnValue({
      recurrenceType: 'weekly',
      weekDays: [],
      setWeekDays: mockSetWeekDays,
    });

    render(<WeekDaySelector />);
    fireEvent.click(screen.getByText('Tue'));

    expect(mockSetWeekDays).toHaveBeenCalled();
  });
});

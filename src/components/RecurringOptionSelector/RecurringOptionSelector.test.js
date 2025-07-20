import { render, screen, fireEvent } from '@testing-library/react';
import RecurringOptionSelector from './RecurringOptionSelector';
import { useRecurrence } from '../../context/RecurrenceContext';

jest.mock('../../context/RecurrenceContext', () => ({
  useRecurrence: jest.fn(),
}));

describe('RecurringOptionSelector', () => {
  it('renders select with correct options and changes value', () => {
    const mockSetRecurrenceType = jest.fn();
    
    useRecurrence.mockReturnValue({
      recurrenceType: '',
      setRecurrenceType: mockSetRecurrenceType,
    });

    render(<RecurringOptionSelector />);

    expect(screen.getByRole('option', { name: 'Daily' })).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'Weekly' })).toBeInTheDocument();

    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'weekly' } });

    expect(mockSetRecurrenceType).toHaveBeenCalledWith('weekly');
  });
});

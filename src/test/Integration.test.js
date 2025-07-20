import { render, screen, fireEvent } from '@testing-library/react';
import { RecurrenceProvider } from "../context/RecurrenceContext"
import TestPage from '../components/TestPage';

test('integration: full recurrence flow works correctly', () => {
  render(
    <RecurrenceProvider>
      <TestPage />
    </RecurrenceProvider>
  );

  // Step 1: Choose recurrence type
  const select = screen.getByRole('combobox');
  fireEvent.change(select, { target: { value: 'weekly' } });
  expect(select).toHaveValue('weekly');

  // Step 2: WeekDaySelector shows and select Monday
  const mondayBtn = screen.getByRole('button', { name: 'Mon' });
  fireEvent.click(mondayBtn);
  expect(mondayBtn).toHaveClass('bg-blue-600');

  // Step 3: IntervalInput shows correct label
  expect(screen.getByText(/week\(s\)/i)).toBeInTheDocument();

  // Step 4: Change start date
  const startDateInput = screen.getByLabelText('Start Date:');
  fireEvent.change(startDateInput, { target: { value: '2025-07-01' } });
  expect(startDateInput).toHaveValue('2025-07-01');

  // Step 5: Check calendar month title is visible
  expect(screen.getByText(/July 2025/i)).toBeInTheDocument();

  // Step 6: Navigate calendar to next month
  const nextBtn = screen.getByText('→');
  fireEvent.click(nextBtn);
  expect(screen.getByText(/August 2025/i)).toBeInTheDocument();
});

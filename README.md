# 📅 Recurring Date Picker Component

A **reusable React component** built with **Next.js**, designed to allow users to select recurring dates — similar to the recurrence system found in the **TickTick** productivity app.

This component is customizable, modular, and includes a visual calendar preview of the selected recurrence. Perfect for scheduling events, tasks, or reminders with flexible repetition rules.

---

## 📦 Deployment
This application is deployed and live at:  
🔗 [https://recurring-date-picker-one.vercel.app](https://recurring-date-picker-one.vercel.app)

---

## ✅ Features

### 🔁 Recurrence Options
- **Daily** – Repeats every day or every _X_ days
- **Weekly** – Repeats every week or every _X_ weeks
- **Monthly** – Repeats every month or every _X_ months
- **Yearly** – Repeats every year or every _X_ years

### 🧩 Customization Features
- Recur every **X** days/weeks/months/years
- Select **specific days of the week** (e.g., Monday, Wednesday)
- Complex rules like **“The second Tuesday of every month”**

### 📆 Date Range Selection
- Choose a **start date**
- Optionally define an **end date**

### 📅 Calendar Preview
- Mini inline calendar that **visually displays** all upcoming recurrence dates based on selected rules

---

## 🛠️ Tech Stack

| Category              | Technology                                |
|-----------------------|--------------------------------------------|
| **Framework**         | [Next.js] |
| **UI Styling**        | [Tailwind CSS] |
| **State Management**  | React Context API |

---

## 🧪 Testing Strategy

### 🔬 Unit Tests
- Frequency and date generation logic
- Rule parsing for complex patterns
- Validation of recurrence rules

### 🔁 Integration Test
- End-to-end test for selecting a rule, inputting a date range, and verifying the calendar preview output

### 🧪 Testing Stack
- [Jest](https://jestjs.io/) + [React Testing Library](https://testing-library.com/)

### Test Command

```bash
# Run all unit and integration tests
npm run test
```

---

## 🧑‍💻 Development Setup

### ⚙️ Prerequisites
- Node.js ≥ 16.x
- npm or yarn

### 🚀 Getting Started

```bash
# 1. Clone the repository
git clone https://github.com/amandaiyya/recurring-date-picker.git

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

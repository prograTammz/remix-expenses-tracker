import { Outlet } from "@remix-run/react";

export default function ExpensesLayout({ children }) {
  return (
    <main>
      <h1>Expenses</h1>
      <Outlet />
    </main>
  );
}

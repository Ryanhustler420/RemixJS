import expensesStyles from "~/styles/expenses.css";

export default function ExpensesPage() {
  return (
    <>
      <h1>Expenses Page</h1>
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}

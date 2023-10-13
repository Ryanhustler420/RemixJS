import expensesStyles from "~/styles/expenses.css";
import ExpenseList from "~/components/expenses/ExpensesList";

export default function ExpensesRawPage() {
  return (
    <main>
      <h1>Expenses Raw Page</h1>
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}

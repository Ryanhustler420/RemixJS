import expensesStyles from "~/styles/expenses.css";
import DUMMY_EXPENSES from "~/routes/data/dummy-expenses";
import ExpenseList from "~/components/expenses/ExpensesList";

export default function ExpensesPage() {
  return (
    <>
      <ExpenseList expenses={DUMMY_EXPENSES} />
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}

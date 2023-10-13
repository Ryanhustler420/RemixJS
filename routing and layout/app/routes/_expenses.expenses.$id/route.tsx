import ExpenseForm from "~/components/expenses/ExpenseForm";
import ExpenseList from "~/components/expenses/ExpensesList";
import expensesStyles from "~/styles/expenses.css";
import DUMMY_EXPENSES from "../data/dummy-expenses";

export default function UpdateExpensesPage() {
  return (
    <>
      <ExpenseForm />
      <ExpenseList expenses={DUMMY_EXPENSES} />
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}

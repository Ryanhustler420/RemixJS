import ExpenseForm from "~/components/expenses/ExpenseForm";
import ExpenseList from "~/components/expenses/ExpensesList";
import expensesStyles from "~/styles/expenses.css";
import DUMMY_EXPENSES from "../data/dummy-expenses";
import Modal from "~/components/util/Modal";

export default function UpdateExpensesPage() {
  return (
    <>
      <Modal onClose={() => console.log("")}>
        <ExpenseForm />
      </Modal>
      <ExpenseList expenses={DUMMY_EXPENSES} />
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}

import ExpenseForm from "~/components/expenses/ExpenseForm";
import ExpenseList from "~/components/expenses/ExpensesList";
import expensesStyles from "~/styles/expenses.css";
import Modal from "~/components/util/Modal";
import DUMMY_EXPENSES from "../data/dummy-expenses";
import { useNavigate } from "@remix-run/react";

export default function ExpensesAddPage() {
  const navigate = useNavigate();

  function closeHandler() {
    navigate('/expenses');
    // navigate('..')
  }

  return (
    <>
      <Modal onClose={closeHandler}>
        <ExpenseForm />
      </Modal>
      <ExpenseList expenses={DUMMY_EXPENSES} />
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}

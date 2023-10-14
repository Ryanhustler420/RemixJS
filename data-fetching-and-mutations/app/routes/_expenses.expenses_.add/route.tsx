import ExpenseForm from "~/components/expenses/ExpenseForm";
import { useNavigate } from "@remix-run/react";
import Modal from "~/components/util/Modal";

export default function ExpensesAddPage() {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("/expenses");
    // navigate("..");
  }

  return (
    <>
      <Modal onClose={closeHandler}>
        <ExpenseForm />
      </Modal>
    </>
  );
}

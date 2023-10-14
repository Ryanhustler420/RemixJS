import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import ExpenseForm from "~/components/expenses/ExpenseForm";
import { addExpense } from "~/data/expenses.server";
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

// GET
export const loader: LoaderFunction = async ({ params, request }) => {
  return null;
};

// POST, PUT, DELETE
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);

  await addExpense(expenseData);
  return redirect("/expenses");
};

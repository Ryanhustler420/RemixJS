import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { validateExpenseInput } from "~/data/validation.server";
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
  console.log("ADD LOADER WILL BE CALLED EVEN IF ROUTE IS PROTECTED");
  return null;
};

// POST, PUT, DELETE
export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const expenseData = Object.fromEntries(formData);

  try {
    validateExpenseInput(expenseData);
  } catch (error) {
    return error;
  }

  await addExpense(expenseData);
  return redirect("/expenses");
};

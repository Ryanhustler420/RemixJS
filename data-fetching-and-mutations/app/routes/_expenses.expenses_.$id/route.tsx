import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { getExpense } from "~/data/expenses.server";

export default function UpdateExpensesPage() {
  const navigate = useNavigate();

  function closeHandler() {
    navigate("/expenses");
    // navigate('..')
  }

  return (
    <>
      <Modal onClose={closeHandler}>
        <ExpenseForm />
      </Modal>
    </>
  );
}

export const loader: LoaderFunction = async ({ params, request }) => {
  const expenseId = params.id;
  const expense = await getExpense(expenseId);

  return expense; // json(expense)
};

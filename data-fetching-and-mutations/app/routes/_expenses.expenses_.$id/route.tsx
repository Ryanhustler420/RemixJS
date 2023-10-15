import ExpenseForm from "~/components/expenses/ExpenseForm";
import Modal from "~/components/util/Modal";
import { deleteExpense, updateExpense } from "~/data/expenses.server";
import { useLoaderData, useNavigate } from "@remix-run/react";
import { validateExpenseInput } from "~/data/validation.server";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
// import { getExpense } from "~/data/expenses.server";

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

// export const loader: LoaderFunction = async ({ params, request }) => {
//   const expenseId = params.id;
//   const expense = await getExpense(expenseId);

//   return expense; // json(expense)
// };

export const action: ActionFunction = async ({ request, params }) => {
  const expenseId = params.id;
  switch (request.method) {
    case "PATCH": {
      const formData = await request.formData();
      const expenseData = Object.fromEntries(formData);
      try {
        validateExpenseInput(expenseData);
      } catch (error) {
        return error;
      }
      await updateExpense(expenseId, expenseData);
      return redirect("/expenses");
    }
    case "DELETE": {
      await deleteExpense(expenseId);
      // return redirect("/expenses");
      return { deletedId: expenseId };
    }
  }
};

import { json } from "@remix-run/node";
import { getExpenses } from "~/data/expenses.server";
import { requireUserSession } from "~/data/auth.server";

export const loader = async ({ params, request }) => {
  const userId = await requireUserSession(request);

  const expenses = await getExpenses(userId);
  if (!expenses || expenses.length == 0) {
    throw json(
      {
        message: "Could not load expenses for the requested analysis.",
      },
      {
        status: 404,
        statusText: "Expenses not found",
      }
    );
  }
  return expenses;
};

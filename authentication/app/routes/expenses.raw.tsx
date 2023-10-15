import { LoaderFunction, json } from "@remix-run/node";
import { requireUserSession } from "~/data/auth.server";
import { getExpenses } from "~/data/expenses.server";

export const loader: LoaderFunction = async ({ params, request }) => {
  await requireUserSession(request);

  const expenses = await getExpenses();
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

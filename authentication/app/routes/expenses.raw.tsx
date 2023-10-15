import { json } from "@remix-run/node";
import { getExpenses } from "~/data/expenses.server";

export async function loader() {
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
}

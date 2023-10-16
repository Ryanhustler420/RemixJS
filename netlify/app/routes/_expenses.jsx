import ExpensesHeader from "~/components/navigation/ExpensesHeader";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import ExpensesList from "~/components/expenses/ExpensesList";
import { requireUserSession } from "~/data/auth.server";
import { getExpenses } from "~/data/expenses.server";
import expensesStyles from "~/styles/expenses.css";
import { json } from "@remix-run/node";

export default function ExpensesLayout() {
  const expenses = useLoaderData();

  const hasExpenses = expenses && expenses?.length > 0;

  return (
    <>
      <ExpensesHeader />
      <Outlet />
      <main>
        <section id="expenses-actions">
          <Link to="/expenses/add">
            <span>Add Expense</span>
          </Link>
          <a href="/expenses/raw">
            <span>Load Raw Data</span>
          </a>
        </section>
        {hasExpenses && <ExpensesList expenses={expenses} />}
        {!hasExpenses && (
          <section id="no-expenses">
            <h1>No expenses found</h1>
            <p>
              Start <Link to="/expenses/add">adding some</Link> today.
            </p>
          </section>
        )}
      </main>
    </>
  );
}

export const loader = async ({ params, request }) => {
  const userId = await requireUserSession(request);
  const expenses = await getExpenses(userId);
  return json(expenses, {
    headers: {
      "Cache-Control": "max-age=3",
    },
  });
};

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}

export function headers({ loaderHeaders, parentHeaders }) {
  return {
    "Cache-Control": loaderHeaders.get("Cache-Control"),
  };
}

import ExpensesHeader from "~/components/navigation/ExpensesHeader";
import ExpensesList from "~/components/expenses/ExpensesList";
import { getExpenses } from "~/data/expenses.server";
import expensesStyles from "~/styles/expenses.css";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";
import { requireUserSession } from "~/data/auth.server";

export default function ExpensesLayout() {
  const expenses: [] = useLoaderData();

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

export const loader: LoaderFunction = async ({ params, request }) => {
  const userId = await requireUserSession(request);
  return getExpenses(userId);
};

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}

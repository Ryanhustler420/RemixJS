import ExpensesHeader from "~/components/navigation/ExpensesHeader";
import ExpensesList from "~/components/expenses/ExpensesList";
import { getExpenses } from "~/data/expenses.server";
import expensesStyles from "~/styles/expenses.css";
import { Link, Outlet, useLoaderData } from "@remix-run/react";
import { LoaderFunction } from "@remix-run/node";

export default function ExpensesLayout() {
  const expenses = useLoaderData();

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
        <ExpensesList expenses={expenses} />
      </main>
    </>
  );
}

export const loader: LoaderFunction = async ({ params, request }) => {
  return getExpenses();
};

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}

import ExpensesHeader from "~/components/navigation/ExpensesHeader";
import ExpensesList from "~/components/expenses/ExpensesList";
import DUMMY_EXPENSES from "~/routes/data/dummy-expenses";
import expensesStyles from "~/styles/expenses.css";
import { Link, Outlet } from "@remix-run/react";

export default function ExpensesLayout() {
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
        <ExpensesList expenses={DUMMY_EXPENSES} />
      </main>
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}

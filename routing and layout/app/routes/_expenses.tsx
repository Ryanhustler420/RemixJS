import ExpensesList from "~/components/expenses/ExpensesList";
import expensesStyles from "~/styles/expenses.css";
import DUMMY_EXPENSES from "./data/dummy-expenses";
import { Outlet } from "@remix-run/react";

export default function ExpensesLayout() {
  return (
    <>
      <Outlet />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}

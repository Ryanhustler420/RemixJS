import expensesStyles from "~/styles/expenses.css";

import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import ExpenseList from "~/components/expenses/ExpensesList";
import Chart from "~/components/expenses/Chart";
import DUMMY_EXPENSES from "../data/dummy-expenses";

export default function ExpensesAnalysisPage() {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
      <ExpenseList expenses={DUMMY_EXPENSES} />
    </main>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: expensesStyles }];
}

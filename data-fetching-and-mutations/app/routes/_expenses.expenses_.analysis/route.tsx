import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import DUMMY_EXPENSES from "~/routes/data/dummy-expenses";
import Chart from "~/components/expenses/Chart";

export default function ExpensesAnalysisPage() {
  return (
    <main>
      <Chart expenses={DUMMY_EXPENSES} />
      <ExpenseStatistics expenses={DUMMY_EXPENSES} />
    </main>
  );
}

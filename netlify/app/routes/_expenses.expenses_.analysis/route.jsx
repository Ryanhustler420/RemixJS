import ExpenseStatistics from "~/components/expenses/ExpenseStatistics";
import Chart from "~/components/expenses/Chart";
import { useMatches } from "@remix-run/react";

export default function ExpensesAnalysisPage() {
  const matches = useMatches();
  const expenses = matches.find(match => match.id === 'routes/_expenses')?.data;

  return (
    <main>
      <Chart expenses={expenses} />
      <ExpenseStatistics expenses={expenses} />
    </main>
  );
}

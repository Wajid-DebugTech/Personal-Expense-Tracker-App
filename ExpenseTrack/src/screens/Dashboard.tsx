import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useEffect, useState, useMemo } from "react";
import DashboardCard from "../components/DashboardCard";
import LoadingView from "../components/LoadingView";
import ErrorView from "../components/ErrorView";
import EmptyState from "../components/EmptyState";
import type { Expense } from "../types/expense";
import { seedIfNeeded } from "../data/seed";
import { getExpenses } from "../services/expenseService";
import {
  filterByPeriod,
  formatCurrency,
  formatPeriod,
  getLatestPeriod,
  getTopCategory,
  getTotal,
} from "../utils/dataHelper";

export default function Dashboard() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      try {
        await seedIfNeeded();
        setExpenses(await getExpenses());
      } catch (e) {
        setError(e instanceof Error ? e.message : "Something went wrong");
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const period = useMemo(() => getLatestPeriod(expenses), [expenses]);
  const periodExpenses = useMemo(
    () => filterByPeriod(expenses, period),
    [expenses, period],
  );

  if (loading) return <LoadingView />;
  if (error) return <ErrorView message={error} />;
  if (expenses.length === 0) {
    return <EmptyState message="No expenses yet." />;
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{formatPeriod(period)} Overview</Text>
          </View>
          <DashboardCard
            cardTitle="Total Expenses"
            cardInfo={formatCurrency(getTotal(periodExpenses))}
          />
          <DashboardCard
            cardTitle="Number of Transactions"
            cardInfo={periodExpenses.length.toString()}
          />
          <DashboardCard
            cardTitle="Highest Spending Category"
            cardInfo={getTopCategory(periodExpenses) ?? "None"}
          />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingVertical: 16,
    margin: 16,
  },
  titleContainer: {
    marginBottom: 16,
    paddingHorizontal: 16,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "800",
    color: "#000",
  },
});

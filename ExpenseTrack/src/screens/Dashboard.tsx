import { View, Text, ScrollView, StyleSheet } from "react-native";
import DashboardCard from "../components/DashboardCard";

export default function Dashboard() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={styles.container}>
          <DashboardCard
            cardTitle="Total Expenses this month"
            cardInfo="$1,234.56"
            cardSubtitle="October"
          />
          <DashboardCard cardTitle="Number of Transactions" cardInfo="33" />
          <DashboardCard
            cardTitle="Highest Spending Category"
            cardInfo="Bills"
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
});

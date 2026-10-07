import { View, Text, StyleSheet } from "react-native";

export default function DashboardCard() {
  return (
    <View style={styles.container}>
      <View style={styles.totalCard}>
        <Text>Total Expenses for this month</Text>
        <Text>$12.25</Text>
      </View>
      <View style={styles.secondaryInfoContainer}>
        <View style={styles.secondaryInfoCard}>
          <Text># of Expenses</Text>
        </View>
        <View style={styles.secondaryInfoCard}>
          <Text>Highest Spending Category</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 8,
    alignItems: "center",
    padding: 16,
    margin: 16,
  },
  totalCard: {
    width: "100%",
    backgroundColor: "#f00",
    borderRadius: 8,
    alignItems: "center",
    padding: 16,
    marginBottom: 16,
  },
  secondaryInfoContainer: {
    flex: 2,
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    backgroundColor: "#f00",
    gap: 8,
  },
  secondaryInfoCard: {
    flex: 1,
    alignItems: "center",
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#0f0",
  },
});

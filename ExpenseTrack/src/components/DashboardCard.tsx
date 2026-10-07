import { View, Text, StyleSheet } from "react-native";

interface DashboardCardProps {
  cardTitle: string;
  cardInfo: string;
  cardSubtitle?: string;
}

export default function DashboardCard({ cardTitle, cardInfo, cardSubtitle }: DashboardCardProps  ) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{cardTitle}</Text>
      {cardSubtitle && <Text style={styles.cardSubtitle}>{cardSubtitle}</Text>}
      <Text style={styles.cardInfo}>{cardInfo}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: "#dee",
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginVertical: 4,
    marginHorizontal: 16,
  },
  cardTitle: {
    fontSize: 20,
    color: "#000",
    fontWeight: "800",
  },
  cardInfo: {
    fontSize: 24,
    color: "#333",
    fontWeight: "400",
  },
  cardSubtitle: {
    fontSize: 16,
    color: "#666",
    fontWeight: "400",
  },
});

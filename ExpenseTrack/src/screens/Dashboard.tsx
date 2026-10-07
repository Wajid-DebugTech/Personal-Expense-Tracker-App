import { View, Text, ScrollView } from "react-native";
import DashboardCard from "../components/DashboardCard";


export default function Dashboard() {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <DashboardCard />
      </ScrollView>
    </View>
  );
}

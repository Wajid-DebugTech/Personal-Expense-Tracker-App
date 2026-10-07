import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types/navigation";
import Login from "../screens/Login";
import Register from "../screens/Register";
import Dashboard from "../screens/Dashboard";
import Transactions from "../screens/Transactions";
import AddExpense from "../screens/AddExpense";
import ExpenseDetails from "../screens/ExpenseDetails";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{ headerShown: true }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Transactions" component={Transactions} />
        <Stack.Screen name="AddExpense" component={AddExpense} />
        <Stack.Screen name="ExpenseDetails" component={ExpenseDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

import 'react-native-gesture-handler';
import { View, Text, Image, StatusBar } from "react-native";
import {
  SimpleLineIcons,
  MaterialIcons,
  MaterialCommunityIcons,
  FontAwesome
} from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { createStackNavigator } from "@react-navigation/stack"; // Import createStackNavigator
import { Provider } from 'react-redux'; // Assuming you're using Redux
import store from './src/store'; // Import your Redux store
import LoginPage from './src/components/LoginPage';
import DrawerNavigator from './DrawerNavigator'; 
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator(); // Define Stack Navigator

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar backgroundColor={'#343a40'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
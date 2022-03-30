import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Dashboard } from "../dashboard/Dashboard";
import { Orders } from "../orders/Orders";
import { Client } from "../client/Client";
import { Masters } from "../masters/Masters";
import { Jobs } from "../jobs/Jobs";
import { Reports } from "../reports/Reports";

import MaterialCommunityIcons from 'react-native-vector-icons/AntDesign'

const Tab = createBottomTabNavigator();

export const Navigation: React.FC = () => {

  return (
      <NavigationContainer >
        <Tab.Navigator
          initialRouteName="Feed"
          screenOptions={{
            tabBarActiveTintColor: "#0076fb",
            tabBarInactiveTintColor: '#4b74a3',
            tabBarLabelStyle: {
              fontSize: 15,
            }
          }}
        >
          <Tab.Screen
            name="Home"
            component={Dashboard}
            options={{
              headerShown: false,
              tabBarLabel: "Home",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              )
            }}
          />
          <Tab.Screen
            name="Orders"
            component={Orders}
            options={{
              headerShown: false,
              tabBarLabel: "Orders",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="bars" color={color} size={size} />
              )
            }}
          />

          <Tab.Screen
            name="Client"
            component={Client}
            options={{
              headerShown: false,
              tabBarLabel: "Client",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="user" color={color} size={size} />
              )
            }}
          />

          <Tab.Screen
            name="Masters"
            component={Masters}
            options={{
              headerShown: false,
              tabBarLabel: "Master",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="addusergroup" color={color} size={size} />
              )
            }}
          />

          <Tab.Screen
            name="Jobs"
            component={Jobs}
            options={{
              headerShown: false,
              tabBarLabel: "Job",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="exception1" color={color} size={size} />
              )
            }}
          />

          <Tab.Screen
            name="Reports"
            component={Reports}
            options={{
              headerShown: false,
              tabBarLabel: "Report",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons name="layout" color={color} size={size} />
              )
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
  )
}


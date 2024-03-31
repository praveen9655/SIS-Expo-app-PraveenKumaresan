import React from 'react';
import { createDrawerNavigator, DrawerItemList } from "@react-navigation/drawer";
import { SafeAreaView, View, Text, Image } from "react-native";
import { MaterialIcons, FontAwesome5,MaterialCommunityIcons } from "@expo/vector-icons";
import { useSelector } from 'react-redux'; // Import useSelector
import Home from './src/components/HomeScreen';
import Noticeboard from "./src/components/Noticeboard";
import AdminControl from "./src/components/AdminControl";
import FacultyControl from "./src/components/FacultyControl";
import StudentControl from "./src/components/StudentControl";
import Academic from "./src/components/Academic";

const adminSelector = state => state.admin;

const Drawer = createDrawerNavigator();

const CustomDrawerContent = (props) => {
  const admin = useSelector(adminSelector);

  return (
    <SafeAreaView>
      <View
        style={{
          marginTop:10,
          height: 200,
          width: '100%',
          justifyContent: "center",
          alignItems: "center",
          borderBottomColor: "#f4f4f4",
          borderBottomWidth: 1
        }}
      >
        <Image
          source={{ uri: admin.admin.avatar }}
          style={{
            height: 130,
            width: 130,
            borderRadius: 65
          }}
        />
        <Text
          style={{
            fontSize: 22,
            marginVertical: 6,
            fontWeight: "bold",
            color: "#111"
          }}
        >{admin.admin.name}</Text>
        <Text
          style={{
            fontSize: 16,
            color: "#111"
          }}
        >{admin.admin.department}</Text>
      </View>
      <DrawerItemList {...props} />
    </SafeAreaView>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => <CustomDrawerContent {...props} />}
      drawerStyle={{
        backgroundColor: "#fff",
        width: 250
      }}
      screenOptions={{
        headerStyle: {
          backgroundColor: "#343a40",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold"
        },
        drawerLabelStyle: {
          color: "#111"
        }
      }}
    >
      <Drawer.Screen
        name="Home"
        options={{
          drawerLabel: "Home",
          title: "Home",
          drawerIcon: () => (
            <MaterialIcons name="home" size={20} color="#808080" />
          )
        }}
        component={Home}
      />
      <Drawer.Screen
        name="Notice"
        options={{
          drawerLabel: "Notice",
          title: "Notice",
          drawerIcon: () => (
            <MaterialCommunityIcons name="bulletin-board" size={20} color="#808080" />
          )
        }}
        component={Noticeboard}
      />
      <Drawer.Screen
        name="Admins"
        options={{
          drawerLabel: "Admins",
          title: "Admins",
          drawerIcon: () => (
            <FontAwesome5 name="user-cog" size={17} color="#808080" />
          )
        }}
        component={AdminControl}
      />
      <Drawer.Screen
          name="Faculties"
          options={{
            drawerLabel: "Faculties",
            title: "Faculties",
            drawerIcon: () => (
              <FontAwesome5 name="user-tie" size={20} color="#808080" />
            )
          }}
          component={FacultyControl}
        />
        <Drawer.Screen
          name="Students"
          options={{
            drawerLabel: "Students",
            title: "Students",
            drawerIcon: () => (
              <FontAwesome5 name="user-graduate" size={20} color="#808080" />
            )
          }}
          component={StudentControl}
        />

        <Drawer.Screen
          name="Academics"
          options={{
            drawerLabel: "Academics",
            title: "Academics",
            drawerIcon: () => (
              <MaterialIcons name="book" size={20} color="#808080" />
            )
          }}
          component={Academic}
        />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
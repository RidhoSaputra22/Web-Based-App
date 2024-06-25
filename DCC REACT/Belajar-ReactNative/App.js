// In App.js in a new project

import * as React from "react";
import { View, Text, Button, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

function HomeScreen({ navigation }) {
  return (
    <View style={{}}>
      <Text style={{ innerWidth: 12, outerHeight: 100 }}>Product</Text>
      <Button title="Tombol" onPress={() => navigation.navigate("Product")} />
    </View>
  );
}

function ProductScreen() {
  return (
    <View style={{ padding: 10, borderColor: "black" }}>
      <Text style={{ fontSize: 40, fontFamily: "Arial", fontWeight: 100 }}>
        Product
      </Text>
      <Text style={{ fontSize: 14 }}>
        Drawer Navigator renders a navigation drawer on the side of the screen
        which can be opened and closed via gestures.
      </Text>
      <Image source={require("./icon.png")} style={{ width: 250, height: 250, borderColor: 'black', borderWidth: 1, margin: 20 }} />
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>CALU</Text>
    </View>
  );
}

function MainTap() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={ProductScreen} />
      <Tab.Screen name="Settings" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="mj"
          component={MainTap}
          options={{ headerShown: false }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

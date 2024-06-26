//web 528682722951-uiu8cfnndqt51na9nh1dbmnir8cc1ts6.apps.googleusercontent.com
//android 528682722951-qmh2j2j3qv2avq3vd917tp88dc8sk2m7.apps.googleusercontent.com

import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import React, { useEffect } from "react";
import Button from "./src/components/Button";
import SignIn from "./src/screens/auth/SignIn";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { colors } from "./src/utils/colors";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/app/Home";
import Favorites from "./src/screens/app/Favorites";
import Profile from "./src/screens/app/Profile";
import Settings from "./src/screens/app/Settings";
import ProductDetails from "./src/screens/app/ProductDetails";
import CreateListing from "./src/screens/app/CreateListing";
import { Image } from "react-native";
import MyListings from "./src/screens/app/MyListings";

// import { GoogleSignin } from "@react-native-google-signin/google-signin";

const WEB_CLIENT_ID =
  "528682722951-uiu8cfnndqt51na9nh1dbmnir8cc1ts6.apps.googleusercontent.com";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ProfileStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Settings"
        component={Settings}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="CreateListing"
        component={CreateListing}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="MyListings"
        component={MyListings}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let icon;

          if (route.name === "Home") {
            icon = focused
              ? require("./src/assets/tabs/home-active.png")
              : require("./src/assets/tabs/home.png");
          } else if (route.name === "ProfileStack") {
            icon = focused
              ? require("./src/assets/tabs/profile-active.png")
              : require("./src/assets/tabs/profile.png");
          } else if (route.name === "Favorites") {
            icon = focused
              ? require("./src/assets/tabs/favorites-active.png")
              : require("./src/assets/tabs/favorites.png");
          }

          // You can return any component that you like here!
          return <Image style={{ width: 24, height: 24 }} source={icon} />;
        },
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: { borderTopColor: colors.lightGrey },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Favorites" component={Favorites} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} />
    </Tab.Navigator>
  );
};

const isSignedIn = false;
export default function App() {
  // useEffect(() => {
  //   GoogleSignin.configure({
  //     scopes: ["https://www.googleapis.com/auth/drive.readonly"], // what API you want to access on behalf of the user, default is email and profile
  //     webClientId: WEB_CLIENT_ID, // client ID of type WEB for your server (needed to verify user ID and offline access)
  //     offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
  //     iosClientId: "<FROM DEVELOPER CONSOLE>", // [iOS] if you want to specify the client ID of type iOS (otherwise, it is taken from GoogleService-Info.plist)
  //   });

  //   return () => {
  //     second;
  //   };
  // }, [third]);

  // const [userInfo, setUserInfo] = React.useState(null);
  // const [request, response, promptAsync] = Google.useAuthRequest({
  //   androidClientId:
  //     "528682722951-qmh2j2j3qv2avq3vd917tp88dc8sk2m7.apps.googleusercontent.com",
  //   webClientId:
  //     "528682722951-uiu8cfnndqt51na9nh1dbmnir8cc1ts6.apps.googleusercontent.com",
  // });

  const theme = {
    colors: {
      background: colors.white,
    },
  };
  return (
    <SafeAreaProvider>
      <NavigationContainer theme={theme}>
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen
                name="Tabs"
                component={Tabs}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="ProductDetails"
                component={ProductDetails}
                options={{ headerShown: false }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signup"
                component={Signup}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signin"
                component={SignIn}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

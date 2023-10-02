//web 528682722951-uiu8cfnndqt51na9nh1dbmnir8cc1ts6.apps.googleusercontent.com
//android 528682722951-qmh2j2j3qv2avq3vd917tp88dc8sk2m7.apps.googleusercontent.com

import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";
import React, { useEffect } from "react";
import Button from "./src/components/Button";
import SignIn from "./src/screens/auth/SignIn";
// import { GoogleSignin } from "@react-native-google-signin/google-signin";

const WEB_CLIENT_ID =
  "528682722951-uiu8cfnndqt51na9nh1dbmnir8cc1ts6.apps.googleusercontent.com";
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

  return (
    <SafeAreaView>
      {/* <Splash /> */}

      <SignIn />
    </SafeAreaView>
  );
}

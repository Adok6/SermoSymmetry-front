import { useNavigation } from "@react-navigation/native";
import Header from '../headers/HeaderQuery';
import { StyleSheet, SafeAreaView, View, Dimensions } from "react-native";
import React from "react";
import WebView from 'react-native-webview';

const size = Dimensions.get("window")

const QueryScreen = () => {
  const navigation = useNavigation();
  const APP = "https://app.invictai.io/community/338c8617-e439-4020-a2b3-e9d4a292d631";


  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <Header/>

      <WebView
      style={{width: size.width, height: size.height - 50, flex: 1}}
        source={{ uri: APP }}
        automaticallyAdjustContentInsets = {false}
        domStorageEnabled = {true}
      />

    </SafeAreaView>
    )
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#e3e3e3",
    alignItems: "center",
  },

});


export default QueryScreen;
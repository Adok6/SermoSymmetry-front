import { useNavigation } from "@react-navigation/native";
import Header from '../headers/HeaderQuery';
import { StyleSheet, SafeAreaView, View } from "react-native";
import React from "react";


const QueryScreen = () => {
  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.container}>
      {/* header */}
      <Header/>


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
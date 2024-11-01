import { StatusBar } from "expo-status-bar";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";

export default function App() {
  const checkCache = async () => {
    const cacheResult = await Image.getCachePathAsync("my-image-key");
    console.log(cacheResult);
  };

  const clearCache = async () => {
    await Image.clearDiskCache();
  };

  // get
  return (
    <View style={styles.container}>
      <Button onPress={checkCache} title="Check Cache" />

      <Image
        source={{ uri: "http://localhost:3000/image", cacheKey: "my-image-key" }}
        style={{ width: 200, height: 200 }}
        cachePolicy="disk"
      />

      <Button onPress={clearCache} title="Clear Cache" color={"red"} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

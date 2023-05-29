import { Platform } from "react-native";

export const API_URL =
  Platform.OS !== "android" ? "http://192.168.1.68:3333" : "http://localhost:3333";

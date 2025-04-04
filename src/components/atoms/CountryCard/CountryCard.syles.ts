import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: "#f5f5f5",
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
    alignItems: "center",
    elevation: 2,
  },
  emoji: {
    fontSize: 32,
    marginRight: 16,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
  },
  code: {
    color: "#555",
    fontSize: 12,
  },
});

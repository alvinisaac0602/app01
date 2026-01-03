import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome 👋</Text>

      {/* Phone */}
      <View style={styles.input}>
        <Text>+256</Text>
        <TextInput
          placeholder="Phone number"
          keyboardType="phone-pad"
          style={{ marginLeft: 8 }}
        />
      </View>

      <TouchableOpacity style={styles.phoneBtn}>
        <Text style={{ color: "#fff" }}>Continue with Phone</Text>
      </TouchableOpacity>

      <Text style={{ textAlign: "center", marginVertical: 20 }}>OR</Text>

      {/* GOOGLE */}
      <TouchableOpacity
        style={styles.googleBtn}
        onPress={() => router.replace("/(tabs)/home")}

      >
        <Text>Continue with Google</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", padding: 24 },
  title: { fontSize: 28, fontWeight: "700", marginBottom: 24 },
  input: {
    flexDirection: "row",
    borderWidth: 1,
    padding: 12,
    borderRadius: 8,
  },
  phoneBtn: {
    backgroundColor: "#000",
    padding: 14,
    borderRadius: 8,
    marginTop: 12,
    alignItems: "center",
  },
  googleBtn: {
    borderWidth: 1,
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
});

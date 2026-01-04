import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useRouter } from "expo-router";

// Color Palette: Meta theme + iPhone clean
const COLORS = {
  primary: "#1877F2", // Meta Blue
  secondary: "#fff",
  textDark: "#111",
  textLight: "#555",
  inputBg: "#f2f2f7",
  buttonText: "#fff",
};

export default function LoginScreen() {
  const router = useRouter();
  const [phone, setPhone] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1, backgroundColor: COLORS.secondary }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.title}>Welcome Back 👋</Text>
        <Text style={styles.subtitle}>
          Sign in to continue and enjoy seamless experience
        </Text>

        {/* Phone Input */}
        <View style={styles.inputContainer}>
          <Text style={styles.countryCode}>+256</Text>
          <TextInput
            placeholder="Phone number"
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
            style={styles.input}
          />
        </View>

        {/* Phone Button */}
        <TouchableOpacity
          style={[styles.button, { backgroundColor: COLORS.primary }]}
          onPress={() => router.replace("/(tabs)/home")}
        >
          <Text style={styles.buttonText}>Continue with Phone</Text>
        </TouchableOpacity>

        <Text style={styles.orText}>OR</Text>

        {/* Google Button */}
        <TouchableOpacity
          style={[styles.button, styles.googleButton]}
          onPress={() => router.replace("/(tabs)/home")}
        >
          <Text style={[styles.buttonText, { color: COLORS.textDark }]}>
            Continue with Google
          </Text>
        </TouchableOpacity>

      
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 24,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    color: COLORS.textDark,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textLight,
    marginBottom: 32,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.inputBg,
    paddingHorizontal: 12,
    paddingVertical: 14,
    borderRadius: 12,
    marginBottom: 16,
  },
  countryCode: {
    fontSize: 16,
    color: COLORS.textDark,
  },
  input: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: COLORS.textDark,
  },
  button: {
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: "center",
    marginTop: 12,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "600",
    color: COLORS.buttonText,
  },
  googleButton: {
    backgroundColor: COLORS.secondary,
    borderWidth: 1,
    borderColor: COLORS.inputBg,
  },
  orText: {
    textAlign: "center",
    marginVertical: 20,
    color: COLORS.textLight,
    fontWeight: "500",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 32,
  },
  footerText: {
    fontSize: 14,
    color: COLORS.textLight,
  },
});

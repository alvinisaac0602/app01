import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
  Platform,
  KeyboardAvoidingView,
} from "react-native";
import { useRouter } from "expo-router";

// Dummy property data
const allProperties = [
  { id: "1", title: "2 Bedroom Apartment", location: "Kampala", price: "$300", bedrooms: 2, image: "https://via.placeholder.com/200" },
  { id: "2", title: "3 Bedroom House", location: "Entebbe", price: "$500", bedrooms: 3, image: "https://via.placeholder.com/200" },
  { id: "3", title: "Studio Apartment", location: "Kampala", price: "$200", bedrooms: 1, image: "https://via.placeholder.com/200" },
  { id: "4", title: "4 Bedroom Villa", location: "Mukono", price: "$700", bedrooms: 4, image: "https://via.placeholder.com/200" },
];

export default function HomeScreen() {
  const router = useRouter();
  const [searchText, setSearchText] = useState("");
  const [properties, setProperties] = useState(allProperties);

  const handleSearch = (text) => {
    setSearchText(text);
    const filtered = allProperties.filter((prop) =>
      prop.title.toLowerCase().includes(text.toLowerCase()) ||
      prop.location.toLowerCase().includes(text.toLowerCase())
    );
    setProperties(filtered);
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View style={styles.container}>
          {/* Search Bar */}
          <TextInput
            placeholder="Search by location or property"
            value={searchText}
            onChangeText={handleSearch}
            style={styles.searchInput}
          />

          {/* Properties List */}
          <FlatList
            data={properties}
            keyExtractor={(item) => item.id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.card}
                onPress={() => router.push(`/property/${item.id}`)}
              >
                <Image source={{ uri: item.image }} style={styles.image} />
                <View style={styles.cardContent}>
                  <Text style={styles.title}>{item.title}</Text>
                  <Text style={styles.location}>{item.location}</Text>
                  <Text style={styles.details}>{item.bedrooms} Bedrooms • {item.price}</Text>
                </View>
              </TouchableOpacity>
            )}
            ListEmptyComponent={<Text style={styles.emptyText}>No properties found</Text>}
          />
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  searchInput: {
    backgroundColor: "#f2f2f7",
    borderRadius: 12,
    padding: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 12,
    overflow: "hidden",
    backgroundColor: "#f2f2f7",
  },
  image: { width: "100%", height: 180 },
  cardContent: { padding: 12 },
  title: { fontSize: 16, fontWeight: "700", marginBottom: 4 },
  location: { fontSize: 14, color: "#555", marginBottom: 4 },
  details: { fontSize: 14, fontWeight: "600" },
  emptyText: { textAlign: "center", marginTop: 32, color: "#555" },
});

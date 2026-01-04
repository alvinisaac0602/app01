import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Image,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

// Dummy saved properties
const savedProperties = [
  {
    id: "1",
    title: "2 Bedroom Apartment",
    location: "Kampala",
    price: "$300",
    bedrooms: 2,
    image: "https://via.placeholder.com/200",
  },
  {
    id: "2",
    title: "3 Bedroom House",
    location: "Entebbe",
    price: "$500",
    bedrooms: 3,
    image: "https://via.placeholder.com/200",
  },
];

export default function SavedScreen() {
  const router = useRouter();
  const [favorites, setFavorites] = useState(savedProperties);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Saved Properties</Text>

      <FlatList
        data={favorites}
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
              <Text style={styles.details}>
                {item.bedrooms} Bedrooms • {item.price}
              </Text>
            </View>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>You have no saved properties yet.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: "#fff" },
  header: { fontSize: 24, fontWeight: "700", marginBottom: 16 },
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

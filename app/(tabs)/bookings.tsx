import React, { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { useRouter } from "expo-router";

// Dummy bookings data
const initialBookings = [
  {
    id: "1",
    property: "2 Bedroom Apartment",
    location: "Kampala",
    date: "2026-01-10",
    time: "2:00 PM",
    status: "Confirmed",
  },
  {
    id: "2",
    property: "3 Bedroom House",
    location: "Entebbe",
    date: "2026-01-12",
    time: "11:00 AM",
    status: "Pending",
  },
];

export default function BookingScreen() {
  const router = useRouter();
  const [bookings, setBookings] = useState(initialBookings);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Your Bookings</Text>

      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => router.push(`/property/${item.id}`)}
          >
            <Text style={styles.property}>{item.property}</Text>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.details}>
              {item.date} • {item.time}
            </Text>
            <Text
              style={[
                styles.status,
                item.status === "Confirmed"
                  ? { color: "#28a745" }
                  : { color: "#ffc107" },
              ]}
            >
              {item.status}
            </Text>
          </TouchableOpacity>
        )}
        ListEmptyComponent={
          <Text style={styles.emptyText}>You have no bookings yet.</Text>
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
    padding: 16,
    backgroundColor: "#f2f2f7",
  },
  property: { fontSize: 16, fontWeight: "700", marginBottom: 4 },
  location: { fontSize: 14, color: "#555", marginBottom: 4 },
  details: { fontSize: 14, fontWeight: "600", marginBottom: 4 },
  status: { fontSize: 14, fontWeight: "600" },
  emptyText: { textAlign: "center", marginTop: 32, color: "#555" },
});

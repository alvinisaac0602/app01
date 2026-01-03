import { View, Text, FlatList, Image, StyleSheet } from "react-native";

// Generate 30 dummy posts
const posts = Array.from({ length: 30 }, (_, i) => ({
  id: (i + 1).toString(),
  title: `Post ${i + 1}`,
  description: `This is a description for post number ${i + 1}. Keep scrolling to see more posts.`,
  image: `https://via.placeholder.com/300x150.png?text=Post+${i + 1}`,
}));

export default function Home() {
  const renderItem = ({ item }: { item: typeof posts[0] }) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 20 }}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff", padding: 12 },
  card: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    marginBottom: 16,
    padding: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
    borderRadius: 12,
    marginBottom: 8,
  },
  title: { fontSize: 18, fontWeight: "700", marginBottom: 4 },
  description: { fontSize: 14, color: "#555" },
});

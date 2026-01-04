import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName: string = "";

          if (route.name === "home") iconName = "home-outline";
          if (route.name === "saved") iconName = "heart-outline";
          if (route.name === "bookings") iconName = "calendar-outline";
          if (route.name === "profile") iconName = "person-outline";

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#000",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tabs.Screen name="home" />
      <Tabs.Screen name="saved" />
      <Tabs.Screen name="bookings" />
      <Tabs.Screen name="profile" />
    </Tabs>
  );
}

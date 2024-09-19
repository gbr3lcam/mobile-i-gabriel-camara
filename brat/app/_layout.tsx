import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="Tracklist1"/>
      <Stack.Screen name="Tracklist2"/>
    </Stack>
  );
}
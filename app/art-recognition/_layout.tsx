import { Stack } from 'expo-router';

export default function ArtRecognitionLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="gallery" />
    </Stack>
  );
}
import { Stack } from 'expo-router';

export default function QuizLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="start/[id]" />
      <Stack.Screen name="category/[id]" />
      <Stack.Screen name="results/[id]" />
    </Stack>
  );
}
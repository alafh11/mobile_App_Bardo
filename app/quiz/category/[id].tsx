import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';
import quizData from '../../../data/quiz-data.json';
import { Ionicons } from '@expo/vector-icons';


export default function CategoryDetailScreen() {
  const { id } = useLocalSearchParams();
  const router = useRouter();
  
  const category = quizData.categories.find(cat => cat.id === id);
  
  if (!category) {
    return (
      <View style={styles.container}>
        <Text>Category not found</Text>
      </View>
    );
  }

  const startQuiz = () => {
    router.push(`/quiz/start/${category.id}` as any);
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <Stack.Screen options={{ title: category.title }} />
      
      <View style={styles.header}>
        <View style={[styles.categoryIcon, { backgroundColor: category.color }]}>
          <Text style={styles.iconText}>{category.title.charAt(0)}</Text>
        </View>
        <Text style={styles.title}>{category.title}</Text>
        <Text style={styles.subtitle}>{category.description}</Text>
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>About this Category</Text>
        <Text style={styles.infoText}>
          Test your knowledge about {category.title.toLowerCase()} artifacts and history 
          in the Bardo Museum. This quiz contains {category.questions.length} questions 
          about various exhibits and historical facts.
        </Text>
      </View>

      <View style={styles.statsCard}>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>{category.questions.length}</Text>
          <Text style={styles.statLabel}>Questions</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>Multiple</Text>
          <Text style={styles.statLabel}>Choice</Text>
        </View>
        <View style={styles.statItem}>
          <Text style={styles.statNumber}>Free</Text>
          <Text style={styles.statLabel}>To Play</Text>
        </View>
      </View>

      <TouchableOpacity style={[styles.startButton, { backgroundColor: category.color }]} onPress={startQuiz}>
        <Text style={styles.startButtonText}>Start Quiz</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  header: {
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 10,
  },
  categoryIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },
  iconText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  infoCard: {
    backgroundColor: 'white',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
   backButton: {
    padding: 8,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  statsCard: {
    backgroundColor: 'white',
    margin: 15,
    padding: 20,
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  startButton: {
    margin: 15,
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  startButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
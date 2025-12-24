import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useLocalSearchParams, Stack, useRouter } from 'expo-router';

interface ResultsParams {
  score: string;
  total: string;
  categoryId: string;
  time: string;
}

export default function ResultsScreen() {
  const params = useLocalSearchParams();
  const { score, total, categoryId, time } = (params ?? {}) as unknown as ResultsParams;
  const router = useRouter();
  
  const numericScore = parseInt(score || '0');
  const numericTotal = parseInt(total || '1');
  const percentage = (numericScore / numericTotal) * 100;

  const getPerformanceMessage = () => {
    if (percentage >= 90) return "Outstanding! Museum Master!";
    if (percentage >= 80) return "Excellent! History Expert!";
    if (percentage >= 70) return "Very Good! Knowledgeable Visitor!";
    if (percentage >= 60) return "Good! Keep Learning!";
    if (percentage >= 50) return "Not Bad! Try Again!";
    return "Keep Exploring the Museum!";
  };

  const getPerformanceColor = () => {
    if (percentage >= 80) return '#27ae60';
    if (percentage >= 60) return '#f39c12';
    return '#e74c3c';
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <Stack.Screen options={{ title: 'Quiz Results' }} />
      
      <View style={styles.header}>
        <View style={[styles.scoreCircle, { borderColor: getPerformanceColor() }]}>
          <Text style={styles.scorePercentage}>{percentage.toFixed(0)}%</Text>
          <Text style={styles.scoreText}>{numericScore}/{numericTotal}</Text>
        </View>
        
        <Text style={[styles.performanceMessage, { color: getPerformanceColor() }]}>
          {getPerformanceMessage()}
        </Text>
        
        <Text style={styles.timeText}>Time: {time}</Text>
      </View>

      <View style={styles.statsCard}>
        <Text style={styles.statsTitle}>Quiz Statistics</Text>
        
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Correct Answers</Text>
          <Text style={[styles.statValue, { color: '#27ae60' }]}>{numericScore}</Text>
        </View>
        
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Wrong Answers</Text>
          <Text style={[styles.statValue, { color: '#e74c3c' }]}>{numericTotal - numericScore}</Text>
        </View>
        
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Accuracy</Text>
          <Text style={styles.statValue}>{percentage.toFixed(1)}%</Text>
        </View>
        
        <View style={styles.statRow}>
          <Text style={styles.statLabel}>Completion Time</Text>
          <Text style={styles.statValue}>{time}</Text>
        </View>
      </View>

      <View style={styles.actionsCard}>
        <Text style={styles.actionsTitle}>What would you like to do next?</Text>
        
        <TouchableOpacity 
          style={[styles.actionButton, styles.secondaryButton]}
          onPress={() => router.push('/quiz')}
        >
          <Text style={styles.secondaryButtonText}>Choose Different Category</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={[styles.actionButton, styles.tertiaryButton]}
          onPress={() => router.push('/')}
        >
          <Text style={styles.tertiaryButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.funFactsCard}>
        <Text style={styles.funFactsTitle}>Did You Know? 🏛️</Text>
        <Text style={styles.funFactText}>
          • The Bardo Museum houses the world's largest collection of Roman mosaics
        </Text>
        <Text style={styles.funFactText}>
          • Some mosaics in Bardo are over 1,800 years old
        </Text>
        <Text style={styles.funFactText}>
          • The museum was originally a 13th-century Hafsid palace
        </Text>
        <Text style={styles.funFactText}>
          • It became a museum in 1888 under French colonial rule
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f9fa',
    padding: 15,
  },
  header: {
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 30,
    borderRadius: 20,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  scoreCircle: {
    width: 140,
    height: 140,
    borderRadius: 70,
    borderWidth: 6,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    backgroundColor: 'white',
  },
  scorePercentage: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#333',
  },
  scoreText: {
    fontSize: 18,
    color: '#666',
    marginTop: 5,
  },
  performanceMessage: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  timeText: {
    fontSize: 16,
    color: '#666',
  },
  statsCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  statRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  statLabel: {
    fontSize: 16,
    color: '#666',
  },
  statValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  actionsCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  actionButton: {
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 10,
  },
  primaryButton: {
    backgroundColor: '#8B4513',
  },
  secondaryButton: {
    backgroundColor: '#f8f9fa',
    borderWidth: 2,
    borderColor: '#8B4513',
  },
  tertiaryButton: {
    backgroundColor: 'transparent',
  },
  primaryButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  secondaryButtonText: {
    color: '#8B4513',
    fontSize: 16,
    fontWeight: 'bold',
  },
  tertiaryButtonText: {
    color: '#666',
    fontSize: 16,
  },
  funFactsCard: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  funFactsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'center',
  },
  funFactText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
  },
});
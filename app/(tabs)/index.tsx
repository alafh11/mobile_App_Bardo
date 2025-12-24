import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router'; 
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
      const router = useRouter(); 

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Bardo Museum</Text>
        <Text style={styles.headerSubtitle}>Tunisia's Cultural Treasure</Text>
      </View>

      <View style={styles.heroContainer}>
        <Image 
          source={require('../../assets/images/Bardo-Museum-scaled-3388629670.jpg')} 
          style={styles.heroImage}
        />
        <View style={styles.heroOverlay}>
          <Text style={styles.heroText}>Journey Through 3000 Years of History</Text>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Welcome to Bardo National Museum</Text>
        <Text style={styles.sectionText}>
          The Bardo National Museum, located in Tunis, is one of the most important museums 
          in Africa and the Mediterranean region. It is known for its world-class collection 
          of Roman mosaics, ancient sculptures, and historical artifacts from different 
          civilizations that lived in Tunisia over thousands of years.
        </Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Journey Through Time</Text>
        <View style={styles.timelineContainer}>
          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <Text style={styles.timelineText}>Prehistory</Text>
          </View>
          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <Text style={styles.timelineText}>Punic / Carthaginian Era</Text>
          </View>
          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <Text style={styles.timelineText}>Roman Empire</Text>
          </View>
          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <Text style={styles.timelineText}>Early Christian Era</Text>
          </View>
          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <Text style={styles.timelineText}>Islamic Period</Text>
          </View>
          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <Text style={styles.timelineText}>Ottoman Period</Text>
          </View>
          <View style={styles.timelineItem}>
            <View style={styles.timelineDot} />
            <Text style={styles.timelineText}>Modern Tunisian History</Text>
          </View>
        </View>
      </View>

         <View style={styles.section}>
        <Text style={styles.sectionTitle}>Explore & Learn</Text>
        <View style={styles.featuresGrid}>
          
          <TouchableOpacity 
            style={styles.featureCard}
            onPress={() => router.push('/(tabs)/quiz')} // Add this
          >
            <View style={[styles.featureIcon, { backgroundColor: '#8B4513' }]}>
              <Ionicons name="game-controller" size={24} color="white" />
            </View>
            <Text style={styles.featureTitle}>History Quiz</Text>
            <Text style={styles.featureText}>Test your knowledge across all historical periods</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.featureCard}
            onPress={() => router.push('/(tabs)/art-recognition')} // Add this
          >
            <View style={[styles.featureIcon, { backgroundColor: '#CD853F' }]}>
              <Ionicons name="image" size={24} color="white" />
            </View>
            <Text style={styles.featureTitle}>Art Recognition</Text>
            <Text style={styles.featureText}>Identify artifacts from different eras</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaText}>Begin Historical Journey</Text>
        <Ionicons name="arrow-forward" size={20} color="white" />
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
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: '#8B4513',
  },
  headerTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#F5DEB3',
    textAlign: 'center',
    marginTop: 5,
  },
  heroContainer: {
    position: 'relative',
    height: 200,
    margin: 20,
    borderRadius: 12,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  heroOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(139, 69, 19, 0.8)',
    padding: 15,
  },
  heroText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 15,
  },
  sectionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666',
    textAlign: 'justify',
  },
  timelineContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    borderLeftWidth: 3,
    borderLeftColor: '#8B4513',
    paddingLeft: 15,
    marginLeft: 10,
  },
  timelineDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#8B4513',
    marginRight: 15,
  },
  timelineText: {
    fontSize: 16,
    color: '#333',
    fontWeight: '500',
  },
  featuresGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  featureCard: {
    width: '48%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  featureIcon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#8B4513',
    marginBottom: 5,
  },
  featureText: {
    fontSize: 12,
    color: '#666',
    lineHeight: 16,
  },
  highlightsContainer: {
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  highlightItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  highlightText: {
    fontSize: 16,
    color: '#333',
    marginLeft: 10,
  },
  ctaButton: {
    flexDirection: 'row',
    backgroundColor: '#8B4513',
    margin: 20,
    padding: 18,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 5,
  },
  ctaText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  },
});
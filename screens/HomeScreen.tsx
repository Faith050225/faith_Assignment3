import React from 'react';
import { View, Button, FlatList, StyleSheet, Text } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Course } from '../types/types';

// Sample courses data
const courses: Course[] = [
  { id: '1', name: 'First Aid', fee: 1500, purpose: 'To provide first aid awareness and basic life support', content: ['Wounds and bleeding', 'Burns and fractures', 'Emergency scene management', 'CPR', 'Respiratory distress e.g., Choking, blocked airway'] },
  { id: '2', name: 'Sewing', fee: 1500, purpose: 'To provide alterations and new garment tailoring services', content: ['Types of stitches', 'Threading a sewing machine', 'Sewing buttons, zips, hems and seams', 'Alterations', 'Designing and sewing new garments'] },
  { id: '3', name: 'Landscaping', fee: 1500, purpose: 'To provide landscaping services for new and established gardens', content: ['Indigenous and exotic plants and trees', 'Fixed structures (fountains, statues, benches, tables, built-in braai)', 'Balancing of plants and trees in a garden', 'Aesthetics of plant shapes and colours', 'Garden layout'] },
  { id: '4', name: 'Life Skills', fee: 1500, purpose: 'To provide skills to navigate basic life necessities', content: ['Opening a bank account', 'Basic labour law (know your rights)', 'Basic reading and writing literacy', 'Basic numeric literacy'] },
  { id: '5', name: 'Child Minding', fee: 750, purpose: 'To provide basic child and baby care', content: ['Birth to six-month old baby needs', 'Seven-month to one-year old needs', 'Toddler needs', 'Educational toys'] },
  { id: '6', name: 'Cooking', fee: 750, purpose: 'To prepare and cook nutritious family meals', content: ['Nutritional requirements for a healthy body', 'Types of protein, carbohydrates and vegetables', 'Planning meals', 'Preparation and cooking of meals'] },
  { id: '7', name: 'Garden Maintenance', fee: 750, purpose: 'To provide basic knowledge of watering, pruning and planting in a domestic garden.', content: ['Water restrictions and the watering requirements of indigenous and exotic plants', 'Pruning and propagation of plants', 'Planting techniques for different plant types'] },
];

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const renderCourseItem = ({ item }: { item: Course }) => (
    <View style={styles.courseContainer}>
      <Text style={styles.courseName}>{item.name}</Text>
      <Text style={styles.courseFee}>Fee: R{item.fee}</Text>
      <Button
        title="View Details"
        onPress={() => navigation.navigate('CourseDetails', { course: item })}
      />
      
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={courses}
        renderItem={renderCourseItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 10, backgroundColor: '#fff' },
  courseContainer: {
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  courseName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  courseFee: {
    fontSize: 16,
    marginVertical: 5,
  },
});

export default HomeScreen;
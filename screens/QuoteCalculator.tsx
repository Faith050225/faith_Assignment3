import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, Alert } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList, Course } from '../types';

// Sample course data
const courses: Course[] = [
  { id: '1', name: 'First Aid', fee: 1500 },
  { id: '2', name: 'Sewing', fee: 1500 },
  { id: '3', name: 'Landscaping', fee: 1500 },
  { id: '4', name: 'Life Skills', fee: 1500 },
  { id: '5', name: 'Child Minding', fee: 750 },
  { id: '6', name: 'Cooking', fee: 750 },
  { id: '7', name: 'Garden Maintenance', fee: 750 },
];

type Props = NativeStackScreenProps<RootStackParamList, 'QuoteCalculator'>;

const QuoteCalculator: React.FC<Props> = ({ navigation }) => {
  const [selectedCourses, setSelectedCourses] = useState<Course[]>([]);
  const [total, setTotal] = useState<number>(0);

  // Toggle course selection
  const handleSelectCourse = (course: Course) => {
    const isSelected = selectedCourses.find((c) => c.id === course.id);
    let updatedCourses;

    if (isSelected) {
      updatedCourses = selectedCourses.filter((c) => c.id !== course.id);
    } else {
      updatedCourses = [...selectedCourses, course];
    }

    setSelectedCourses(updatedCourses);
    calculateTotal(updatedCourses);
  };

  // Calculate the total fee with discount
  const calculateTotal = (selected: Course[]) => {
    const subtotal = selected.reduce((acc, course) => acc + course.fee, 0);

    let discount = 0;
    if (selected.length >= 3) discount = 0.1; // 10% discount for 3+ courses
    else if (selected.length >= 5) discount = 0.2; // 20% discount for 5+ courses

    const totalAmount = subtotal - subtotal * discount;
    setTotal(totalAmount);
  };

  // Confirm the quote
  const handleConfirmQuote = () => {
    if (selectedCourses.length === 0) {
      Alert.alert('Error', 'Please select at least one course.');
      return;
    }
    Alert.alert(
      'Quote Confirmed',
      'Total amount: R${total.toFixed(2)}',
      [
        { text: 'OK', onPress: () => navigation.navigate('Contact') }, // Navigate to Contact screen on confirmation
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quote Calculator</Text>
      <FlatList
        data={courses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.courseContainer}>
            <Text style={styles.courseName}>{item.name}</Text>
            <Text style={styles.courseFee}>R{item.fee}</Text>
            <Button
              title={
                selectedCourses.find((c) => c.id === item.id)
                  ? '✓ ${item.name}'
                  : 'Select ${item.name}'
              }
              onPress={() => handleSelectCourse(item)}
            />
          </View>
        )}
      />
      <Text style={styles.total}>Total: R{total.toFixed(2)}</Text>
      <Button title="Confirm Quote" onPress={handleConfirmQuote} />
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  courseContainer: {
    marginVertical: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#f9f9f9',
  },
  courseName: { fontSize: 18, fontWeight: 'bold' },
  courseFee: { fontSize: 16, marginVertical: 5 },
  total: { fontSize: 20, fontWeight: 'bold', marginVertical: 20 },
});

export default QuoteCalculator;
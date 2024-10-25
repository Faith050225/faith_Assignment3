import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';

type Props = NativeStackScreenProps<RootStackParamList, 'CourseDetails'>;

const CourseDetails: React.FC<Props> = ({ route, navigation }) => {
  const { course } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{course.name}</Text>
      <Text style={styles.fee}>Fee: R{course.fee}</Text>
      <Text style={styles.purpose}>Purpose: {course.purpose}</Text>
      
      <Text style={styles.subtitle}>Content:</Text>
      <View style={styles.contentContainer}>
        {course.content.map((item, index) => (
          <Text key={index} style={styles.contentItem}>
            - {item}
          </Text>
        ))}
      </View>

      <Button title="Register" onPress={() => navigation.navigate('Register', { selectedCourse: course })} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  fee: {
    fontSize: 18,
    marginBottom: 10,
  },
  purpose: {
    fontSize: 16,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  contentContainer: {
    marginVertical: 10,
  },
  contentItem: {
    fontSize: 16,
  },
});

export default CourseDetails;
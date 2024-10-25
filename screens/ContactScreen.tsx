// ContactScreen.tsx
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, Linking, Dimensions } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/types';

type Props = NativeStackScreenProps<RootStackParamList, 'Contact'>;

const ContactScreen: React.FC<Props> = ({ navigation }) => {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  const handleSend = () => {
    if (!name || !message) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }
    Alert.alert('Message Sent', 'Thank you for reaching out.');
  };

  const openEmail = () => {
    Linking.openURL('mailto:info@empowerthenation.co.za');
  };

  const openPhone = () => {
    Linking.openURL('tel:+272 083 8030');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>

      {/* Contact Information */}
      <Text style={styles.info} onPress={openEmail}>
        Email: info@empowerthenation.co.za.
      </Text>
      <Text style={styles.info} onPress={openPhone}>
        Phone: +272 083 8020
      </Text>
      <Text style={styles.info}>Address: 123 Empower Street, Johaannesburg, Soyh Africa</Text>

      {/* Google Map */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: -23.9142, // Example coordinates (replace with actual)
          longitude: 29.4849,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{ latitude: -23.9142, longitude: 29.4849 }}
          title="Your Business"
          description="123 Empower Street, Johaannesburg, Soyh Africa"
        />
      </MapView>

      {/* Input Fields */}
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={[styles.input, styles.messageInput]}
        placeholder="Your Message"
        value={message}
        onChangeText={setMessage}
        multiline
      />

      <Button title="Send Message" onPress={handleSend} />
      <Button title="Back to Home" onPress={() => navigation.navigate('Home')} />
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
    marginBottom: 20,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
    textDecorationLine: 'underline',
    color: 'blue',
  },
  map: {
    width: Dimensions.get('window').width,
    height: 200,
    marginVertical: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  messageInput: {
    height: 100,
  },
});

export default ContactScreen;
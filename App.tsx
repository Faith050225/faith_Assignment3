import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import CourseDetails from './screens/CourseDetails';
import QuoteCalculator from './screens/QuoteCalculator';
import ContactScreen from './screens/ContactScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="CourseDetails" component={CourseDetails} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="QuoteCalculator" component={QuoteCalculator} />
        <Stack.Screen name="Contact" component={ContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
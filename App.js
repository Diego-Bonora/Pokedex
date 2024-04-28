import { NavigationContainer } from '@react-navigation/native';
import { Navigation } from './src/Navigation/Navigation';
import { AuthProvider } from './src/context/AuthContext';
import { SafeAreaView } from 'react-native';

export default function App() {
  return (
    <NavigationContainer >
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NavigationContainer>
  );
}
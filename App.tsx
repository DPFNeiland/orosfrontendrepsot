import 'react-native-gesture-handler';
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import { useFonts } from "expo-font";
import Splash from "./src/screens/Splash/Splash";
import { AuthProvider } from './src/contexts/auth';

export default function App() {
  const [fontsLoaded] = useFonts({
    'MBFSpace': require('./assets/fonts/MBFSpace/MBFSpace.ttf'),
    'GothamLight': require('./assets/fonts/Gotham/GothamLight.ttf'),
    'GothamMedium': require('./assets/fonts/Gotham/GothamMedium.ttf'),
    'RoundoMedium': require('./assets/fonts/roundo/RoundoMedium.otf'),
    'RoundoLight': require('./assets/fonts/roundo/RoundoLight.otf'),
    'RoundoSemiBold': require('./assets/fonts/roundo/RoundoSemiBold.otf')
  });
  const [isLoading, setIsLoading] = useState(true);
  const [isMapViewLoaded, setIsMapViewLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Simulando o carregamento da API do Google Maps
    const timer = setTimeout(() => {
      setIsMapViewLoaded(true);
    }, 15000); // Ajuste o tempo conforme necessário para o carregamento real da API do Google Maps
    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded || isLoading) {
    return <Splash />;
  }

  if (!isMapViewLoaded) {
    return <Splash />;
  }

  return (
    <NavigationContainer>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  )
}

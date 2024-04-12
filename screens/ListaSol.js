import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity, ScrollView, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ListaSol = () => {
  const [solData, setSolData] = useState(null);

  useEffect(() => {
    fetchSolData();
  }, []);

  const fetchSolData = async () => {
    try {
      const response = await fetch('https://6618c2469a41b1b3dfbddd3e.mockapi.io/Sol');
      const data = await response.json();
      setSolData(data[0]); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleBotonPress = () => {
    Linking.openURL("https://youtu.be/OY6bVtrywN8?si=Jm2m5m3WEE_TsBoN");
  };

  const handleMasPress = () => {
    Linking.openURL(solData.mas);
  };

  if (!solData) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Cargando...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/e2/01/89/e20189a915ab6655e01e928dd83adeee.jpg' }}
      style={styles.backgroundImage}
    >
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <TouchableOpacity onPress={handleBotonPress}>
            <Image source={{ uri: solData.imagen }} style={styles.planetaImagen} />
          </TouchableOpacity>
          <Text style={styles.info}>{solData.Description}</Text>

          <View style={styles.textContainer}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>
              <Image source={{ uri: solData.imagen2 }} style={styles.secondImage} />
              <View style={{ marginLeft: 20 }}>
                <Text style={styles.info}>Tipo: {solData.tipo}</Text>
                <Text style={styles.info}>Masa: {solData.masa}</Text>
                <Text style={styles.info}>Radio: {solData.radio}</Text>
              </View>
            </View>
            <Text style={styles.info}>Distancia a la Tierra: {solData.distanciaTierra}</Text>
            <Text style={styles.info}>Edad: {solData.edad}</Text>
            <Text style={styles.info}>Temperatura Superficie: {solData.temperaturaSuperficie}</Text>
            <Text style={styles.info}>Temperatura Núcleo: {solData.temperaturaNucleo}</Text>
            <Text style={styles.info}>Periodo de Rotación: {solData.periodoRotacion}</Text>
            <Text style={styles.info}>Periodo Orbital: {solData.periodoOrbital}</Text>
            <Text style={styles.info}>Luminosidad: {solData.luminosidad}</Text>
            <Text style={styles.info}>{solData.Description2}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.boton} onPress={handleBotonPress}>
                <Ionicons name="play-circle" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.boton} onPress={handleMasPress}>
                <AntDesign name="pluscircleo" size={30} color="white" />
              </TouchableOpacity>
            </View>
            <Image source={{ uri: solData.imagen3 }} style={styles.planetaImagen3} />
          </View>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    alignItems: 'center',
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  planetaImagen: {
    width: 300,
    height: 300,
    borderRadius: 200,
    marginBottom: 20,
  },
  planetaImagen3: {
    width: 100,
    height: 100,
    borderRadius: 200,
    left: 280,
    marginTop: -100,
  },
  textContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  nombrePlaneta: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
  },
  info: {
    fontSize: 18,
    marginBottom: 10,
    color: 'white',
  },
  boton: {
    backgroundColor: '#E0B02C',
    padding: 5,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    borderRadius: 100,
    marginBottom: 10,
    marginLeft: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
    marginBottom: 10,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondImage: {
    width: 150,
    height: 150,
    borderRadius: 50,
  },
});

export default ListaSol;

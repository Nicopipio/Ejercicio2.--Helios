import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const DetallePlaneta = ({ route, navigation }) => {
  const { planeta } = route.params;

  const handleBotonPress = () => {
    Linking.openURL(planeta.Boton);
  };
  const handleMasPress = () => {
    Linking.openURL(planeta.mas);
  };
  return (
    <ImageBackground source={{ uri: 'https://i.pinimg.com/564x/e2/01/89/e20189a915ab6655e01e928dd83adeee.jpg' }} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.goBackButton}>
            <Ionicons name="arrow-back" size={24} color="white" />
            <Text style={styles.goBackText}>Volver</Text>
          </TouchableOpacity>
          <Text style={styles.nombrePlaneta}>{planeta.nombre}</Text>
          <Image source={{ uri: planeta.imagen }} style={styles.planetaImagen} />
          <View style={styles.textContainer}>
            <Text style={styles.info}>Tipo: {planeta.tipo}</Text>
            <Text style={styles.info}>Masa: {planeta.masa}</Text>
            <Text style={styles.info}>Radio: {planeta.radio}</Text>
            <Text style={styles.info}>Órbita alrededor del Sol: {planeta.orbita}</Text>
            <Text style={styles.info}>Tiempo de rotación: {planeta.rotacion}</Text>
            <Text style={styles.info}>Cantidad de lunas: {planeta.lunas}</Text>
            <Text style={styles.info}>Distancia al Sol: {planeta.distanciaSol}</Text>
            <Text style={styles.info}>{planeta.Description}</Text>
            <Text style={styles.info}>{planeta.Description2}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.boton} onPress={handleBotonPress}>
                <Ionicons name="play-circle" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.boton} onPress={handleMasPress}>
                <AntDesign name="pluscircleo" size={30} color="white" />           
              </TouchableOpacity>
            </View>
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
    width: 200,
    height: 200,
    borderRadius: 100,
    marginBottom: 20,
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
  goBackButton: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: -65,
    left: 0,
    zIndex: 1,
  },
  goBackText: {
    color: 'white',
    fontSize: 18,
    marginLeft: 5,
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
});

export default DetallePlaneta;

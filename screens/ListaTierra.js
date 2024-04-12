import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity, ScrollView, StyleSheet, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const ListaTierra = () => {
  const [solData, setSolData] = useState(null);

  useEffect(() => {
    fetchSolData();
  }, []);

  const fetchSolData = async () => {
    try {
      const response = await fetch('https://6618de269a41b1b3dfbe2993.mockapi.io/Tierra');
      const data = await response.json();
      setSolData(data[0]); 
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleBotonPress = () => {
    Linking.openURL("https://youtu.be/dxOGGa_FoAs?si=nFFeoAWlAEGZs-r8");
  };
  const handleBoton2Press = () => {
    Linking.openURL("https://youtu.be/QAC7Poy57zY?si=X7dy-0knPl6cRYlF");
  };
  const handleMasPress = () => {
    Linking.openURL(solData.mas);
  };
  const handleMas2Press = () => {
    Linking.openURL(solData.mas2);
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
            <Text style={styles.info}>Distancia a la Tierra: {solData.distanciaSol}</Text>
            <Text style={styles.info}>Órbita alrededor del Sol: {solData.orbita}</Text>
            <Text style={styles.info}>Tiempo de rotación: {solData.rotacion}</Text>
            <Text style={styles.info}>Cantidad de lunas: {solData.lunas}</Text>
            <Text style={styles.info}>{solData.Description2}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.boton} onPress={handleBotonPress}>
                <Ionicons name="play-circle" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.boton} onPress={handleMasPress}>
                <AntDesign name="pluscircleo" size={30} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={styles.info2}>{solData.luna2}</Text>

            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 20 }}>

              <Image source={{ uri: solData.imagen4 }} style={styles.secondImage2} />
              <View style={{ marginLeft: -370 }}>
                <Text style={styles.info}>Tipo: {solData.tipo2}</Text>
                <Text style={styles.info}>Masa: {solData.masa2}</Text>
                <Text style={styles.info}>Radio: {solData.radio2}</Text>
              </View>
            </View>
            <Text style={styles.info}>Distancia a la Tierra: {solData.distanciaTierra}</Text>
            <Text style={styles.info}>Órbita: {solData.orbita2}</Text>
            <Text style={styles.info}>Tiempo de rotación: {solData.rotacion2}</Text>
            <Text style={styles.info}>{solData.Description4}</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.boton} onPress={handleBoton2Press}>
                <Ionicons name="play-circle" size={30} color="white" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.boton} onPress={handleMas2Press}>
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
  info2: {
    fontSize: 25,
    textAlign:'center',  
    color: 'white',
    marginBottom: 30,
    marginTop: 20,
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
  secondImage2: {
    width: 150,
    height: 150,
    borderRadius: 50,
    marginLeft: 220,
  },
});

export default ListaTierra;

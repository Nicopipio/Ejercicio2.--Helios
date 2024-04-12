import React, { useState, useEffect } from 'react';
import { View, ImageBackground, Image, Text, TouchableOpacity, FlatList, TextInput, StyleSheet } from 'react-native';

const ListaPlanetas = ({ navigation }) => {
  const [planetas, setPlanetas] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchPlanetas();
  }, []);

  const fetchPlanetas = async () => {
    try {
      const response = await fetch('https://6615d8efb8b8e32ffc7bd5b8.mockapi.io/planetas');
      const data = await response.json();
      setPlanetas(data);
    } catch (error) {
      console.error('Error fetching planetas:', error);
    }
  };

  const renderItem = ({ item }) => {
    if (item.nombre.toLowerCase().includes(searchQuery.toLowerCase())) {
      return (
        <TouchableOpacity onPress={() => navigation.navigate('Detalle', { planeta: item })}>
          <View style={styles.planetaContainer}>
            <Image source={{ uri: item.imagen }} style={styles.planetaImagen} />
            <View style={styles.planetaTextos}>
              <Text style={styles.nombrePlaneta}>{item.nombre}</Text>
              <Text style={styles.otraInformacion}>{item.Description}</Text>
            </View>
          </View>
        </TouchableOpacity>
      );
    } else {
      return null; 
    }
  };

  return (
    <ImageBackground
      source={{ uri: 'https://i.pinimg.com/564x/e2/01/89/e20189a915ab6655e01e928dd83adeee.jpg' }}
      style={styles.container}
    >
      <Text style={styles.headerText}>Sistema Solar</Text>
      <TextInput
        style={[styles.searchInput, { color: 'white' }]}
        placeholder="Buscar planeta..."
        placeholderTextColor="white"
        onChangeText={(text) => setSearchQuery(text)}
        value={searchQuery}
      />
       <FlatList
        data={planetas}
        renderItem={renderItem}
        keyExtractor={(item) => item.planeta}
        contentContainerStyle={styles.listaContainer}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    resizeMode: 'cover', 
    justifyContent: 'center',
  },
  planetaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    marginTop: 60,
  },
  planetaImagen: {
    width: 120,
    height: 120,
    marginRight: 10,
    borderRadius: 30,
  },
  planetaTextos: {
    flex: 1,
  },
  nombrePlaneta: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  otraInformacion: {
    fontSize: 14,
    color: 'white',
  },
  searchInput: {
    width: 350,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 50,
    marginLeft: 31,
    paddingLeft: 10,
    backgroundColor: 'black',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    marginTop: 50,
    marginLeft: 20,

  },
});

export default ListaPlanetas;

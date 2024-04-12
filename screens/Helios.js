import React from "react";
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Image, ScrollView, Linking } from "react-native";
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';


const Helios = () => {
    const navigation = useNavigation();

    const navigateSistema = () => {
        navigation.navigate('Planetas');
    };

    const navigateSol = () => {
        navigation.navigate('Sol');
    };

    const navigateTierra = () => {
        navigation.navigate('Tierra');
    };

    const navigateHelios = () => {
        const url = "https://youtu.be/NodZ8_RRt5Y?si=WnJ79Vuogy46DspA";
        Linking.openURL(url);    };

    const video1 = () => {
        const url = "https://youtu.be/S9Q4PAtiONw?si=93HHYH-SoqZhupX0";
        Linking.openURL(url);
    };

    return (
        <ImageBackground
        source={{ uri: 'https://i.pinimg.com/564x/e2/01/89/e20189a915ab6655e01e928dd83adeee.jpg' }}
        style={styles.backgroundImage}
    >
        <ScrollView contentContainerStyle={styles.container}>
            <View style={styles.overlay}>
                <View style={styles.logoContainer}>
                    <Image
                        source={{ uri: 'https://i.pinimg.com/564x/fd/8d/b7/fd8db7639072a53acf42d877f51f399c.jpg' }}
                        style={styles.logo}
                    />
                </View>
                <Text style={styles.title}>¡Helios: Explora el universo a tu alcance!</Text>
                <View style={styles.descriptionContainer}>
                <View style={styles.imageDescriptionContainer}>
                    <TouchableOpacity onPress={navigateHelios}>
                                        <Image
                                            source={{ uri: 'https://i.pinimg.com/564x/2f/bc/01/2fbc014ab1bf94f8cdf930427bd284b0.jpg' }}
                                            style={styles.smallImage}
                                        />
                                    </TouchableOpacity>
                    <View style={styles.imageContainer}>
                        <Image
                            source={{ uri: 'https://i.pinimg.com/564x/62/89/39/6289396856c190e62b43c16bd553f15a.jpg' }}
                            style={styles.descriptionImage}
                        />
                    </View>
                </View>
                <View style={styles.descriptionTextContainer}>
                    <Text style={styles.description}>
                        Inspirada en el dios griego del Sol, Helios te invita a sumergirte en un fascinante viaje por el cosmos. Descubre los misterios del universo a través de una interfaz intuitiva y herramientas de búsqueda avanzadas, diseñadas para convertirte en un verdadero explorador espacial.
                    </Text>
                </View>
            </View>
           
                <TouchableOpacity style={styles.exploreButton} onPress={video1}>
                    <Ionicons name="play-circle" size={30} color="#fff" />
                </TouchableOpacity>
            </View>



                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Explora en nuestro universo</Text>
                    <View style={styles.imageRow}>
                        <TouchableOpacity onPress={navigateSistema}>
                            <Image
                                source={{ uri: 'https://i.pinimg.com/564x/c9/c7/e4/c9c7e46fefd3ca71023440c45b8b7bc8.jpg' }}
                                style={styles.smallImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={navigateSol}>
                            <Image
                                source={{ uri: 'https://i.pinimg.com/564x/2e/c1/ce/2ec1cefd365d8e0e938c62f62cdc834c.jpg' }}
                                style={styles.smallImage}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={navigateTierra}>
                            <Image
                                source={{ uri: 'https://i.pinimg.com/564x/ba/3c/1f/ba3c1f70fdd91b9cdc17e759dc7eed06.jpg' }}
                                style={styles.smallImage}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.descriptionTextContainer}>
                    <Text style={styles.description}>
                    Sumérgete en diferentes secciones dedicadas al sistema solar, la Tierra y el Sol. Cada categoría te ofrece una amplia gama de información, desde datos científicos hasta curiosidades sorprendentes.                   
                     </Text>
                </View>
                

            </ScrollView>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        paddingTop: 20, 
    },
    backgroundImage: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: "center",
    },
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
    logo: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
    },
    title: {
        fontSize: 24,
        color: '#E0B02C',
        marginBottom: 30,
        marginTop: 30,
    },
    description: {
        fontSize: 18,
        color: '#fff',
        marginBottom: 30,
    },
    exploreButton: {
        backgroundColor: '#E0B02C',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 100,
    },
    exploreButtonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    section: {
        padding: 20,
        marginBottom: 20,
        backgroundColor: 'rgba(0, 0, 0  , 0.7)', 
        borderRadius: 10,
    },
    sectionTitle: {
        fontSize: 20,
        marginBottom: 10,
        color: '#fff',
        textAlign: 'center',
    },
    sectionDescription: {
        fontSize: 16,
    },
    imageRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    smallImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
    },
    descriptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
    },
 
 
descriptionImage: {
    width: 120,
    height: 120,
    marginRight: 10,
    borderRadius: 20,
    marginBottom: 10,
    marginTop: 100,
},

descriptionTextContainer: {
    flex: 1,
    marginLeft: 10, 
},


});

export default Helios;

import React from 'react';
import { StyleSheet, View, Text, ImageBackground, Image } from 'react-native';


const Vue1 = () => {
  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.imageBackground}
    >
      <View
        style={[
          styles.container,
          {
            flexDirection: 'column',
          },
        ]}
      >
        <View style={styles.titre}>
          <Text>Le bateau de Thibault</Text>
        </View>
        <Image
          source={require('../assets/images/TIG.png')}style={styles.img}/>
        <View style={styles.paratexte}>
          <Text>Texte de la troisième vue</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  titre: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  paratexte:{
    flex: 3,
  }
});

export default Vue1;

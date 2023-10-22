import {
  StyleSheet,
  Text,
  ImageBackground,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";

const buttonList = [
  {
    icon: require('../assets/images/homardRecette_icon.png'),
    text: "Homard",
    paragraphe: "Faites cuire les homards dans de l'eau bouillante avec du thym, du laurier, du sel et du poivre de Cayenne. \n Laissez cuire 20 minutes.Egouttez-les et laissez-les refroidir.\n Découppez les coffres des homards dans le sens de la logueur. \n Mélangez la mayonnaise avec le cognac, le corail et la ciboulette ciselée.",
    path: "SingleRecette",
  },
  {
    icon: require('../assets/images/saintJacques_icon.png'),
    text: "St-jacques",
    paragraphe: "Faire fondre du beurre avec des échalotes puis ajouter les noix de Saint-Jacques. \n Les faires revenir en laissant le millieu translucide puis les retirer du feu. \n Ajouter l'ail et le persil dans la poêle et laisser cuire quelques secondes.\n Bien faire chauffer la poêle, puis flamber au cognac. \n Une fois la flamme éteinte, ajouter les noix de Saint-Jaques (il ne faut pas les flamber car elles perdraient leur saveur). \n Déguster chaud nature ou accompagné d'une fondue de poireaux.",
    path: "SingleRecette",

  },
  {
    icon: require('../assets/images/barRecette_icon.png'),
    text: "Bar",
    paragraphe: "Sur une plaque ou plat allant au four, disposer quelques feuilles de laurier frais, verser un filet d'huile d'olive et du gros sel. Disposer le bar, puis l'arroser d'un filet d'huile d'olive et mettre un peu de gros sel sur la peau. Cuire au for pendant 12 min à 240°C.",
    path: "SingleRecette",

  },
  {
    icon: require('../assets/images/poulpe.png'),
    text: "Tourteau",
    paragraphe: "Qu'il est chaud le soleil Quand nous sommes en vacances \n Y a d'la joie, des hirondelles \nC'est le sud de la France Papa bricole au garage \n Maman lit dans la chaise longue \n Dans ce joli paysage \n Moi, je me balade en tongs \n Que de bonheur! \n Que de bonheur!",
    path: "SingleRecette",

  },
  {
    icon: require('../assets/images/poulpe.png'),
    text: "Recette",
    paragraphe: "Qu'il est chaud le soleil Quand nous sommes en vacances \n Y a d'la joie, des hirondelles \nC'est le sud de la France Papa bricole au garage \n Maman lit dans la chaise longue \n Dans ce joli paysage \n Moi, je me balade en tongs \n Que de bonheur! \n Que de bonheur!",
    path: "SingleRecette",
  },
  {
    icon: require('../assets/images/poulpe.png'),
    text: "Recette",
    paragraphe: "Qu'il est chaud le soleil Quand nous sommes en vacances \n Y a d'la joie, des hirondelles \nC'est le sud de la France Papa bricole au garage \n Maman lit dans la chaise longue \n Dans ce joli paysage \n Moi, je me balade en tongs \n Que de bonheur! \n Que de bonheur!",
    path: 'SingleRecette',
  },
]

const Recettes = (props) => {


  return (
    <ImageBackground
      source={require('../assets/images/background.png')}
      style={styles.imageBackground}
      resizeMode="cover"
    >
      <Text style={styles.title}>Nos recettes</Text>
      <View style={styles.container}>
        <Text style={styles.textBold}>Toutes les recettes du bateau de Thibault</Text>
        <Text style={styles.text}>06.63.99.99.78~{"\n"}lebateaudethibault@gmail.com~{"\n"}www.facebook/lebateaudethibault</Text>

        <View style={styles.row}>
          {buttonList.slice(0, 2).map((item, index) => (
            <Pressable
              key={index}
              style={styles.buttonContainer}
              onPress={() => { props.navigation.navigate(item.path, { data: item }) }}
            >
              <Image
                source={item.icon}
                style={styles.image}
              />
              <Text style={styles.txt}>{item.text}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.row}>
          {buttonList.slice(2, 4).map((item, index) => (
            <Pressable
              key={index}
              style={styles.buttonContainer}
              onPress={() => { props.navigation.navigate(item.path, { data: item }) }}
            >
              <Image
                source={item.icon}
                style={styles.image}
              />
              <Text style={styles.txt}>{item.text}</Text>
            </Pressable>
          ))}
        </View>
        <View style={styles.row}>
          {buttonList.slice(4, 6).map((item, index) => (
            <Pressable
              key={index}
              style={styles.buttonContainer}
              onPress={() => { props.navigation.navigate(item.path, { data: item }) }}
            >
              <Image
                source={item.icon}
                style={styles.image}
              />
              <Text style={styles.txt}>{item.text}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

export default Recettes;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 5,
  },
  title: {
    fontFamily: 'Brush Script MT',
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  text: {
    color: 'black',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Brush Script std',
  },
  textBold: {
    fontFamily: 'Brush Script MT',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  txt: {
    padding: 10,
    color: 'white',
    borderRadius: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: 40,
    height: 40,
  },
  imageBackground: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  row: {
    flexDirection: 'row', // ajout des elements 1 par 1 en ligne
    justifyContent: 'space-between',
    marginVertical: 10, // Ajoutez une marge verticale entre les rangées de boutons

  },
  buttonContainer: {
    flexDirection: 'row',// elements 1 par 1 en ligne
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.35)', // shader des buttons
    borderRadius: 5, // Ajoutez des coins arrondis
    alignItems: 'center', // Centrez les éléments horizontalement
    justifyContent: 'center', // Centrez les éléments verticalement
    padding: 5, // Ajoutez un espace intérieur
    margin: 2,
  },
});

import React, { useEffect, useState } from "react";
import { View, Image, StatusBar } from "react-native";
import { Card, Text, Avatar } from "react-native-elements";
import { ScrollView } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { getPokemon, IMG_URL } from "../../api";
import { getPokemonImgId } from "../../utils";
import Wrapper from "../Wrapper";

import { styles } from './styles'

export default (props) => {

  const { name, url } = props.route.params.item;

  const [pokemonId, setPokemonId] = useState('000');
  const [pokemon, setPokemon] = useState({});

  const [types, setTypes] = useState([])
  const [abilities, setAbilities] = useState([])

  useEffect(() => {
    url &&
      getPokemon(url).then(data => {
        const id = url.split("/")[6];
        setPokemonId(getPokemonImgId(id));
        setPokemon(data)
        setTypes(data.types)
        setAbilities(data.abilities)
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>

      <StatusBar hidden={true} translucent={true} backgroundColor="transparent" />

      <Wrapper title={name && name.toUpperCase()} navigate={props.navigation}>

        <ScrollView>

          <View style={styles.mainContent}>

            <View style={{ flex: 1, flexDirection: 'row' }}>

              <View style={styles.dataContent}>
                <Avatar
                  size={72}
                  title={pokemonId}
                  containerStyle={styles.avatar}
                />
                <Text style={styles.label}>Número</Text>
              </View>

              <View style={styles.dataContent}>
                <Avatar
                  size={72}
                  title={pokemon.height}
                  containerStyle={styles.avatar}
                />
                <Text style={styles.label}>Altura</Text>
              </View>

              <View style={styles.dataContent}>
                <Avatar
                  size={72}
                  title={pokemon.weight}
                  containerStyle={styles.avatar}
                />
                <Text style={styles.label}>Peso</Text>
              </View>

            </View>

            <View style={{ flex: 1 }}>
              <Image source={{ uri: `${IMG_URL}${pokemonId}.png` }} style={styles.image} />
            </View>

            <View style={{ flex: 1, flexDirection: 'row', position: 'relative', marginTop: -50 }}>


              <View style={{ flex: 1 }}>


                <Card containerStyle={styles.cardContainer} style={styles.cardPokeInfo}>
                  <Card.Title>Tipos</Card.Title>
                  <Card.Divider />
                  <View style={styles.cardView}>

                    {
                      types.map(type => <Text>{type.type.name}</Text>)
                    }

                  </View>
                </Card>

              </View>

              <View style={{ flex: 1 }}>


                <Card containerStyle={styles.cardContainer} style={styles.cardPokeInfo}>
                  <Card.Title>Habilitades</Card.Title>
                  <Card.Divider />
                  <View style={styles.cardView}>
                    {
                      abilities.map(ability => <Text>{ability.ability.name}</Text>)
                    }

                  </View>
                </Card>

              </View>

            </View>

          </View>

        </ScrollView>

      </Wrapper>

    </SafeAreaView>
  )
}
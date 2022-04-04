import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, FlatList, TouchableOpacity, RefreshControl } from 'react-native';
import { getPokemonList, IMG_URL } from '../../api';
import { getPokemonImgId } from '../../utils';

import { styles } from './styles';

import Wrapper from '../Wrapper';
import { ListItem, Avatar, Button } from 'react-native-elements';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default (props) => {

  const [refreshing, setRefreshing] = React.useState(false);
  const [pokemons, setPokemons] = useState([]);
  const [next, setNext] = useState();
  const [btnLoadMoreDisabled, setBtnLoadMoreDisabled] = useState(false)
  const [btnLoadMoreLoading, setBtnLoadMoreLoading] = useState(false)

  useEffect(() => {
    getPokemonList().then(data => {
      setPokemons(data.results)
      setNext(data.next)
    })

  }, [])

  const loadMore = () => {

    setBtnLoadMoreDisabled(true);
    setBtnLoadMoreLoading(true);

    getPokemonList(next).then(data => {

      setPokemons([...pokemons, ...data.results])
      setNext(data.next);

      setBtnLoadMoreDisabled(false);
      setBtnLoadMoreLoading(false);
    })

  }

  const onRefresh = React.useCallback((nextUrl, pokemons) => {
    setRefreshing(true);

    getPokemonList(nextUrl).then(data => {
      setPokemons([...data.results, ...pokemons])
      setNext(data.next);
      setRefreshing(false)
    })

  }, []);


  const renderItem = (item) => {
    const index = item.url.split("/")[6];
    const id = getPokemonImgId(index);
    return (
      <TouchableOpacity 
        onPress={() => props.navigation.navigate('ListDetails', item = { item })}
        key={id}
      >
        <ListItem bottomDivider>
          <Avatar
            size={64}
            rounded
            source={{ uri: `${IMG_URL}${id}.png` }}
          />
          <ListItem.Content>
            <ListItem.Title>{item.name.toUpperCase()}</ListItem.Title>
          </ListItem.Content>
          <ListItem.Chevron />
        </ListItem>
      </TouchableOpacity>
    )
  }

  return (
    <SafeAreaView style={styles.container} >
      <Wrapper title="Lista" navigate={props.navigation}>
        <View style={ [ styles.mainContent ]} >

          <FlatList
            data={pokemons}
            renderItem={({ item }) => renderItem(item)}
            // keyExtractor={item => item.name}
            style={ styles.list }
            refreshControl={
              <RefreshControl
                refreshing={refreshing}
                onRefresh={() => onRefresh(next, pokemons)}
              />
            }
            ListFooterComponent={
              <Button title="Cargar más"
                loading={btnLoadMoreLoading}
                disabled={btnLoadMoreDisabled}
                onPress={() => loadMore()}
              />
            }
          />

        </View>
      </Wrapper>
    </SafeAreaView>
  )
}
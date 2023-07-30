import { View, Text, TextInput, Button, FlatList, Image, StyleSheet} from 'react-native'
import React, { useState } from 'react'

const Movie = () => {
    const[searchText, setSearchText] = useState("")
    const[movieList, setMovieList] = useState([])
    const onSearchMovie = (textInput) =>{
        setSearchText(textInput)
    }

    const findMovies = async() => {
        let respObj = await fetch(`http://www.omdbapi.com/?apikey=21560cab&s=${searchText}`)
        let moviesObj = await respObj.json()
        //console.log(moviesObj.Search)
        setMovieList(moviesObj.Search)
        setSearchText('')
    }
  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
      <TextInput
      value={searchText}
      onChangeText={onSearchMovie}
      placeholder="Enter Movie name"
      style={styles.input}
      />
      <Button title='Find Movie' onPress={findMovies}/>
      {movieList.length > 0 && <View>
        <FlatList
        data={movieList}
        renderItem={({ item }) => {
            return (
            <View style={{ flex: 1, alignItems: 'center'}}>
            <Image style={{ width: 200, height: 150, margin: 15 }} source={{ uri: item.Poster }} />
            <Text>{item.Title}</Text>
            <Text>{item.Year}</Text>
            </View>
            )
        }}
        />
      </View>}
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});


export default Movie
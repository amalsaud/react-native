import { View, Text, Button} from 'react-native'
import React from 'react'

const Home = (props) => {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{ padding: 10}}>Welcome to our App</Text>
      <Button title='Movies' onPress={()=>props.navigation.navigate("Movie")}/>
    </View>
  )
}

export default Home
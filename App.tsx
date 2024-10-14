import { Image, StyleSheet, Text, View ,Button} from 'react-native'
import React, { useState } from 'react'

const App = () => {
  const [ count ,Setcount]=useState(0);
  const [ imageuri ,Setimageuri]=useState('https://picsum.photos/200/300');


  const Handlepress =()=>{
    Setcount(count+1);
    Setimageuri(`https://picsum.photos/200/300?random=${Math.random()}`);
  }
  return (
    <>
    <View style={styles.container}>
      {/* <Text style={styles.text}>{name}</Text> */}
      <Text style={styles.text}>{count}</Text>
          {/* <Image source={require('../androidapp1/components/images/image1.png')} style={{width:100 ,height:100}} /> */}
          {/* <Image source={{uri:'https://picsum.photos/id/237/200/300'}} style={{width:100 ,height:100}} /> */}
          {/* <Image source={{uri:'https://picsum.photos/id/237/200/300'}} style={{width:100 ,height:100}} /> */}
          <Image source={{uri:imageuri}} style={{width:200 ,height:200}} />
     
    </View>
    <View style={styles.button}>
    <Button
      title='NEXT IMAGE'
    onPress={
        Handlepress
      }
     />
    </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  container :{
    flex:1,
    justifyContent:"center",
    alignItems:'center',
    backgroundColor:'#f5f5f5'
  },
  text:{
    fontSize:24,
    color:'#333',

  },
  button :{
    marginTop:1 
  }
})
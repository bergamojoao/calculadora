import React,{useState} from 'react';
import {
  View,
  TouchableOpacity,
  Text,
  SafeAreaView,
  Dimensions
} from 'react-native';

import styles from './Styles'


const Main = () =>{
  const [number,setNumber] = useState('0');

  function handleNumber(numberStr){
    if(number=== '0'){
      setNumber(numberStr);
    }else{
      setNumber(number+numberStr);
    }
  }

  const clearVisor = () => setNumber("0")

  return(
    <SafeAreaView style={{flex:1,backgroundColor:'black'}}>
      <View style={styles.visor}>
        <Text style={styles.numero}>{number}</Text>
      </View>
      <View style={styles.teclado}>
          <TouchableOpacity onPress={()=>clearVisor()} style={[styles.botao,{backgroundColor:'#a5a5a5',width:(Dimensions.get('screen').width/4)*3*0.95}]}>
            <Text style={styles.text}>AC</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao,{backgroundColor:'#ff9500'}]}>
          <Text style={[styles.text,{color:'#fff'}]}>/</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.teclado}>
          <TouchableOpacity onPress={()=>{handleNumber("7")}} style={[styles.botao,{backgroundColor:'#333333'}]}>
            <Text style={[styles.text,{color:'#fff'}]}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao,{backgroundColor:'#333333'}]}>
            <Text style={[styles.text,{color:'#fff'}]}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao,{backgroundColor:'#333333'}]}>
            <Text style={[styles.text,{color:'#fff'}]}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao,{backgroundColor:'#ff9500'}]}>
          <Text style={[styles.text,{color:'#fff'}]}>x</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.teclado}>
          <TouchableOpacity style={[styles.botao,{backgroundColor:'#333333'}]}>
            <Text style={[styles.text,{color:'#fff'}]}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao,{backgroundColor:'#333333'}]}>
            <Text style={[styles.text,{color:'#fff'}]}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao,{backgroundColor:'#333333'}]}>
            <Text style={[styles.text,{color:'#fff'}]}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao,{backgroundColor:'#ff9500'}]}>
          <Text style={[styles.text,{color:'#fff'}]}>-</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.teclado}>
          <TouchableOpacity style={[styles.botao,{backgroundColor:'#333333'}]}>
            <Text style={[styles.text,{color:'#fff'}]}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao,{backgroundColor:'#333333'}]}>
            <Text style={[styles.text,{color:'#fff'}]}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao,{backgroundColor:'#333333'}]}>
            <Text style={[styles.text,{color:'#fff'}]}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao,{backgroundColor:'#ff9500'}]}>
            <Text style={[styles.text,{color:'#fff'}]}>+</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.teclado}>
          <TouchableOpacity style={[styles.botao,{backgroundColor:'#333333',width:(Dimensions.get('screen').width/2)*0.95}]}>
          <Text style={[styles.text,{color:'#fff',textAlign:'left',marginLeft:Dimensions.get('screen').width/13}]}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao,{backgroundColor:'#333333'}]}>
          <Text style={[styles.text,{color:'#fff'}]}>,</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.botao,{backgroundColor:'#ff9500'}]}>
            <Text style={[styles.text,{color:'#fff'}]}>=</Text>
          </TouchableOpacity>
      </View>
      
      
    </SafeAreaView>
  )
}

export default Main;
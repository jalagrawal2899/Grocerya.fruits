import * as React from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: '#beba8b'}}>
      <ScrollView>
          <TouchableOpacity style={styles.button}
          onPress={() => navigation.push('Fruit')}
          >
          <Text style={styles.text}> Fruits </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.text}> Vegetables </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.text}> Dairy Products </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.text}> Sauces </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.text}> Spices </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.text}> Snacks </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.text}> Beverages / Dessert </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.text}> Cereals </Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
          <Text style={styles.text}> Sweetness Enhancer </Text>
          </TouchableOpacity>
          <Text>  </Text>
   </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({


    button:{
    backgroundColor:'#2d2d2d',
    width:320,
    marginLeft:20,
    marginTop:20,
    height:55,
    justifyContent:'center',
    borderRadius:15
  },
  text:{
    textAlign:'center',
    color:'white',
    fontWeight:'bold',
    fontSize:18
    
  }
});

export default HomeScreen

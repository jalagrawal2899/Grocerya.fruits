import * as React from 'react';
import { Button, View, Text, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Apple       from '../fruitItems/apple';    
import Apricot     from '../fruitItems/apricot';     
import Avocado     from '../fruitItems/avocado';     
import Banana      from '../fruitItems/banana';        
import Berries     from '../fruitItems/berries';       
import Cherries    from '../fruitItems/cherries';        
import Coconut     from '../fruitItems/coconut';                    
import Grapes      from '../fruitItems/grapes';        
import Guava       from '../fruitItems/guava';      
import Kiwi        from '../fruitItems/kiwi';     
import Lemon       from '../fruitItems/lemon';       
import Mango       from '../fruitItems/mango';  
import Orange      from '../fruitItems/orange';
import Papaya      from '../fruitItems/papaya';   
import Peach       from '../fruitItems/peach';               
import Pear        from '../fruitItems/pear';        
import Pineapple   from '../fruitItems/pineapple';          
import Watermelon  from '../fruitItems/watermelon';         


function Fruit({ navigation }) {
  return (
    <View style={{ backgroundColor: '#beba8b'}}>
      <ScrollView>
      <Apple/>
      <Apricot/>       
      <Avocado />       
      <Banana/> 
      <Berries/> 
      <Cherries/> 
      <Coconut/> 
      <Grapes/> 
      <Guava/> 
      <Kiwi/> 
      <Lemon/> 
      <Mango/> 
      <Orange/> 
      <Papaya/> 
      <Peach/> 
      <Pear/> 
      <Pineapple/> 
      <Watermelon/> 

      <Text> </Text>
      </ScrollView>
    
    </View>
  );
}

export default Fruit
import React from 'react';
import { ScrollView, StyleSheet,View,Image } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function Fuel ({ navigation }) {
    return (

        <View>
      
        <ScrollView style={styles.scrollView}>
           <View style={styles.image}>
        <Image source={{
          width: 260,
          height: 200,
          
          padding: 50,
          alignItems: 'center',
          uri: 'http://www.recinfocenter.com/userdocs/news/oilprices.png'
          }}
        />
        </View>
          <Card style={styles.card}>
          
            <Card.Title title="Fuel categories" />
            <Card.Content>
              <Button style= {{marginBottom:10,
    backgroundColor:"#DC143C",}}mode="contained" onPress={() => navigation.navigate('Petrol')}>
              Petrol

              </Button>
              
              <Button style= {{marginTop:5,marginBottom:10,
    backgroundColor:"#DC143C",}}mode="contained" onPress={() => navigation.navigate('Diesel')}>
              Diesel
              </Button>
              <Button style= {{marginTop:5,marginBottom:10,
    backgroundColor:"#DC143C",}} mode="contained" onPress={() => navigation.navigate('kerosine')}>
              Kerosine

              </Button>
              <Button  style= {{marginTop:5,marginBottom:10,
    backgroundColor:"#DC143C",}}mode="contained" onPress={() => navigation.navigate('Gas')}>
              LP Gas


              </Button>
            
            </Card.Content>
            
          </Card>

          
        </ScrollView>
        </View>
      )
}



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  card: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    
  },
  image:{
   
    alignItems: 'center',
    marginBottom:30,
    marginTop:30
    
 

  },
});

export default Fuel;
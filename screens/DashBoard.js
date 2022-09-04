import React from 'react';
import { ScrollView, StyleSheet,View,Image } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function DashBoard ({ navigation }) {
    return (


      <View>
        <ScrollView style={styles.scrollView}>
         <View style={styles.image}>
        <Image source={{
          width: 310,
          height: 205,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://pluspng.com/img-png/fuel-gauge-png-despite-charging-punitive-fuel-rates-most-rental-operators-still-lose-money-on-fuel-the-problem-is-that-they-lose-smaller-amounts-on-each-rental-951.png'
          }}
        />
        </View>
          <Card style={styles.card}>
          
            <Card.Title/>
            <Card.Content>
              <Button style= {{marginTop:-20,marginBottom:10,
                              backgroundColor:"#DC143C",}} mode="contained" onPress={() => navigation.navigate('Fuel')}>
              Fuel
              </Button>
              
              <Button style= {{marginTop:10,marginBottom:10,
                              backgroundColor:"#DC143C",}} mode="contained" onPress={() => navigation.navigate('Live_Queue_Map')}>
              Live Queue Map
              </Button>
              <Button style= {{marginTop:10,marginBottom:10,
                              backgroundColor:"#DC143C",}} mode="contained" onPress={() => navigation.navigate('Notifications')}>
              Notifications

              </Button>
              <Button style= {{marginTop:10,marginBottom:10,
                               backgroundColor:"#DC143C",}} mode="contained" onPress={() => navigation.navigate('Profile')}>
              Profile

              </Button>
            
            </Card.Content>
            
          </Card>

          
        </ScrollView>
        </View>
      )
}



const styles = StyleSheet.create({
  image:{
   
    alignItems: 'center',
    marginBottom:30,
    marginTop:30
    
 

  },
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  card: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    
  },
  
});

export default DashBoard;
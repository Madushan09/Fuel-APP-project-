import React from 'react';
import { ScrollView, StyleSheet,Text,Image,View } from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';



function HomeScreen ({ navigation }) {
    return (
    

    <View>
    <ScrollView style={styles.scrollView}>
    <Text style={styles.title}>
        Fuel SL
      </Text>  
      <View style={styles.image}>
      <Image source={{
          width: 175,
          height: 175,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://ceypetco.gov.lk/wp-content/uploads/2016/06/ceypetco_logo-300x300.png'
          }}
        />
       </View>
          <Card style={styles.card}>
  
          
            <Card.Title />
            <Card.Content>
              <Button style={styles.Btn}mode="contained" onPress={() => navigation.navigate('Register')}>
                Register
              </Button>
              
              <Button style={styles.Btn1} mode="contained" onPress={() => navigation.navigate('Sign')}>
                Sign Up
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
    marginTop:'1%'
  },
  title:{
    fontSize:35,
    textAlign:'center',
    marginTop:25,
    color:'#ff0000',
    fontWeight:'bold',
    
 
   },
   image:{
    alignItems: 'center',
    marginBottom:50,
    marginTop:50
  },
  Btn:{
    marginTop:-20,marginBottom:10,
    backgroundColor:"#DC143C",
    borderRadius: 30,
    marginLeft: '25%',
    marginRight: '25%',
    },
  
    Btn1:{
    marginTop:5,
    backgroundColor:"#DC143C",
    borderRadius: 30,
    marginLeft: '25%',
    marginRight: '25%',
  }
});

export default HomeScreen;
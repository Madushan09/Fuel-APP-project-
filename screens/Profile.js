import React from 'react';
import { ScrollView, StyleSheet,Image,View ,Text} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function Profile ({ navigation }) {
    return (
      


      
        <ScrollView style={styles.scrollView}>
          <Card style={styles.card}>
          
            
            <View style={styles.container}>
            <View style={styles.image}>
        <Image source={{
           width: 250,
           height: 370,
           
          padding: 50,
          alignItems: 'center',
          uri: 'https://scontent.fcmb4-2.fna.fbcdn.net/v/t1.6435-9/183991529_104772511787903_3617887580388768282_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fDwFir0x_UsAX9chLvv&_nc_ht=scontent.fcmb4-2.fna&oh=00_AT9Fcz0wid44EPKpRFX7IPEBcPio0GUDp7sBF02QkfMqjA&oe=62B51CFB'
          }}
        />
        </View>
        <Text style={styles.title}>
        User Name :- Madushan Chanaka
        {'\n'}{'\n'}Email :- mc2018@gmail.com
        {'\n'}{'\n'}Tel :- 0711501287
        {'\n'}{'\n'} S_ID :- 92077954
        
        
        
      </Text>
      
              
        </View>
        
        <Card.Content >
              <Button style={{backgroundColor:"#DC143C",marginLeft: '25%',
    marginRight: '25%',}} mode="contained" onPress={() => navigation.navigate('FuelSL')}>
              Log Out
              </Button>
              
            
            </Card.Content>  
            
          </Card>

          
        </ScrollView>
        
      )
}



const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  image:{
   
    alignItems: 'center',
    marginBottom:10,
    marginTop:5
    
 

  },
  card: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor:'#FFDAB9'
    
    
  },
  title:{
    fontSize:16,
    textAlign:'center',
    marginTop:10,
    color:'black',
    fontWeight:'bold',
    marginBottom:15
    
   },
  
});

export default Profile;
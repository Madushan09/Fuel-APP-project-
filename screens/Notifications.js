import React from 'react';
import { ScrollView, StyleSheet,Image,View ,Text} from 'react-native';
import { DefaultTheme } from 'react-native-paper';


function Notifications ({ navigation }) {
    return (
     
        <View style={styles.container}>
         
              <View style={styles.image}>
              <Text style={styles.title}>
             No Notifications
              </Text>
            <Image source={{
              width: 310,
              height: 310,
              
              padding: 50,
              alignItems: 'center',
              uri: 'https://blog.ometria.com/hubfs/shutterstock_235626274.png#keepProtocol'
              }}
            />
            </View>
          
        </View>
      );
    }
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: DefaultTheme.colors.background,
        alignItems: 'center',
        paddingTop: 10
      },
      card: {
        width: '90%'
      },
      title:{
        fontSize:35,
        textAlign:'center',
        marginTop:25,
        color:'#ff0000',
        fontWeight:'bold',
        marginBottom:30
     
       },
       image:{
   
        alignItems: 'center',
        marginBottom:30,
        marginTop:20
        
     
    
      },
    });

export default Notifications;
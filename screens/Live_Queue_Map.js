import React from 'react';
import { ScrollView, StyleSheet,Image,View ,Text} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';


function Live_Queue_Map ({ navigation }) {
    return (
     
        <View style={styles.container}>
         
              <View style={styles.image}>
              <Text style={styles.title}>
              Live Queue Map
              </Text>
            <Image source={{
              width: 310,
              height: 205,
              
              padding: 50,
              alignItems: 'center',
              uri: 'http://kuruppukanda.files.wordpress.com/2009/03/sri_lanka.jpg'
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
    });

export default Live_Queue_Map;
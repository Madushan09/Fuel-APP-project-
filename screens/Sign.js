import React from 'react';
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet,View,Image,Text,TextInput,TouchableOpacity} from 'react-native';
import { Button, Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';



function Sign ({ navigation }) {
 
    return (
     
      <View style={styles.container}>
 <ScrollView style={styles.scrollView}>
      <Text style={styles.title}>
        Fuel SL
      </Text>

      <View style={styles.image}>
        <Image source={{
          width: 200,
          height: 200,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://ceypetco.gov.lk/wp-content/uploads/2016/06/ceypetco_logo-300x300.png'
          }}
        />
         <StatusBar style="auto" />
        </View>
        <View style={styles.container1}>
        <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
        
        </View>
        <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
        </View>
      
      
      
        
   
      

          
 

            <Card.Content>
             
            
              <Button style={styles.Btn} mode="contained" onPress={() => navigation.navigate('DashBoard')}>
                Go To DashBoard
              </Button>
            
            </Card.Content>
           
         

          
        </ScrollView>

        </View>
        
        
        
      )
      
}



const styles = StyleSheet.create({
    container1: {
        flex: 1,
        marginTop:-50,
        marginBottom:170,
        alignItems: "center",
        justifyContent: "center",
      },

  scrollView: {
    backgroundColor: DefaultTheme.colors.background,
    paddingTop: 10
  },
  card: {
    width: '90%',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop:'50%'
  },
  image:{
   
    alignItems: 'center',
    marginBottom:100,
    marginTop:30
    
 

  },
  title:{
    fontSize:35,
    textAlign:'center',
    marginTop:25,
    color:'#ff0000',
    fontWeight:'bold',
    
 
   },
   inputView: {
    backgroundColor: "#FFDAB9",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    
  },
 Btn: {marginTop:-80,
    marginBottom:50,
    backgroundColor:"#DC143C",
    borderRadius: 30,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
  
});

export default Sign;
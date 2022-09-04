import React from 'react';
import { StyleSheet, View,Image } from 'react-native';
import { Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

function Kerosine() {
  return (
    <View style={styles.container}>
     
          <View style={styles.image}>
        <Image source={{
          width: 310,
          height: 205,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://tse2.mm.bing.net/th?id=OIP.ckadu2eSZdKQ-oqY59aqBAAAAA&pid=Api&P=0&w=381&h=182'
          }}
        />
        </View>
      <Card style={styles.card}>
        <Card.Title title="District :- Gampaha " />
        <Card.Title title="City :- Gampaha Twon " />
        <Card.Title title="Current Price in 1L :- Rs.280" />
        <Card.Title title="Available Liters :- 500L " />
      </Card>
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
  }
});

export default Kerosine;
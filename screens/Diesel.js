import React from 'react';
import { StyleSheet, View,Image } from 'react-native';
import { Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

function Diesel() {
  return (
    <View style={styles.container}>
       <View style={styles.image}>
        <Image source={{
          width: 310,
          height: 205,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://tse4.mm.bing.net/th?id=OIP.wC1FjRWpRQ65Ci-c0U8QYQHaEo&pid=Api&P=0&w=248&h=155'
          }}
        />
        </View>
      <Card style={styles.card}>
        <Card.Title title="Diesel type :- Octane 92 / Octane 95" />
        <Card.Title title="District :- Gampaha " />
        <Card.Title title="City :- Gampaha Twon " />
        <Card.Title title="Current Price in 1L :- Rs.380" />
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

export default Diesel;
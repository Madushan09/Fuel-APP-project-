import React from 'react';
import { StyleSheet, View,Image } from 'react-native';
import { Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

function  Petrol() {
  return (
    <View style={styles.container}>
        <View style={styles.image}>
        <Image source={{
          width: 310,
          height: 205,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://tse1.mm.bing.net/th?id=OIP._BeK6SsHc5pIN9RezrG1igHaE4&pid=Api&P=0&w=254&h=168'
          }}
        />
        </View>
      <Card style={styles.card}>
        <Card.Title title="Petrol type :- Octane 92 / Octane 95" />
        <Card.Title title="District :- Kalutara " />
        <Card.Title title="City :- Horana " />
        <Card.Title title="Current Price in 1L :- Rs.380" />
        <Card.Title title="Available Liters :- 100L " />
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

export default  Petrol;
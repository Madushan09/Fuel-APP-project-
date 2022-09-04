import React from 'react';
import { StyleSheet, View,Image } from 'react-native';
import { Card } from 'react-native-paper';
import { DefaultTheme } from 'react-native-paper';

function Gas() {
  return (
    <View style={styles.container}>
          <View style={styles.image}>
        <Image source={{
          width: 310,
          height: 205,
          
          padding: 50,
          alignItems: 'center',
          uri: 'https://lanka24news.com/wp-content/uploads/2021/06/litro-laugfs-gas-sri-lanka-700x375.jpg'
          }}
        />
        </View>
      <Card style={styles.card}>
        <Card.Title title="Gas type :- Litro / LAUGFS" />
        <Card.Title title="District :- Kalutara " />
        <Card.Title title="City :- Matugama " />
        <Card.Title title="Current Price in 5 kg :- Rs.4500" />
        <Card.Title title="Available  :- 20 cylinders " />
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

export default Gas;
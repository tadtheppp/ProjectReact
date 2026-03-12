import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Image } from 'react-native';

export default function DetailScreen({ route }: any) {
  const { food } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{food.name}</Text>
      <Text style={styles.price}>Price: {food.price} Baht</Text>
      <Text style={styles.desc}>{food.description}</Text>
      <Image source={food.image} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF8F0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#D35400',
    marginBottom: 10,
  },
  price: {
    fontSize: 20,
    marginBottom: 15,
    color: '#333',
  },
  desc: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  image: {
  width: 250,
  height: 200,
  borderRadius: 15,
  marginBottom: 20,
},
});
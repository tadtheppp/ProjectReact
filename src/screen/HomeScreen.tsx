import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { foodData } from '../data/foodData';
import { Image } from 'react-native';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <FlatList
        data={foodData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
         <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Details', { food: item })}
        >
            <Image source={item.image} style={styles.image} />
            <Text style={styles.title}>{item.name}</Text>
            <Text style={styles.price}>Price: {item.price} Baht</Text>
</TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFF8F0',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 18,
    marginBottom: 14,
    borderRadius: 15,
    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#D35400',
    marginBottom: 5,
  },
  price: {
    fontSize: 16,
    color: '#555',
  },
  image: {
  width: '100%',
  height: 150,
  borderRadius: 12,
  marginBottom: 10,
},
});
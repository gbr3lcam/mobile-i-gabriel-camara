import { Link } from 'expo-router';
import React from 'react';
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';

const charlihome = require('brat/assets/images/charlihome.jfif');
const bratbutton1 = require('brat/assets/images/bratcover.jfif');
const bratbutton2 = require('brat/assets/images/brat2cover.jfif');

export default function HomeScreen() {
  return (
    <ImageBackground source={charlihome} style={styles.background}>
      <Text style={styles.title}>Charli XCX</Text>
      <View style={styles.buttonContainer}>
        <link href="/Tracklist1">brat</link>
          <Image source={bratbutton1} style={styles.albumCover} />
          <link href="/Tracklist2">brat 2</link>
          <Image source={bratbutton2} style={styles.albumCover} />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 40,
    color: 'white',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    padding: 20,
  },
  albumCover: {
    width: 120,
    height: 120,
    marginHorizontal: 10,
  },
});
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const tracklist2 = ['hello goodbye', 'guess'];

export default function Tracklist2() {
  return (
    <View style={styles.tracklistContainer}>
      <Text style={styles.tracklistTitle}>Álbum 2 - Tracklist</Text>
      {tracklist2.map((track, index) => (
        <Text key={index} style={styles.track}>{track}</Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tracklistContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tracklistTitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  track: {
    fontSize: 18,
    marginVertical: 5,
  },
});
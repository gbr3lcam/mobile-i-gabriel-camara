import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const tracklist1 = ['360', '365'];

export default function Tracklist1() {
  return (
    <View style={styles.tracklistContainer}>
      <Text style={styles.tracklistTitle}>brat - Tracklist</Text>
      {tracklist1.map((track, index) => (
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
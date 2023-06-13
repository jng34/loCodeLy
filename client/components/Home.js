import { useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';
import zipCodeGraph from '../../graphs/zipCodeGraph.js';
import findAllZipsInShortestPath from '../../methods/findAllZipsInShortestPath.js';

export default function Home({ navigation }) {
  const [startZip, setStartZip] = useState('');
  const [endZip, setEndZip] = useState('');
  const [startZipErr, setStartZipErr] = useState(false);
  const [endZipErr, setEndZipErr] = useState(false);

  const handleZipSearch = () => {
    console.log(`Query submitted for starting zip ${startZip} and ending zip ${endZip}.`)
    // Check if entered zip codes are valid or not
    !(startZip in zipCodeGraph) ? setStartZipErr(true) : setStartZipErr(false)
    !(endZip in zipCodeGraph) ? setEndZipErr(true) : setEndZipErr(false)
    
    if (startZip in zipCodeGraph && endZip in zipCodeGraph) {
      // return all zipCodes in between start and end zips
      const zipsInShortestPath = findAllZipsInShortestPath(startZip, endZip);
      // pass zipsArray & navigate to Cafes
      navigation.navigate("Cafes", { zipsArray: zipsInShortestPath })
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>LoCodely</Text>
      <Text style={styles.description}>meet and code locally</Text>
      <View style={styles.space}>
        <TextInput
          placeholder="Starting zip code"
          style={styles.input}
          onChangeText={(zip) => setStartZip(zip)}
          value={startZip}
          inputMode="numeric"
          keyboardType="number-pad"
          maxLength={5}
        />
        {startZipErr ? <Text style={styles.error}>Invalid user zip</Text> : <Text></Text>}
      </View>
      <View style={styles.space}>
        <TextInput
          placeholder="Ending zip code"
          style={styles.input}
          onChangeText={(zip) => setEndZip(zip)}
          value={endZip}
          inputMode="numeric"
          keyboardType="number-pad"
          maxLength={5}
        />
        {endZipErr ? <Text style={styles.error}>Invalid destination zip</Text> : <Text></Text>}
      </View>
      <View style={styles.space}>
        <Button title="Search" onPress={handleZipSearch} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    paddingTop: 30,
    fontSize: 30,
    fontWeight: "bold",
  },
  description: {
    fontSize: 10,
    marginBottom: 15,
  },
  input: {
    width: 150,
    height: 40,
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 15, 
    fontSize: 16,
  },
  error: {
    fontSize: 15,
    color: 'red'
  },
  space: {
    marginTop: 5,
    marginBottom: 5,
  }
});

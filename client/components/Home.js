import { useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';
import zipCodeGraph from '../../graphs/zipCodeGraph.js';
import findShortestPath from '../../methods/findShortestPath.js';
import findZipsInBtwn from '../../methods/findZipsInBtwn.js';


export default function Home({ navigation }) {
  const [userZip, setUserZip] = useState('');
  const [endZip, setEndZip] = useState('');
  const [userZipErr, setUserZipErr] = useState(false);
  const [endZipErr, setEndZipErr] = useState(false);
  const [zips, setZips] = useState([]);

  // Method for finding shortest path between zipcodes
  const shortestPath = (start, end) => {
    const allZips = findShortestPath(start, end);
    const lastZip = allZips[allZips.length - 1];
    console.log(findZipsInBtwn(lastZip)); 
    const shortestPathZips = findZipsInBtwn(lastZip);
    setZips(shortestPathZips)  
  }

  const handleSearch = () => {
    console.log(`Query submitted for starting zip ${userZip} and ending zip ${endZip}.`)
    // Check if entered zip codes are valid or not
    !(userZip in zipCodeGraph) ? setUserZipErr(true) : setUserZipErr(false)
    !(endZip in zipCodeGraph) ? setEndZipErr(true) : setEndZipErr(false);
    
    // return all zipCodes in between
    shortestPath(userZip, endZip)
  }

  console.log(zips)

  return (
    <View style={styles.container}>
      <Text style={styles.header}>LoCodely</Text>
      <Text style={styles.description}>meet and code locally</Text>
      <View style={styles.space}>
        <TextInput
          placeholder="Starting zipcode..."
          style={styles.input}
          onChangeText={(zip) => setUserZip(zip)}
          value={userZip}
          inputMode="numeric"
          keyboardType="number-pad"
          maxLength={5}
        />
      </View>
      <View style={styles.space}>
        <TextInput
          placeholder="Ending zipcode..."
          style={styles.input}
          onChangeText={(zip) => setEndZip(zip)}
          value={endZip}
          inputMode="numeric"
          keyboardType="number-pad"
          maxLength={5}
        />
      </View>
      <View style={styles.space}>
        <Button title="Search" onPress={handleSearch} />
      </View>
      <View style={styles.space}>
        <Button title="Go To Cafes" onPress={() => navigation.navigate("Cafes", { zips })} /> 
      </View>
      {userZipErr ? <Text style={styles.error}>Invalid user zip</Text> : <Text></Text>}
      {endZipErr ? <Text style={styles.error}>Invalid destination zip</Text> : <Text></Text>}
      {zips.length ? <Text>{zips}</Text> : <Text></Text>}
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
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  description: {
    fontSize: 10,
    marginBottom: 15,
  },
  input: {
    width: 300,
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

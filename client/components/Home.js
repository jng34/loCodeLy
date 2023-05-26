import { useState } from 'react';
import { StyleSheet, TextInput, Text, Button, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
// import zipCodeGraph from '../../graphs/zipCodeGraph.js';
// import findShortestPath from '../../methods/findShortestPath.js';
// import findZipsInBtwn from '../../methods/findZipsInBtwn.js';

// const Stack = createStackNavigator();

export default function Home() {
  const [userZip, setUserZip] = useState('');
  const [endZip, setEndZip] = useState('');
  const [userZipErr, setUserZipErr] = useState(false);
  const [endZipErr, setEndZipErr] = useState(false);
  const [zips, setZips] = useState([]);

  // Method for finding shortest path between zipcodes
  // const shortestPath = (start, end) => {
  //   const allZips = findShortestPath(start, end);
  //   const lastZip = allZips[allZips.length - 1];
  //   console.log(findZipsInBtwn(lastZip)); 
  //   const shortestPathZips = findZipsInBtwn(lastZip);
  //   setZips(shortestPathZips)  
  // }

  // const handleSearch = () => {
  //   console.log(`Query submitted for starting zip ${userZip} and ending zip ${endZip}.`)
  //   // Check if entered zip codes are valid or not
  //   !(userZip in zipCodeGraph) ? setUserZipErr(true) : setUserZipErr(false)
  //   !(endZip in zipCodeGraph) ? setEndZipErr(true) : setEndZipErr(false);
    
  //   // return all zipCodes in between
  //   return shortestPath(userZip, endZip)
  // }

  return (
    <View style={styles.container}>
      <Text style={styles.header}>LoCodely</Text>
      <Text style={styles.desc}>meet and code locally</Text>
      <View>
        <TextInput
          placeholder="Enter your zipcode..."
          style={styles.input}
          onChangeText={(zip) => setUserZip(zip)}
          value={userZip}
          inputMode="numeric"
          keyboardType="number-pad"
          maxLength={5}
        />
        <TextInput
          placeholder="Enter your destination zipcode..."
          style={styles.input}
          onChangeText={(zip) => setEndZip(zip)}
          value={endZip}
          inputMode="numeric"
          keyboardType="number-pad"
          maxLength={5}
        />
        <Button title="Search" onPress={()=>console.log('hello')} />
        {userZipErr ? <Text style={styles.error}>Invalid user zip</Text> : <Text></Text>}
        {endZipErr ? <Text style={styles.error}>Invalid destination zip</Text> : <Text></Text>}
      </View>
      {/* <Stack.Navigator>
        <Stack.Screen
          name="Cafes"
          component={Cafes}
          options={{ headerShown: false }}
        />
      </Stack.Navigator> */}
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
  desc: {
    fontSize: 10,
    paddingBottom: 30
  },
  input: {
    height: 40, 
    borderColor: 'gray',
    borderWidth: 1, 
    marginBottom: 10
  },
  error: {
    fontSize: 15,
    color: 'red'
  }
});

const graph = require('../graphs/zipCodeGraph')
const allZipNodes = require('../zipNodes/allZipNodes')
const zipMap = allZipNodes();
const createZipNode = require('../zipNodes/createZipNode')

// const updateUnvisitedZips = (currZip, zipMap) => {
  
//   let unvisitedNeighbors = graph[currZip.zipCode]; //not visited
  
//   for (let neighbor of unvisitedNeighbors) {
//     const neighborZip = zipMap.find((zip) => zip.zipCode === String(neighbor));
//     console.log(neighborZip)
//     if (neighborZip.isVisited === false) {
//       neighborZip.distance = currZip.distance + 1;
//       neighborZip.previousNode = currZip;
//     }
//   }
// }


const findShortestPath = (zip1, zip2) => {
  // Find zip1 in zipMap
  // If zip1 does not exist, then return 'Enter valid zip!'
  // else run code
  const zip1Node = zipMap.find((zip) => zip.zipCode === String(zip1))
  if (!zip1Node) return 'invalid zip code';
  zip1Node.distance = 0;

  const visitedZipsInOrder = [];
  
  while (zipMap.length > 0) {
    // sortZipsByDistance?
    zipMap.sort((zipA,zipB) => zipA.distance - zipB.distance);
    const currZip = zipMap.shift(); // Takes out front zip from array
    if (currZip.distance === Infinity) continue;
    
    currZip.isVisited = true; // Mark as visited 
    visitedZipsInOrder.push(currZip); // Add to array of visited zips in order
    
    if (currZip.zipCode === String(zip2)) return visitedZipsInOrder;
    // updateUnvisitedZips(currZip, zipMap);
    for (let neighbor of graph[currZip.zipCode]) {  // neighbor 10040
      // Find zip node of corresponding zip
      const neighborZip = zipMap.find((zip) => zip.zipCode === String(neighbor))
      if (!neighborZip || neighborZip.isVisited) continue; // revisit 
      neighborZip.distance = currZip.distance + 1;
      neighborZip.previousNode = currZip;
      neighborZip.isVisited = true;
    }
  }
}

/*
  TODO
  -Function works but only gives one absolute path that depends on 
  our graph inputs.
  -Need to find all Paths by maybe creating a second map of zips to 
  modify the distances
  -Finish the backtracking function to return the path of all zips
*/



console.log(findShortestPath(10002, 10021))


module.exports = findShortestPath
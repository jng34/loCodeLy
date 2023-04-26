const graph = require('../graphs/zipCodeGraph')
const createZipMap = require("../zipNodes/createZipMap");
const zipMap = createZipMap();


const findShortestPath = (zip1, zip2) => {
  const zip1Node = zipMap.find((zip) => zip.zipCode === String(zip1))
  if (!zip1Node) return 'invalid zip code';
  zip1Node.distance = 0;

  const visitedZipsInOrder = [];
  
  while (zipMap.length > 0) {
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


module.exports = findShortestPath
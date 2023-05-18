const graph = require('../graphs/zipCodeGraph')
const createZipMap = require("../zipNodes/createZipMap");


const findShortestPath = (startZip, endZip) => {
  let zipMap = createZipMap();
  const startZipNode = zipMap.find((zip) => zip.zipCode === String(startZip))
  if (!startZipNode) return 'invalid zip code';
  startZipNode.distance = 0;

  const visitedZipsInOrder = [];
  
  while (zipMap.length > 0) {
    zipMap.sort((zipA,zipB) => zipA.distance - zipB.distance);
    const currZip = zipMap.shift(); // Takes out front zip from array
    if (currZip.distance === Infinity) continue;
    
    currZip.isVisited = true; // Mark as visited 
    visitedZipsInOrder.push(currZip); // Add to array of visited zips in order
    
    if (currZip.zipCode === String(endZip)) return visitedZipsInOrder;
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
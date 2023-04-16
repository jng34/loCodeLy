const graph = require('../graphs/zipCodeGraph');
const findShortest = require('./findShortestPath');


// Find all zips from shortest path by writing a conditional
// statement for zip array of length minDist + 1 ( +1 to include the destination zip)
const minDist = findShortest(10034, 10030)
console.log(`min dist ${minDist}`)


// Method used to find permutations of all zip codes
// from zip1 to zip2 and returns array of zips with
// shortest length
// if multiple arrays, then return unique set

function findZipsInBtwn (zip1, zip2) {
  let allPaths = [];
  backTrack(zip1, zip2, [ zip1 ], new Set(), allPaths);
  // console.log(allPaths)
  return allPaths;
}

// Track previous zip (prevZip) to avoid infinite cycle 
function backTrack (zip1, zip2, path, visited, allPaths) {
  if (zip1 === zip2 && path.length === minDist + 1) {
    // allPaths.push([...path]);
    return;
  }

  for (let neighbor of graph[zip1]) {
    if (!visited.has(neighbor)) {
      visited.add(neighbor);

      path.push(neighbor); 
      allPaths.push([...path]);
      backTrack(neighbor, zip2, path, visited, allPaths);
      path.pop();
    }
  }
  return;
}

const allZips = findZipsInBtwn(10034, 10030);
const result = allZips.filter(zips => zips.length === minDist + 1)
console.log(result)


module.exports = findZipsInBtwn;
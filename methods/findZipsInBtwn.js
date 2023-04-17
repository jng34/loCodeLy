const findShortestPath = require('./findShortestPath')

const allZips = findShortestPath(10002, 'Central Park');
const lastZip = allZips[allZips.length - 1]

const findZipsInBtwn = (endZip) => {
  const zipsInShortestPath = [];
  let currentZip = endZip;
  while (currentZip) {
    zipsInShortestPath.unshift(currentZip.zipCode);
    currentZip = currentZip.previousNode;
  }
  return zipsInShortestPath;
}

console.log(findZipsInBtwn(lastZip))

module.exports = findZipsInBtwn;
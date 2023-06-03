const findShortestPath = require('./findShortestPath')
const findZipsInBtwn = require('./findZipsInBtwn')


const findAllZipsInShortestPath = (startZip, endZip) => {
  const allZips = findShortestPath(startZip, endZip);
  const lastZip = allZips[allZips.length - 1];
  return findZipsInBtwn(lastZip);
}


module.exports = findAllZipsInShortestPath;
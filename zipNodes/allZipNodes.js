const graph = require('../graphs/zipCodeGraph');
const createZipNode = require('./createZipNode');


const allZipNodes = () => {
  const map = [];
  // Grabs all keys (zips) in graph and pushes them into map array
  for (let zip in graph) {
    map.push(createZipNode(zip));
  }
  return map;
}

module.exports = allZipNodes;


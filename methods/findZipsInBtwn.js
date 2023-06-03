const findZipsInBtwn = (endZip) => {
  const zipsInShortestPath = [];
  let currentZip = endZip;
  while (currentZip) {
    //Customize obj for frontend Apollo GraphQL Custom Input Query
    if (currentZip.zipCode !== "Central Park") {
      zipsInShortestPath.unshift({ zipCode: currentZip.zipCode });
    }
    currentZip = currentZip.previousNode;
  }
  return zipsInShortestPath;
}

//DONT ADD CENTRAL PARK IN ARRAY!!!


module.exports = findZipsInBtwn;
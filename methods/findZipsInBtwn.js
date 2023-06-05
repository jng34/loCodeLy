const findZipsInBtwn = (endZip) => {
  const zipsInShortestPath = [];
  let currentZip = endZip;
  while (currentZip) {
    //Customize obj for frontend Apollo GraphQL Custom Input Query
    //DONT ADD CENTRAL PARK IN ARRAY!!!
    if (currentZip.zipCode !== "Central Park") {
      zipsInShortestPath.unshift({ zipCode: currentZip.zipCode });
    }
    currentZip = currentZip.previousNode;
  }
  return zipsInShortestPath;
}



module.exports = findZipsInBtwn;
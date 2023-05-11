const createZipNode = (zipCode) => {
  return {
    zipCode,
    distance: Infinity,
    isVisited: false,
    previousNode: null
  }
}

module.exports = createZipNode;
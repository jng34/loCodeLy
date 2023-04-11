const graph = require('../zipCodeGraph')

const findMiddle = (zip1, zip2) => {
  // zip1 = 10034 start
  // zip2 = 10032 finish
  let zipCodesInBtwn = [];

  const queue = [[ zip1, 0 ]]
  const visited = new Set([zip1]);

  while (queue.length > 0) {
    const [ zip, dist ] = queue.shift();
    // console.log(zip, dist)
    zipCodesInBtwn.push(zip);
    if (zip === zip2) return [dist, zipCodesInBtwn];

    for (let neighbor of graph[zip]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([ neighbor, dist + 1 ]);
      }
    }
  }

  return 'No path';
}

console.log(findMiddle(10027, 10034))

module.exports = findMiddle
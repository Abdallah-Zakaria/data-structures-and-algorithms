'use strict';

function getDirectFlight(graph, array) {
  let totalCost = 0;
  let flag = true;

  for (let i = 0; i < array.length - 1; i++) {
    const airport = array[i];
    const destination = array[i + 1];
    const directFlight = graph.getNeighbors(airport);

    let directFound = false;

    for (let connection of directFlight) {
      if (connection.node === destination) {
        directFound = true;
        totalCost += connection.weight;
        break;
      }
    }
    if (!directFound) {
      flag = false;
      totalCost = 0;
      break;
    }
  }
  return {
    flag,
    totalCost,
  };
}

module.exports = getDirectFlight;

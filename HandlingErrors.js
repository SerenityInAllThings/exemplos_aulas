const getArrayPositionValue = (array, position) => {
  try {
    let value = array[position];
    return value;
  } catch (err) {
    console.error("Error getting position " + position + " value from array");
    return undefined;
  }
};

const getArrayPositionValue2 = (array, position) => {
  try {
    let value = array[position];
    return value;
  } catch (err) {
    console.error("Error getting position " + position + " value from array");
    throw err;
  }
};

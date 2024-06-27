export default function appendToEachArrayValue(array, appendString) {
  for (const index of array) {
    const idx = array.indexOf(index);
    array[idx] = appendString + index; // eslint-disable-line no-param-reassign
  }

  return array;
}

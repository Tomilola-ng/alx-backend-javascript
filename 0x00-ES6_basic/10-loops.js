export default function appendToEachArrayValue(array, appendString) {
  for (const index of array) {
    array[index] = appendString + array[index];
  }
  return array;
}

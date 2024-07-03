export default function hasValuesFromArray(ourset, list) {
  return list.every((value) => ourset.has(value));
}

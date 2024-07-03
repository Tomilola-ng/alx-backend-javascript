export default function updateUniqueItems(ourMap) {
  if (!(ourMap instanceof Map)) {
    throw new Error("Cannot process");
  }

  for (const [key, value] of ourMap.entries()) {
    if (value === 1) {
      ourMap.set(key, 100);
    }
  }

  return ourMap;
}

export default function cleanSet(set, firstStr) {
  if (firstStr === "") return "";

  const resp = [];

  for (const value of set) {
    if (value.startsWith(firstStr)) {
      resp.push(value.slice(firstStr.length));
    }
  }

  return resp.join("-");
}

export default function getListStudentIds(arr) {
  if (!arr[0]?.id) return [];

  return arr.map((item) => item.id);
}

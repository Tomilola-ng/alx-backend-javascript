export default function getStudentsByLocation(items, city) {
  return items.filter((student) => student.location === city);
}

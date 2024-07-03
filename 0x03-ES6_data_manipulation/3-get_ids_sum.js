export default function getStudentIdsSum(items) {
  return items.reduce((agg, item) => agg + item.id, 0);
}

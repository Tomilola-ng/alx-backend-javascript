export default function getListStudentIds(items) {
  if (!items[0]?.id) return [];

  return items.map((item) => item.id);
}

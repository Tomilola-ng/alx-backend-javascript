export default function createInt8TypedArray(height, axis, value) {
  const buffer = new ArrayBuffer(height);
  const dataView = new DataView(buffer);

  if (axis < 0 || axis >= height) {
    throw new Error("Position outside range");
  }

  dataView.setInt8(axis, value);
  return dataView;
}

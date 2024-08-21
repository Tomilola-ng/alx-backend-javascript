/**
 * Reads the file and counts the number of students in each group
 * @param {string} dataPath - path to the file
 * @returns {void}
 */

const fs = require("fs");

function countStudents(dataPath) {
  /* Check if the file exists*/
  if (!fs.existsSync(dataPath)) {
    throw new Error("Cannot load the database");
  }
  /* Check if the file is a file */
  if (!fs.statSync(dataPath).isFile()) {
    throw new Error("Cannot load the database");
  }

  /* Read the file and split it into lines */
  const fileLines = fs
    .readFileSync(dataPath, "utf-8")
    .toString("utf-8")
    .trim()
    .split("\n");

  /* Create an object to store the student groups */
  const studentGroups = {};
  const dbFieldNames = fileLines[0].split(",");
  const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

  /* Iterate over the lines and create the student groups */
  for (const line of fileLines.slice(1)) {
    const studentRecord = line.split(",");
    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
    const field = studentRecord[studentRecord.length - 1];
    if (!Object.keys(studentGroups).includes(field)) {
      studentGroups[field] = [];
    }
    /* Create an array of objects with the student properties and values */
    const studentEntries = studentPropNames.map((propName, idx) => [
      propName,
      studentPropValues[idx],
    ]);
    studentGroups[field].push(Object.fromEntries(studentEntries));
  }

  /* Calculate the total number of students */
  const totalStudents = Object.values(studentGroups).reduce(
    (pre, cur) => (pre || []).length + cur.length
  );
  console.log(`Number of students: ${totalStudents}`);

  /* Iterate over the student groups and print the number of students in each group */
  for (const [field, group] of Object.entries(studentGroups)) {
    const studentNames = group.map((student) => student.firstname).join(", ");
    console.log(
      `Number of students in ${field}: ${group.length}. List: ${studentNames}`
    );
  }
}

module.exports = countStudents;

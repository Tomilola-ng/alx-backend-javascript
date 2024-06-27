export default function createIteratorObject(report) {
  const allEmployees = Object.values(report.allEmployees);
  let employeeList = [];

  for (const employees of allEmployees) {
    employeeList = employeeList.concat(employees);
  }

  return employeeList[Symbol.iterator]();
}

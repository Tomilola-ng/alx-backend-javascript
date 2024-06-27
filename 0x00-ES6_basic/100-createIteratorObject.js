export default function createIteratorObject(report) {
  const allEmployees = [];
  for (const department in report.allEmployees) {
    if (report.allEmployees.hasOwnProperty(department)) {
      allEmployees.push(...report.allEmployees[department]);
    }
  }

  const iterator = {
    next() {
      if (this.current < allEmployees.length) {
        return { value: allEmployees[this.current++], done: false };
      }
      return { done: true };
    },
    current: 0,
  };

  return {
    [Symbol.iterator]() {
      return iterator;
    },
  };
}

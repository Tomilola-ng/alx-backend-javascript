export const weakMap = new WeakMap();

const MAX_CALLS = 5;

export function queryAPI(endpoint) {
  const count = weakMap.get(endpoint) || 0;

  const newCount = count + 1;

  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, newCount);
  }

  if (newCount >= MAX_CALLS) {
    throw new Error("Endpoint load is high");
  }
}

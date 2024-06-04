//a
function listApply(list, f) {
  let result = [];
  for (let i = 0; i < list.length; i++) {
    result.push(f(list[i]));
  }
  return result;
}

//b
function cadToUsd(cad) {
  return cad * 0.73;
}

//c
function cadToUsds(cadsList) {
  return listApply(cadsList, cadToUsd);
}

//d
const isOdd = (x) => x % 2 === 1;

// ...implement `every` with reduce
function every(list, odd) {
  return list.reduce((acc, curr) => {
    return odd(curr) && acc;
  }, odd(list[0]));
}

every([1, 2, 3], isOdd); // false
every([1, 3, 5], isOdd); // true

//e
function assert(value, message) {
  if (!value) {
    throw new Error(message || "Assertion failed");
  }
}

function assertEquals(actual, expected, message) {
  if (actual != expected) {
    throw new Error(message || `Expected ${expected}, but got ${actual}`);
  }
}

function assertListEquals(actual, expected, message) {
  if (!Array.isArray(actual) || !Array.isArray(expected)) {
    throw new Error(message || `Expected both arguments to be arrays`);
  }
  if (actual.length !== expected.length) {
    throw new Error(
      message ||
        `Expected arrays to have the same length, but got ${actual.length} and ${expected.length}`
    );
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      throw new Error(
        message ||
          `Expected arrays to be equal, but found difference at index ${i}: ${actual[i]} !== ${expected[i]}`
      );
    }
  }
}

//test a
assertListEquals(
  listApply([1, 2, 3], (x) => x + 1),
  [2, 3, 4]
);

assertListEquals(
  listApply([1, 2, 3], (x) => x * 2),
  [2, 4, 6]
);

assertListEquals(
  listApply([1, 0, -1], (x) => x ** 2),
  [1, 0, 1]
);

//test b
assertEquals(cadToUsd(1), 0.73);
assertEquals(cadToUsd(2), 1.46);

//test c
assertListEquals(cadToUsds([1, 2, 3]), [0.73, 1.46, 2.19]);

assertListEquals(cadToUsds([1, 0, -1]), [0.73, 0, -0.73]);

//test d
assert(every([1, 3, 5], isOdd));
assert(every([1, 2, 3], isOdd)); //idk how to do

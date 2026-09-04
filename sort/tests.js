// tests.js
// import { bubbleSort } from './bubble.js';
// import { selectionSort } from './selection.js';
import { insertionSort } from './insertion.js';
// import { mergeSort } from './merge.js';

function isSorted(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
  return true;
}

function runTests(name, sortFn) {
  console.log(`\n==============================`);
  console.log(`Testing: ${name}`);
  console.log(`==============================`);

  const edgeCases = [
    [],
    [1],
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [3, 1, 4, 1, 5, 9, 2, 6, 5],
    [7, 7, 7, 7],
    [-10, 0, 5, -2, 8],
  ];

  // 1. Edge cases
  for (const original of edgeCases) {
    const expected = [...original].sort((a, b) => a - b);
    const result = sortFn([...original]);

    if (JSON.stringify(result) !== JSON.stringify(expected)) {
      console.error(`❌ FAILED on input: [${original}]`);
      console.error(`   Expected: [${expected}]`);
      console.error(`   Got:      [${result}]`);
      return;
    }
  }

  // 2. Randomized stress tests
  const RUNS = 100;
  for (let i = 0; i < RUNS; i++) {
    const size = Math.floor(Math.random() * 40);
    const original = Array.from({ length: size }, () => Math.floor(Math.random() * 200) - 100);
    const expected = [...original].sort((a, b) => a - b);
    const result = sortFn([...original]);

    if (JSON.stringify(result) !== JSON.stringify(expected) || !isSorted(result)) {
      console.error(`❌ FAILED on random input of size ${size}`);
      console.error(`   Input:    [${original}]`);
      console.error(`   Expected: [${expected}]`);
      console.error(`   Got:      [${result}]`);
      return;
    }
  }

  console.log(`✅ All edge cases and 100 random tests passed!`);
}

// Execute tests
// runTests("Bubble Sort", bubbleSort);
// runTests("Selection Sort", selectionSort);
runTests("Insertion Sort", insertionSort);
// runTests("Merge Sort", mergeSort);
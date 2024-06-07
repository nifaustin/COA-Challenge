function findSubarraySum(arr, target) {
  let currentSum = 0;
  let startIndex = 0;

  for (let i = 0; i < arr.length; i++) {
    currentSum += arr[i];

    while (currentSum > target) {
      currentSum -= arr[startIndex];
      startIndex++;
    }

    if (currentSum === target) {
      return true;
    }
  }

  return false;
}

// Example to test
const arr = [4, 2, 7, 1, 9, 5];
const target = 14;

const result = findSubarraySum(arr, target);

console.log(result);

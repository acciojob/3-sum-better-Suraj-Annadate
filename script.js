function threeSum(arr, target) {
// write your code here
	arr.sort((a, b) => a - b);

  let closestSum = Infinity;
  
  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    
    while (left < right) {
      const sum = arr[i] + arr[left] + arr[right];
      
      // Check if the current sum is closer to the target
      if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
        closestSum = sum;
      }
      
      if (sum === target) {
        // Found a sum equal to the target, return it
        return closestSum;
      } else if (sum < target) {
        // Increment left pointer if the sum is too small
        left++;
      } else {
        // Decrement right pointer if the sum is too large
        right--;
      }
    }
  }
  
  return closestSum;
  
}

module.exports = threeSum;

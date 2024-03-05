# Maximum Sum Subarray

This is implemented using Kadane's algorithm
## The Problem

Kadane's Algorithm is designed to solve the "maximum subarray problem". Imagine you have an array of numbers (which can include both positive and negative numbers), and you want to find the contiguous subarray that has the largest possible sum.

> Example:

If your array is:  [-2, 1, -3, 4, -1, 2, 1, -5, 4]

The maximum subarray here is [4, -1, 2, 1], with a sum of 6.

## The Intuition

Kadane's algorithm is based on a clever insight: at any point in the array, the maximum sum subarray ending at that position is either:

The current element itself: (If the current element would bring more value than the previous subarray).
The current element + the maximum sum subarray ending at the previous position: (If continuing the previous subarray would still be beneficial).

## The Algorithm

**Initialization:**
```js
max_so_far: Stores the overall maximum sum encountered.
max_ending_here: Stores the maximum sum subarray ending at the current position.
Iteration:

Iterate through each element (num) in the array:
Update max_ending_here by taking the maximum between:
num (starting a new subarray)
num + max_ending_here (continuing the existing subarray)
Update max_so_far if max_ending_here is greater.
Result: After iterating through the array, max_so_far will contain the maximum subarray sum.
```
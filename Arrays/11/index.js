function findMaxSumSubArray(A) {
    let maxSoFar = A[0], maxEndingHere = 0;
    for (let val of A) {
        maxEndingHere = max(val, maxEndingHere + val)
        maxSoFar = max(maxSoFar, maxEndingHere)
    }
    return maxSoFar;
}

function max(a, b) {
    if (a > b) return a;
    return b;
}

const arr = [-4, 2, -5, 1,2, 3, 6, -5, 1]
const sum = findMaxSumSubArray(arr)

console.log(sum)
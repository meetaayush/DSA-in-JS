function findMinimum(arr) {
    let min = arr[0];
    const n = arr.length;

    for (let i = 0; i < n; i++) {
        const item = arr[i]
        if (item < min) {
            min = item;
        }
    }
    return min;
}

const arr = [9, 2, 3, 6]
const minElem = findMinimum(arr)

console.log(minElem)
function findSum(arr, value) {
    let hash = {}
    const n = arr.length;
    for (let i = 0; i < n; i++) {
        const item = arr[i];
        const diff = value - item;
        if (hash.hasOwnProperty(diff)) {
            return [diff, item]
        } else {
            hash[item] = diff;
        }
    }
}

const arr = [9, 0]
const value = 9

const result = findSum(arr, value)

console.log(result)
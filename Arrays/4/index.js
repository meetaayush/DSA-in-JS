function findProduct(arr) {
    let res = [];
    let prev = 1, curr = 1, n = arr.length;
    for(let i = 0; i < n; i++) {
        curr = arr[i]
        res.push(prev)
        prev *= curr;
    }
    prev = 1;
    for (let i = n-1; i >= 0; i--) {
        curr = arr[i]
        res[i] *= prev;
        prev *= curr;
    }
    return res;
}

const arr1 = [1, 2, 3, 4]
const output = findProduct(arr1)

console.log(output)
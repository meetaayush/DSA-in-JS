function findFirstUnique(arr) {
    let hash = {}
    const n = arr.length;
    for (let item of arr) {
        if (hash.hasOwnProperty(item)) {
            hash[item]++
        } else {
            hash[item] = 1;
        }
    }

    for (let item of arr) {
        if (hash[item] === 1) {
            return item;
        }
    }

    return null
}

const arr = [9,2,3,2,6,6]
const oup = findFirstUnique(arr)

console.log(oup)
function maxMin(arr) {
    const result = [];
    let low = 0, high = arr.length - 1;
    while (low <= high) {
        const highElem = arr[high]
        const lowElem = arr[low]
        if (low === high) {
            result.push(highElem);
        } else {
            result.push(highElem)
            result.push(lowElem)
        }

        high--;
        low++;
    }
    return result;
}

const arr = [1,2,3,4,5,6,7]
const res = maxMin(arr)

console.log(res)
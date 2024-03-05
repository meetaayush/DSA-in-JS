function reArrange(arr) {
    let low = 0, mid = 0, high = arr.length - 1;
    while (mid <= high) {
        const curr = arr[mid];

        if (curr < 0) {
            [arr[mid], arr[low]] = [arr[low], arr[mid]];
            mid++;
            low++;
        } else if (curr === 0) {
            mid++;
        } else if (curr > 0) {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr
}

const inp = [-3,0,7,-1,4]
const oup = reArrange(inp)

console.log(oup)
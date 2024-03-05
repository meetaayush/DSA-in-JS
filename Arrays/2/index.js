function mergeArrays(arr1, arr2) {
    let idx_i = 0, idx_j = 0;
    let result = []
    const arr1Length = arr1.length;
    const arr2Length = arr2.length;

    while(idx_i < arr1Length && idx_j < arr2Length) {
        const arr1_item = arr1[idx_i];
        const arr2_item = arr2[idx_j];

        if (arr1_item < arr2_item) {
            result.push(arr1_item)
            idx_i++
        } else {
            result.push(arr2_item)
            idx_j++
        }
    }
    
    // check if elements are left in arr1 and arr2
    if (idx_i < arr1Length) {
        result = result.concat(arr1.slice(idx_i))
    }
    if (idx_j < arr2Length) {
        result = result.concat(arr2.slice(idx_j))
    }
    return result;
}

const inp1 = [1,3,4,8, 9]
const inp2 = [2,5,6,7]

const result = mergeArrays(inp1, inp2)
console.log(result)
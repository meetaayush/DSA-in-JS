function rightRotate(arr, n){
    return arr.splice(arr.length - n).concat(arr.splice(0, arr.length))
}

const ar = [1,2,3,4,5,6, 7]
const result = rightRotate(ar, 3)
console.log(result)
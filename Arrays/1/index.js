// implement function to remove even numbers from the array

// can use array filter function as well
function removeEven(arr) {
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item % 2 === 0) {
            arr.splice(i, 1)
            i--;
        }
    }
    return arr;
}

const inp = [1, 2, 4, 5, 10, 6, 3]
const oup = removeEven(inp)
console.log(oup)
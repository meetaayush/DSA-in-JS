function findSecondMaximum(arr) {
    let max = Number.NEGATIVE_INFINITY;
    let secondMax = Number.NEGATIVE_INFINITY;

    for (let val of arr) {
        if (val > max) {
            secondMax = max;
            max = val;
        } else if (val > secondMax && val !== max) {
            secondMax = val
        }
    }
    return secondMax
}

const arr1 = [9,2,3,6, 9]

const oup = findSecondMaximum(arr1)


console.log(oup)
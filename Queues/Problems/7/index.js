const { Stack } = require("../../../Stacks");

// Next greater element using stack
function nextGreaterElement(arr) {
    const s = new Stack();
    const temp = []
    for (let i = arr.length - 1; i >= 0; i--) {
        const element = arr[i];
        let stackTop = s.getTop();
        while(!s.isEmpty() && stackTop <= element) {
            s.pop()
            stackTop = s.getTop();
        }
        if (s.isEmpty()) {
            temp[i] = -1
        } else {
            temp[i] = stackTop
        }
        s.push(element)
    }
    return temp;
}

const arr = [4, 6, 3, 2, 8, 1]
const res = nextGreaterElement(arr)
console.log(res)
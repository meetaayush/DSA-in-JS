const { Stack } = require("../../../Stacks");

// Sort values in a stack
function sortStack(stack) {
    if (stack.isEmpty()) return stack;
    const tempStack = new Stack()
    if (stack.isEmpty()) return
    while(!stack.isEmpty()) {
        let temp = stack.pop();
        if (tempStack.isEmpty()) {
            tempStack.push(temp)
        } else {
            let topOfTemp = tempStack.getTop();
            while (!tempStack.isEmpty() && topOfTemp < temp) {
                stack.push(tempStack.pop())
                topOfTemp = tempStack.getTop()
            }
            tempStack.push(temp)
        }
    }
    return tempStack;
}

const s = new Stack()
s.push(2)
s.push(97)
s.push(4)
s.push(42)
s.push(12)
s.push(60)
s.push(23)

const sortedStack = sortStack(s)
console.log(sortedStack.items)
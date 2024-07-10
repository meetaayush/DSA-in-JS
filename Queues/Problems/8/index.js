const { Stack } = require("../../../Stacks");

function isBalanced(exp) {
    const s = new Stack();
    for (i = 0; i < exp.length; i++) {
        const item = exp[i]
        if (item === "(" || item === "{" || item === "[") {
            s.push(item)
        } else {
            const poppedItem = s.pop();
            if (item === ")" && poppedItem === "(") {
                continue;
            } else if (item === "}" && poppedItem === "{") {
                continue;
            } else if (item === "]" && poppedItem === "[") {
                continue
            } else {
                return false;
            }
        }
    }
    if (s.isEmpty()) {
        return true
    }
    return false;
}

const exp = "(((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((((("
const res = isBalanced(exp)
console.log(res)
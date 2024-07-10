const { Stack } = require("../../../Stacks");

// Evaluate postfix expression using stack
function evaluatePostfix(exp) {
    const len = exp.length;

    const s = new Stack()
    for(let i = 0; i < len; i++) {
        const isNumber = !isNaN(parseInt(exp[i], 10))
        if (isNumber) {
            // we have an operand            
            s.push(parseInt(exp[i], 10))
        } else {
            // we have an operator
            const num1 = s.pop()            
            const num2 = s.pop()
            const operator = exp[i]
            switch(operator) {
                case "+":
                case "-":
                case "*":
                    const res = eval(`${num2}${exp[i]}${num1}`)
                    s.push(res);
                    break;
                case "/":
                    const res2 = eval(`${num2}${exp[i]}${num1}`)
                    s.push(res2);
                    break;
            }      
        }
    }
    return Math.floor(s.pop())
}

const str = "$942+*6147/+*$"
const str2 = "435/+"
const res = evaluatePostfix(str)
console.log(res)
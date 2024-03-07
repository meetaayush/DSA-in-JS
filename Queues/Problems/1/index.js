// Find binary number using queue
const { Queue } = require("../..")

function findBin(n) {
    const result = [];
    const q = new Queue()

    q.enqueue('1')

    for(let i = 0; i < n; i++) {
        result.push(q.dequeue())
        const s1 = result[i] + "0"
        const s2 = result[i] + "1"

        q.enqueue(s1)
        q.enqueue(s2)
    }

    return result;
}


const res = findBin(5)
console.log(res)
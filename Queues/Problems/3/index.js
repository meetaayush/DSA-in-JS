// Reverse first k items in a queue
const { Queue } = require("../../")
const { Stack } = require("../../../Stacks")

function reverseK(queue, k) {
    if (k < 0 && k > queue.size()) {
        return
    }
    const s = new Stack();
    for (let i = 0; i < k; i++) {
        s.push(queue.dequeue())
    }

    while (!s.isEmpty()) {
        queue.enqueue(s.pop())
    }

    const n = queue.size();
    for (let i = 0; i < (n-k); i++) {
        const temp = queue.dequeue()
        queue.enqueue(temp)
    }

    return queue;
}

const q = new Queue()
q.enqueue(5)
q.enqueue(6)
q.enqueue(7)
q.enqueue(8)
q.enqueue(9)

const modifiedQ = reverseK(q, 3)
modifiedQ.print()
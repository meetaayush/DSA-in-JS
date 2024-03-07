const { Stack } = require("../../../Stacks");

// Implement queue using stack
class newQueue {
    constructor() {
        this.main = new Stack()
        this.temp = new Stack()
    }

    enqueue(value) {
        if (this.main.isEmpty()) {
            this.main.push(value)
            return this.main;
        }
        // case 2: when main stack is not empty
        while (!this.main.isEmpty()) {
            this.temp.push(this.main.pop())
        }
        this.main.push(value);
        while(!this.temp.isEmpty()) {
            this.main.push(this.temp.pop())
        }
        return this.main;
    }

    dequeue() {
        if (this.main.isEmpty()) {
            return;
        }

        while (!this.main.isEmpty()) {
            this.temp.push(this.main.pop())
        }

        const elemToBeRemoved = this.temp.pop()

        while(!this.temp.isEmpty()) {
            this.main.push(this.temp.pop())
        }

        return elemToBeRemoved;
    }

    print() {
        let str = ""
        while(!this.main.isEmpty()) {
            const elem = this.main.pop();
            str += `${elem} -> `
            this.temp.push(elem)
        }

        str += "null"

        while(!this.temp.isEmpty()) {
            this.main.push(this.temp.pop())
        }

        console.log(str)
    }
}

const q = new newQueue();
q.enqueue(5)
q.enqueue(6)
q.enqueue(7)
q.enqueue(8)
q.enqueue(9)

q.print();
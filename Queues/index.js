const { DoubleList } = require("../LinkedLists/DoubleList")

class Queue {
    constructor() {
        this.items = new DoubleList()
    }

    isEmpty() {
        return this.items.isEmpty()
    }

    getFront() {
        return this.items.head;
    }

    size() {
        let count = 0;
        let currElem = this.items.head;
        while (currElem !== null) {
            count++
            currElem = currElem.nextElement;
        }
        return count
    }

    enqueue(data) {
        return this.items.insertAtTail(data)
    }

    dequeue() {
        return this.items.deleteFromHead()
    }

    print() {
        let currElem = this.items.head;
        if (currElem === null) return
        let str = "";
        while(currElem !== null) {
            str += `${currElem.data} -> `
            currElem = currElem.nextElement
        }
        str += "null"
        console.log(str)
    }
}

module.exports = { Queue }

// const q = new Queue()
// console.log(q.isEmpty())
// console.log(q.size())
// console.log(q.getFront())
// console.log("--------------")
// q.enqueue(5)
// q.enqueue(7)
// q.enqueue(9)
// console.log(q.size())
// console.log(q.getFront())
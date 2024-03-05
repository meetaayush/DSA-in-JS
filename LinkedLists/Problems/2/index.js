// Reverse a linked list
const { SingleList } = require("../../SingleList")

function reverse(list) {
    if (list.isEmpty()) {
        return;
    }
    let currNode = list.head;
    let prevNode = null;
    while (currNode !== null) {
        let nextNode = currNode.nextElement;
        currNode.nextElement = prevNode;
        prevNode = currNode;
        currNode = nextNode;
    }
    list.head = prevNode;
    return;
}

const list = new SingleList()
// list.insertAtTail(7)
// list.insertAtTail(9)
// list.insertAtTail(5)
// list.insertAtTail(6)

console.log("Original = ")
list.print()

reverse(list)
console.log("After reversing = ")
list.print()

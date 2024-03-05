const { SingleList } = require("../../SingleList");

function findMid(list) {
    if (list.isEmpty()) {
        return -1;
    }

    let slowPtr = list.head;
    let fastPtr = list.head;

    while(fastPtr.nextElement !== null && fastPtr.nextElement.nextElement !== null) {
        slowPtr = slowPtr.nextElement;
        fastPtr = fastPtr.nextElement.nextElement;
    }

    return slowPtr.data;
}

const list = new SingleList()
list.insertAtTail(1)
list.insertAtTail(3)
list.insertAtTail(5)
list.insertAtTail(7)
list.insertAtTail(9)

const midElem = findMid(list)
console.log(midElem)
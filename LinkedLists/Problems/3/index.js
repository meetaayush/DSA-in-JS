// Detect Loop in a LinkedList

const { SingleList } = require("../../SingleList");

function detectLoop(list) {
    if (list.isEmpty()) {
        return false;
    }
    let slowPtr = list.head;
    let fastPtr = list.head;
    while (fastPtr !== null && fastPtr.nextElement !== null) {
        slowPtr = slowPtr.nextElement;
        fastPtr = fastPtr.nextElement.nextElement;

        if (slowPtr === fastPtr) {
            return true;
        }
    }
    return false;
}

const list = new SingleList();
list.insertAtTail(4);
list.insertAtTail(6);
list.insertAtTail(2);
list.insertAtTail(8);
list.insertAtTail(10);

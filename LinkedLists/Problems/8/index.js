const { SingleList } = require("../../SingleList")

function findNth(list, n) {
    if (list.isEmpty()) {
        return null
    }

    let slowPtr = list.head, fastPtr = list.head;
    for(i = 0; i < n; i++) {
        fastPtr = fastPtr.nextElement;
    }

    while (fastPtr !== null) {
        slowPtr = slowPtr.nextElement;
        fastPtr = fastPtr.nextElement;
    }

    return slowPtr;
}

const list = new SingleList();
list.insertAtTail(23)
list.insertAtTail(28)
list.insertAtTail(10)
list.insertAtTail(5)
list.insertAtTail(67)
list.insertAtTail(39)
list.insertAtTail(70)
list.insertAtTail(28)

const nthNode = findNth(list, 2)
console.log(nthNode)
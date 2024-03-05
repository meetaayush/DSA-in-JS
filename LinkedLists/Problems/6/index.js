const { SingleList } = require("../../SingleList")

function union(list1, list2) {
    if (list1.isEmpty()) {
        return list2;
    }
    if (list2.isEmpty()) {
        return list1;
    }

    let currNode = list1.head;
    while(currNode.nextElement !== null) {
        currNode = currNode.nextElement;
    }

    currNode.nextElement = list2.head;

    return list1
}

const list1 = new SingleList()
const list2 = new SingleList()

list1.insertAtTail(7)
list1.insertAtTail(14)
list1.insertAtTail(21)

list2.insertAtTail(15)
list2.insertAtTail(22)
list2.insertAtTail(8)

const newList = union(list1, list2)

newList.print()
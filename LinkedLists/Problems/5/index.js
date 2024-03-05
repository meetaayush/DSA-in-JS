const { SingleList } = require("../../SingleList");

function removeDuplicates(list) {
    if (list.isEmpty()) {
        return list;
    }

    let prevNode = null;
    let currNode = list.head;
    let hash = {}
    while (currNode !== null) {
        if (hash.hasOwnProperty(currNode.data)) {
            prevNode.nextElement = currNode.nextElement;
        } else {
            hash[currNode.data] = 1;
        }

        prevNode = currNode;
        currNode = currNode.nextElement;
    }
    return list;
}

const list = new SingleList();
list.insertAtTail(7)
list.insertAtTail(14)
list.insertAtTail(21)
list.insertAtTail(14)
list.insertAtTail(22)
list.insertAtTail(7)

list.print()

removeDuplicates(list)
list.print();

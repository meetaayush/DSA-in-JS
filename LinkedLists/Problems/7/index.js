const { SingleList } = require("../../SingleList");

function intersection(list1, list2) {
    if (list1.isEmpty()) {
        return null;
    }
    if (list2.isEmpty()) {
        return null;
    }

    let currNode = list1.head;
    while(currNode !== null) {
        let currNode2 = list2.head;
        while(currNode2 !== null) {
            if (currNode.data === currNode2.data) {
                return currNode;
            }

            currNode2 = currNode2.nextElement;
        }

        currNode = currNode.nextElement;
    }

    return null;
}

const list1 = new SingleList()
const list2 = new SingleList()

list1.insertAtTail(7)
list1.insertAtTail(14)
list1.insertAtTail(21)

list2.insertAtTail(21)
list2.insertAtTail(22)
list2.insertAtTail(8)

const commonNode = intersection(list1, list2)
console.log(commonNode.data)
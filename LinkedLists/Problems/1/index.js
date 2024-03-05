const { SingleList } = require("../../SingleList")

function length(list) {
    if (list.isEmpty()) {
        return 0
    }

    let currNode = list.head;
    let len  = 0;
    while(currNode !== null) {
        len++;
        currNode = currNode.nextElement;
    }

    return len;
}

const list = new SingleList()
list.insertAtHead(5)
list.insertAtTail(7)
list.insertAtTail(11)
list.insertAtTail(13)
list.insertAtHead(9)
list.insertAtN(4, -13)
list.print();

const len = length(list)
console.log(len)
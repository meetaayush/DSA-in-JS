class Node {
    constructor(data) {
        this.data = data;
        this.nextElement = null;
    }
}

class SingleList {
    constructor() {
        this.head = null;
    }

    insertAtTail(data) { 
        if (this.isEmpty()) {
            this.insertAtHead(data);
            return this;
        }
        const node = new Node(data)
        let currNode = this.head;

        // traverse to the last element
        while(currNode.nextElement !== null) {
            currNode = currNode.nextElement
        }

        currNode.nextElement = node;
        return this;
    }
    insertAtHead(data) { 
        const node = new Node(data);
        node.nextElement = this.head;
        this.head = node;
    }
    insertAtN(data, n) {
        if (this.isEmpty()) {
            console.log("Empty list")
            return;
        }

        if (n <= 0) {
            return this.insertAtHead(data)
        } 

        let currNode = this.head;
        for (let i = 1; i < n; i++) {
            if (currNode.nextElement === null) {
                break;
            }
            currNode = currNode.nextElement;
        }
        const node = new Node(data)
        node.nextElement = currNode.nextElement;
        currNode.nextElement = node;

        return this;
    }
    deleteByVal(data) { 
        if (this.isEmpty()) {
            return this;
        }

        let currNode = this.head;
        if (currNode.data === data) {
            return this.deleteAtHead()
        }
        while (currNode.nextElement !== null) {
            if (currNode.nextElement.data === data) {
                currNode.nextElement = currNode.nextElement.nextElement;
                return this;
            }
            currNode = currNode.nextElement
        }

        return this;
    }
    deleteAtHead() { 
        if (this.isEmpty()) {
            return this;
        }

        let currNode = this.head;
        this.head = currNode.nextElement;

        return this;
    }
    deleteAtTail() {
        if (this.isEmpty()) {
            return this;
        }

        let currNode = this.head;

        // corner-case when list contains just one element
        if (currNode.nextElement === null) {
            return this.deleteAtHead()
        }

        while (currNode.nextElement.nextElement !== null) {
            currNode = currNode.nextElement
        }

        currNode.nextElement = null;

        return this;
    }
    search(data) { 
        if (this.isEmpty()) {
            return false
        }

        let currNode = this.head;
        while (currNode !== null) {
            if (currNode.data === data) {
                return true;
            }

            currNode = currNode.nextElement;
        }

        return false;
    }
    isEmpty() {
        return this.head === null
    }

    print() {
        if (this.isEmpty()) {
            console.log("Empty list")
            return;
        }

        const list = []

        let tempNode = this.head;
        while (tempNode !== null) {
            list.push(tempNode.data)
            tempNode = tempNode.nextElement;
        }

        console.log(list)

        return this;
    }
}

module.exports = { SingleList, Node }

// const list = new SingleList()
// list.insertAtHead(5)
// list.insertAtTail(7)
// list.insertAtTail(11)
// list.insertAtTail(13)
// list.insertAtHead(9)
// list.print();
// list.insertAtN(4, -13)

// list.print();

// console.log(list.search(15))

// list.deleteAtHead()
// list.print();

// list.deleteByVal(13)
// list.print()

// list.deleteAtTail();

// list.print()
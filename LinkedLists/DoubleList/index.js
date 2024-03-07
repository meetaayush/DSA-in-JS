class Node {
    constructor(data) {
        this.data = data;
        this.nextElement = null;
        this.previousElement = null;
    }
}

class DoubleList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    insertAtHead(data) {
        const node = new Node(data)
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        }
        node.nextElement = this.head;
        this.head = node;
        return this;
    }

    insertAtTail(data) {
        const node = new Node(data)
        if (this.isEmpty()) {
            return this.insertAtHead(data)
        }
        this.tail.nextElement = node;
        node.previousElement = this.tail;
        this.tail = node;
        return this;
    }

    deleteFromHead() {
        if (this.isEmpty()) {
            return null
        }
        // check if there is only one element in the list
        if (this.head === this.tail) {
            const nodeToRemove = this.head;
            this.head = null;
            this.tail = null;
            return nodeToRemove.data
        }
        const nodeToRemove = this.head;
        this.head = nodeToRemove.nextElement;
        this.head.previousElement = null;
        nodeToRemove.nextElement = null;

        return nodeToRemove.data;
    }

    isEmpty() {
        return this.head === null
    }
}

module.exports = {
    DoubleList
}
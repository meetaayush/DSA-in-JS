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
}

module.exports = {
    DoubleList
}
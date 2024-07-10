// Find the minimum element in the stack in O(1) time
class minStack {
    constructor() {
        this.items = [];
    }

    push(value) {
        if (!this.items.length) {
            this.items.push([value, value])
            return this.items;
        } else {
            const topElem = this.items[this.items.length - 1]
            const minVal = getMinValue(value, topElem[1])
            this.items.push([value, minVal])
            return this.items;
        }
    }

    pop() {
        return this.items.pop()
    }

    min() {
        if (!this.items.length) return null
        return this.items[this.items.length - 1][1]
    }
}

function getMinValue(val1, val2) {
    return val1 > val2 ? val2 : val1;
}


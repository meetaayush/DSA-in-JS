// Adjacency List using LinkedList
const { SingleList, Node } = require("../LinkedLists/SingleList")

class Graph {
    constructor() {
        this.numberOfNodes = 0;
        this.adjacencyList = {};
    }

    addVertex(node) {
        this.adjacencyList[node] = new SingleList()
        this.numberOfNodes++;
    }

    addVertexArr(node) {
        this.adjacencyList[node] = new Array();
        this.numberOfNodes++;
    }

    addEdge(node1, node2) {
        if (this.adjacencyList[node1]) {
            this.adjacencyList[node1].insertAtHead(node2)
        } else {
            const newList = new SingleList();
            this.adjacencyList[node1] = newList;
        }

        if (this.adjacencyList[node2]) {
            this.adjacencyList[node2].insertAtHead(node1)
        } else {
            const newList = new SingleList();
            this.adjacencyList[node2] = newList;
        }
    }

    addEdgeArr(node1, node2) {
        this.adjacencyList[node1].push(node2)
        this.adjacencyList[node2].push(node1)
    }

    showConnections() {
        Object.entries(this.adjacencyList).forEach(([node, connections]) => {
            let str = `${node} = `
            let curr = connections.head;
            while(curr != null) {
                str += `${curr.data} -> `
                curr = curr.nextElement;
            }

            str += ' null'

            console.log(str)
        })
    }
}

module.exports = {
    Graph
}


// const myGraph = new Graph();
// myGraph.addVertex("0");
// myGraph.addVertex("1");
// myGraph.addVertex("2");
// myGraph.addVertex("3");
// myGraph.addVertex("4");
// myGraph.addVertex("5");
// myGraph.addVertex("6");

// myGraph.addEdge("0", "1");
// myGraph.addEdge("0", "2");
// myGraph.addEdge("1", "3");
// myGraph.addEdge("1", "2");
// myGraph.addEdge("2", "4");
// myGraph.addEdge("3", "4");
// myGraph.addEdge("4", "5");
// myGraph.addEdge("5", "6");

// myGraph.showConnections()
const { Queue } = require("../../Queues");
const { Graph } = require("../index")

function BFSTraversal(graph, startNode) {
    const itemsInArray = graph.numberOfNodes + 1;
    const list = graph.adjacencyList;
    const visitedArray = new Array(itemsInArray).fill(0);
    const result = new Array(itemsInArray);
    const q = new Queue()
    q.enqueue(startNode)
    visitedArray[startNode] = 1;

    while(!q.isEmpty()) {
        const topItem = q.dequeue()
        result[topItem] = 1;
        const tempList = list[topItem]
        let curr = tempList.head

        while(curr !== null) {
            if (!visitedArray[curr.data]) {
                q.enqueue(curr.data)
                visitedArray[curr.data] = 1
            }
            curr = curr.nextElement;
        }
    }

    return result
}

const graph = new Graph()
for (let i = 1; i < 9; i++) {
    graph.addVertex(i)
}

graph.addEdge(1, 2)
graph.addEdge(1, 6)
graph.addEdge(2, 3)
graph.addEdge(2, 4)
graph.addEdge(4, 5)
graph.addEdge(5, 7)
graph.addEdge(6, 7)
graph.addEdge(6, 8)

const res = BFSTraversal(graph, 1, 10)
console.log(res)
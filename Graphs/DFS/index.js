const { Graph }  = require("../")

function DFS(startNode, visitedArray, result, list) {
    visitedArray[startNode] = true;
    result.push(startNode)
    
    let curr = list[startNode].head;
    while(curr !== null) {
        if (!visitedArray[curr.data]) {
            DFS(curr.data, visitedArray, result, list)
        }
        curr = curr.nextElement;
    }
}

const dfsGraph = new Graph()
dfsGraph.addVertex(1)
dfsGraph.addVertex(2)
dfsGraph.addVertex(3)
dfsGraph.addVertex(4)
dfsGraph.addVertex(5)
dfsGraph.addVertex(6)
dfsGraph.addVertex(7)
dfsGraph.addVertex(8)

dfsGraph.addEdge(1, 2)
dfsGraph.addEdge(1, 3)
dfsGraph.addEdge(2, 5)
dfsGraph.addEdge(2, 6)
dfsGraph.addEdge(3, 4)
dfsGraph.addEdge(3, 7)
dfsGraph.addEdge(4, 8)
dfsGraph.addEdge(7, 8)

const startNode = 1
const visitedArray = new Array(9).fill(false)
const result = []

DFS(startNode, visitedArray, result, dfsGraph.adjacencyList)

console.log(result)
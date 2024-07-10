// Number of provinces

const { Graph } = require("../..");

//User function Template for javascript

/**
 * @param {number} V
 * @param {number[][]} adj
 * @return {number}
*/

class Solution {
    numProvinces(V, adjLS) {
        // let adjLS = {};
        const visited = new Array(V + 1);
        // to change adjacency matrix to adjacency list
        // for (let i = 0; i < V; i++) {
        //     for (let j = 0; j < V; j++) {
        //         if (adj[i][j] === 1 && i !== j) {
        //             if (adjLS[i]) {
        //                 adjLS[i].push(j)
        //             } else {
        //                 const temp = [];
        //                 temp.push(j);
        //                 adjLS[i] = temp;
        //             }

        //             if (adjLS[j]) {
        //                 adjLS[j].push(i)
        //             } else {
        //                 const temp = [];
        //                 temp.push(i)
        //                 adjLS[j] = temp;
        //             }
        //         }
        //     }
        // }

        let count = 0;
        for (let i = 1; i <= V; i++) {
            if (!visited[i]) {
                count++;
                this.dfs(i, adjLS, visited);
            }
        }

        return count;
    }

    dfs(node, adjLS, visited) {
        visited[node] = 1;
        for (let item of adjLS[node]) {
            if (!visited[item]) {
                this.dfs(item, adjLS, visited)
            }
        }
    }
}

const graph = new Graph()
for (let i = 1; i <= 8; i++) {
    graph.addVertexArr(i)
}

graph.addEdgeArr(1, 2)
graph.addEdgeArr(2, 3)
graph.addEdgeArr(4, 5)
graph.addEdgeArr(5, 6)
graph.addEdgeArr(7, 8)

const sol = new Solution()
const count = sol.numProvinces(graph.numberOfNodes, graph.adjacencyList)

console.log(count)
---
id: A*
title: A Star | A*算法
tags:
  - Algorithms
---
# A* Algorithm（A*算法）
A*（A星）算法是一种启发式搜索算法，用于在图中找到最佳路径。它结合了Dijkstra算法的最短路径和贪婪最优搜索策略。  
$f = g + h$  ， $g$为已经过路径的代价，$h$为启发函数，计算当前位置到达目的地的代价，常用的距离有曼哈顿距离，欧氏距离  

## A*算法的步骤

1. **初始化**
    - 定义开始节点和目标节点。
    - 初始化开放列表和关闭列表。开放列表存放待检查节点，关闭列表存放已经检查过的节点。

    ```cpp
    // C++代码示例 - 初始化
    Node startNode; // 开始节点
    Node targetNode; // 目标节点

    std::vector<Node> openList; // 开放列表
    std::vector<Node> closedList; // 关闭列表
    ```

2. **将起始节点加入开放列表**

    ```cpp
    // C++代码示例 - 加入开始节点到开放列表
    openList.push_back(startNode);
    ```

3. **循环直至找到路径或者开放列表为空**
    - 选择开放列表中估值最低的节点作为当前节点。
    - 如果当前节点是目标节点，算法结束，路径找到。
    - 否则，对当前节点进行遍历。

    ```cpp
    // C++代码示例 - 主循环
    while (!openList.empty()) {
        // 选取开放列表中的最低估值节点作为当前节点
        Node currentNode = getLowestCostNode(openList);
        
        // 如果当前节点是目标节点，算法结束
        if (currentNode == targetNode) {
            // 路径找到
            break;
        }

        // 对当前节点进行遍历
        for (Node neighbor : getNeighbors(currentNode)) {
            if (neighbor is not traversable or neighbor is in closedList) {
                continue; // 跳过不可通行的或者已检查的节点
            }

            // 计算该相邻节点的估值
            float tentative_gScore = currentNode.gScore + distance(currentNode, neighbor);
            if (tentative_gScore < neighbor.gScore) {
                // 更新路径为更优的路径
                neighbor.cameFrom = currentNode;
                neighbor.gScore = tentative_gScore;
                neighbor.fScore = neighbor.gScore + heuristicCostEstimate(neighbor, targetNode);

                if (neighbor not in openList) {
                    // 将该相邻节点加入开放列表
                    openList.push_back(neighbor);
                }
            }
        }
        // 将当前节点加入关闭列表
        closedList.push_back(currentNode);
        removeNodeFromOpenList(currentNode);
    }
    ```

4. **回溯路径**
    - 若找到路径，根据目标节点回溯，构建最终路径。

    ```cpp
    // C++代码示例 - 回溯路径
    std::vector<Node> path;
    Node currentNode = targetNode;
    while (currentNode != startNode) {
        path.push_back(currentNode);
        currentNode = currentNode.cameFrom;
    }
    path.push_back(startNode);
    reverse(path.begin(), path.end()); // 反转路径以获得正确的顺序
    ```

## 示例

假设我们有一个简单的2D网格作为路径规划地图。

```cpp
// C++代码示例 - 示例2D网格
// 定义Node结构体
struct Node {
    int x, y;
    float gScore, fScore;
    Node cameFrom;
    bool traversable;
    // 其他属性或方法
};
```
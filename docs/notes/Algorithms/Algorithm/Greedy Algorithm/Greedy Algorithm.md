---
title: Greedy Algorithm | 贪心法
tags:
  - Algorithms
  - 贪心法
---
# Greedy Algorithm | 贪心法

贪心算法是一种在每一步选择中都采取当前状态下最好或最优（即最有利）的选择，从而希望导致结果是全局最好或最优的算法。

## 基本原理

- **局部最优选择**：在对问题求解的每一步，总是做出在当前看来最好的选择。
- **无后效性**：一旦作出这些选择，就不再考虑这个选择的未来影响。
- **问题分解**：贪心法所针对的问题必须具备“最优子结构”，即局部最优解能决定全局最优解。

## 算法步骤

1. 建立数学模型来描述问题。
2. 把求解的问题分成若干个子问题。
3. 对每一子问题求解，得到子问题的局部最优解。
4. 把子问题的解局部最优解合成原来问题的一个解。

## 示例

**硬币找零问题**：有面额为 `D = {d1, d2, ..., dn}`的无限硬币，找零金额为 `M`，求最少硬币数。

```python
def coinChange(coins, amount):
    coins.sort(reverse=True)
    count = 0
    for coin in coins:
        if amount >= coin:
            num = amount // coin
            count += num
            amount -= num * coin
            if amount == 0:
                break
    return count if amount == 0 else -1
```

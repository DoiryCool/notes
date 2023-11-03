---
title: Branch-and-Bound Approach ,BBA | 分支定届法
tags:
  - Algorithms
---

# Branch-and-Bound Approach ,BBA | 分支定届法

## 简介

分支定界法是一种数学优化问题的求解方法，它通过逐步分解问题并在解空间中搜索最优解。该方法通常用于组合优化问题，如旅行商问题（TSP）、0-1背包问题等。

## 基本原理

分支定界法的基本原理是不断将问题分解为更小的子问题，并通过对这些子问题的求解来逐步逼近最优解。在求解过程中，利用上下界来减少搜索空间。

1. **分解问题**：将大问题分解为可行的子问题。
2. **搜索空间**：维护一个活动节点列表，探索解空间以寻找最优解。
3. **上下界**：利用上下界对可能解的价值进行估计，并减少搜索范围。
4. **剪枝**：剪除一些不可能包含最优解的子树。
5. **最优解**：在搜索过程中持续更新当前找到的最优解。

## 算法步骤

### 1. 初始化

设定初始问题，构建活动节点列表。

### 2. 选择分支节点

从活动节点列表中选择一个节点作为当前的分支节点。

### 3. 分支

根据分支节点生成子问题。

### 4. 检查子问题

对生成的子问题进行检查：

- 如果子问题是可行的且有更好的解，则更新最优解。
- 如果子问题可行但不能更优，则加入活动节点列表。
- 如果子问题不可行，则剪枝。

### 5. 重复

重复步骤2到步骤4，直到找到最优解或者活动节点列表为空。

## 伪代码
```cpp
// 分支定界法（branch and bound）

// 输入：问题 problem
// 输出：问题的最优解

// 初始化搜索空间
// 搜索空间初始化为一个包含所有可行解的子集
// 例如，对于旅行商问题，搜索空间可以初始化为包含所有可能的路径

void branch_and_bound(Problem problem) {
  // 初始化搜索空间
  SearchSpace search_space = problem.get_all_feasible_solutions();

  // 循环搜索空间
  // 直到搜索空间为空

  while (!search_space.empty()) {
    // 选择目标函数值上界最小的子集
    // 子集的目标函数值上界可以通过计算子集中所有可行解的目标函数值的上界来获得

    Subset current_subset = search_space.pop();

    // 对当前子集进行定界
    // 定界可以通过计算子集中所有可行解的目标函数值的上界来获得

    double upper_bound = current_subset.get_upper_bound();

    // 如果当前子集中的所有可行解都不是最优解，则继续搜索
    // 可以通过比较当前子集的目标函数值上界与问题的最优解的目标函数值来判断

    if (upper_bound < problem.get_optimal_value()) {
      // 将当前子集继续分解为更小的子集
      // 子集的分解可以通过选择子集中的一个决策变量，并将该变量设置为不同的值来进行

      search_space.extend(current_subset.branch());
    }
  }

  // 返回问题的最优解
  // 最优解可以通过搜索空间中的最后一个子集来获得

  return current_subset.get_optimal_solution();
}

// 例如，对于旅行商问题，子集的定界可以通过以下方法来实现：

double Subset::get_upper_bound() {
  // 计算子集中所有可行解的目标函数值的上界

  double upper_bound = INT_MAX;
  for (const Solution& solution : solutions) {
    upper_bound = std::min(upper_bound, solution.get_objective_value());
  }

  return upper_bound;
}

// 子集的分解可以通过以下方法来实现：

std::vector<Subset> Subset::branch() {
  // 选择子集中的一个决策变量

  DecisionVariable decision_variable = variables[random_int(variables.size())];

  // 将该变量设置为不同的值

  std::vector<Subset> new_subsets;
  for (int value = 0; value <= 1; value++) {
    // 创建新的子集

    Subset new_subset = Subset(*this);

    // 将决策变量设置为新的值

    new_subset.variables[decision_variable] = value;

    // 添加新的子集到搜索空间

    new_subsets.push_back(new_subset);
  }

  return new_subsets;
}
```
## 示例应用

分支定界法可以应用于多种组合优化问题，例如：
- **旅行商问题**（TSP）
- **0-1背包问题**
- **调度问题**
- **图着色问题**

## 优缺点

### 优点
- 可以找到最优解。
- 适用于多种组合优化问题。

### 缺点
- 在某些情况下，搜索空间很大时，算法可能会变得不够高效。

## 结论

分支定界法是一种寻找最优解的方法，适用于多种组合优化问题。虽然在处理较大规模问题时可能效率不高，但仍然是解决许多优化问题的有效工具。
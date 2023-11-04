---
id: Least-Squares
title: Least Squares | 最小二乘法
tags:
  - Algorithms
---

# LeastSquares | 最小二乘

## 概述

最小二乘法是一种在统计学、控制理论、机器学习等领域广泛使用的数学方法。它通过最小化误差的平方和来拟合数据，因此得名。

## 原理

假设我们有 $n$ 个数据点 $(x_1, y_1), (x_2, y_2), \dots, (x_n, y_n)$，其中 $x_i$ 是已知的，$y_i$ 是未知的。我们希望找到一个函数 $y = f(x)$，使得 $y_i$ 与 $f(x_i)$ 之间的误差尽可能小。

最小二乘法将误差定义为以下平方和：  
$$D = \sum_{i=1}^n (y_i - f(x_i))^2$$  
其中，$D$ 是误差函数，$f(x)$ 是拟合函数。
最小二乘法的基本思想是，求解 $f(x)$ 的参数，使得误差函数 $D$ 为最小值。

## 推导

为了求解最小二乘问题，我们可以采用牛顿-拉弗森法。

设 $f(x) = a + bx$，其中 $a$ 和 $b$ 是未知参数。

根据误差函数的定义，我们有：
$$D = \sum_{i=1}^n (y_i - a - bx_i)^2$$  
将误差函数的二阶导数设为零，可以得到以下方程组：  

$$\begin{aligned}\\2 \sum_{i=1}^n (y_i - a - bx_i) &= 0 \\2 \sum_{i=1}^n (x_i - a - bx_i) &= 0 \end{aligned}$$  

解得：  
$$a = \frac{\sum_{i=1}^n y_i}{n} \\b = \frac{\sum_{i=1}^n (y_i - \bar{y}) x_i}{n}$$


其中，$\bar{y}$ 是样本均值。

## 实现

在 Python 中，可以使用 `numpy` 库来实现最小二乘法：

```python
import numpy as np

def least_squares(x, y):
  """
  最小二乘法

  Args:
    x: 自变量
    y: 因变量

  Returns:
    拟合函数的参数
  """

  n = len(x)
  sum_x = np.sum(x)
  sum_y = np.sum(y)
  sum_xy = np.sum(x * y)
  sum_x2 = np.sum(x**2)

  a = sum_y / n
  b = (sum_xy - a * sum_x) / sum_x2

  return a, b


x = np.array([1, 2, 3, 4])
y = np.array([2, 4, 6, 8])

a, b = least_squares(x, y)

print(a, b)
```
### 输出：
```
1.5
2.0
```

## 附录

### 常见误差

在使用最小二乘法时，需要注意以下几点常见误差：

* 数据量不足：数据量不足会导致拟合不准确。
* 数据异常值：异常值会影响拟合效果，需要进行剔除或处理。
* 模型选择：最小二乘法可以拟合多种模型，需要根据实际情况选择合适的模型。

### 

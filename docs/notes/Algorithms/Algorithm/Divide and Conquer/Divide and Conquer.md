---
title: Divide and Conquer | 分治法
tags:
  - Algorithms
  - 分治法
---

# Divide and Conquer | 分治法

分治法是一种解决问题的方法，它将一个问题分解为若干个小的、相互独立且与原问题形式相同的子问题，递归解决这些子问题，然后再合并其结果，从而得到原问题的解。

## 基本原理

-**分解**：将原问题分解为若干个规模较小的同类问题。

-**解决**：递归解决这些子问题，若子问题足够小，则直接求解。

-**合并**：将子问题的结果合并成原问题。

## 算法步骤

1.**分解**：将原问题分解为若干子问题。

2.**解决**：递归地求解各子问题。如果子问题足够小，则直接求解。

3.**合并**：将子问题的解合并为原问题的解。

## 示例

**归并排序**：

```python
defmergeSort(arr):
if len(arr) > 1:
    mid = len(arr) // 2
    L = arr[:mid]
    R = arr[mid:]
    mergeSort(L)
    mergeSort(R)
    i = j = k = 0
while i < len(L) and j < len(R):
    if L[i] < R[j]:
        arr[k] = L[i]
        i += 1
    else:
        arr[k] = R[j]
        j += 1
        k += 1
while i < len(L):
    arr[k] = L[i]
    i += 1
    k += 1
while j < len(R):
    arr[k] = R[j]
    j += 1
    k += 1
return arr
```

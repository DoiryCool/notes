---
title: Template | 模板
tags:
  - C++
  - Language
---

# 模板
`template <typename T> `是 C++ 中的模板声明，用于创建通用代码以处理多种数据类型，实现泛型编程。通过模板，可以编写代码，而不用提前指定特定的数据类型，使代码更加通用灵活。
## Example | 示例
```cpp
template<typename T>
struct CostFunctor {
    bool operator()(const T* parameters, T* residual) const {
        // 使用类型T进行计算，可以是任意数据类型
        // 例如 T 可以是 double 或 float
        // 这使得函数能够处理不同的数据类型
    }
};

```
## Template specialization | 模板特化
允许为特定的数据类型提供特定的实现，这使得模板在特定情况下能够处理不同的数据类型
```cpp
// 通用的模板
template <typename T>
void processValue(T value) {
    std::cout << "Generic Template: " << value << std::endl;
}

// 模板特化 - 用于特定类型的实现
template <>
void processValue<int>(int value) {
    std::cout << "Specialized Template for int: " << value << std::endl;
}

int main() {
    processValue(5.5);  // 使用通用模板
    processValue(10);    // 使用模板特化
    processValue("test"); // 使用通用模板

    return 0;
}

```
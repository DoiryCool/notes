---
title: Ceres | 非线性优化器
tags:
  - SLAM
---
# Ceres Solver 使用指南

Ceres Solver是一个用于解决非线性最小二乘问题的开源C++库。下面是使用Ceres Solver的基本步骤和一个简单的优化问题示例。

## 步骤

1. **安装Ceres Solver**
   下载并安装Ceres Solver，遵循官方文档中的安装说明。

2. **引入头文件**
   在您的C++文件中包含Ceres Solver的头文件。
```cpp
   #include <ceres/ceres.h>
```

## 1.定义代价函数
创建一个代价函数，即误差计算函数。
```cpp
struct CostFunctor {
    template<typename T>
    bool operator()(const T* parameters, T* residual) const {
        // 例如，计算误差或残差值
        residual[0] = T(10.0) - parameters[0];
        return true;
    }
};

```
## 2.初始化优化问题
设置Ceres Solver的问题，添加参数块和代价函数。
```cpp
ceres::Problem problem;

double initial_parameter = 5.0;
problem.AddParameterBlock(&initial_parameter, 1);

ceres::CostFunction* cost_function = new ceres::AutoDiffCostFunction<CostFunctor, 1, 1>();
problem.AddResidualBlock(cost_function, nullptr, &initial_parameter);
```

## 3.配置优化器参数
配置Ceres Solver的选项。
```cpp
ceres::Solver::Options options;
options.linear_solver_type = ceres::DENSE_QR;
options.minimizer_progress_to_stdout = true; // 输出优化过程信息
```

## 4.运行优化
调用Ceres Solver的优化器执行优化过程。

```cpp
ceres::Solver::Summary summary;
ceres::Solve(options, &problem, &summary);
```
## 5.输出优化结果
显示优化后的参数值和优化的摘要信息。

```cpp
std::cout << "Final parameter: " << initial_parameter << std::endl;
std::cout << summary.FullReport() << std::endl;
```

# 示例
假设有一些观测数据，这些数据可以用一个多项式函数进行拟合，使用Ceres Solver来拟合这个多项式函数，找到其中参数以最小化观测数据和拟合曲线之间的残差。
```cpp
#include <iostream>
#include <ceres/ceres.h>

// 代价函数：多项式拟合问题
struct CostFunctor {
    CostFunctor(double x, double y) : x_(x), y_(y) {}

    template<typename T>
    bool operator()(const T* const a, T* residual) const {
        // 多项式函数为 a[0] + a[1]*x + a[2]*x^2 - y
        residual[0] = a[0] + a[1] * T(x_) + a[2] * T(x_) * T(x_) - T(y_);
        return true;
    }

private:
    const double x_;
    const double y_;
};

int main() {
    ceres::Problem problem;

    // 观测数据点
    std::vector<std::pair<double, double>> observations = {
        {1.0, 2.0},
        {2.0, 3.0},
        {3.0, 4.0},
        // 更多数据点...
    };

    // 初始参数猜测值
    double initial_params[3] = {0.0, 0.0, 0.0};

    // 添加参数块
    problem.AddParameterBlock(initial_params, 3);

    // 添加代价函数（残差块）
    for (const auto& observation : observations) {
        ceres::CostFunction* cost_function =
            new ceres::AutoDiffCostFunction<CostFunctor, 1, 3>(
                new CostFunctor(observation.first, observation.second)
            );
        problem.AddResidualBlock(cost_function, nullptr, initial_params);
    }

    // 配置Ceres Solver参数
    ceres::Solver::Options options;
    options.linear_solver_type = ceres::DENSE_QR;
    options.minimizer_progress_to_stdout = true;

    // 运行优化
    ceres::Solver::Summary summary;
    ceres::Solve(options, &problem, &summary);

    // 输出结果
    std::cout << "Final parameters: ";
    for (const auto& param : initial_params) {
        std::cout << param << " ";
    }
    std::cout << std::endl;

    std::cout << summary.FullReport() << std::endl;

    return 0;
}
```
---
title: PID Controller | PID控制器
tags:
  - Algorithms
---
# PID

PID控制器是一种用于控制系统的反馈控制环路，它通过比较实际输出和期望输出来调整输入。PID控制器由比例（Proportional）、积分（Integral）、和微分（Derivative）三部分组成。

## PID控制器的计算公式

PID控制器的输出计算公式为：  
$$Output = Kp * error + Ki * ∫error dt + \frac{Kd * d(error)}{dt}$$


其中：
- `error` 是期望值和实际值之间的偏差。
- `Kp` 是比例增益。
- `Ki` 是积分增益。
- `Kd` 是微分增益。

## 小车控制示例

假设有一个小车，我们希望通过PID控制器来控制它的速度以使其保持在目标速度。

```cpp
// C++代码示例 - 小车PID控制
double targetVelocity = 50.0; // 目标速度
double currentVelocity = 0.0; // 当前速度

// PID增益
double Kp = 0.1;
double Ki = 0.01;
double Kd = 0.05;

double error = targetVelocity - currentVelocity;
double previousError = 0.0;
double integral = 0.0;

// 时间间隔
double dt = 0.1;

for (int i = 0; i < 100; ++i) {
    integral += error * dt;
    double derivative = (error - previousError) / dt;
    double output = Kp * error + Ki * integral + Kd * derivative;

    // 应用输出控制小车速度
    currentVelocity += output;

    // 更新错误和前一次的错误
    previousError = error;
    error = targetVelocity - currentVelocity;

    // 打印输出
    std::cout << "Output: " << output << ", Current Velocity: " << currentVelocity << std::endl;
}
```
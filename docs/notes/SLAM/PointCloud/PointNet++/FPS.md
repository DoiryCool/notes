# FPS | 最远点采样

## FPS步骤：

1. 设定点云与采样点数。
2. 选取一点，加入 `采样点集`。
3. 计算上一点与其他点的欧氏距离，选取最大的一点加入 `采样点集。`
4. 计算其他一点到每个采样点之间的距离，选取最小值，类推计算所有非采样点，选取最大值加入 `采样点集`。

与随即采样相比，FPS更加均匀。

![img](./images/FPS1.png)
## 伪代码
```python
函数 最远点采样(点集, 采样数量):
    已选点集 = []  // 存储已选择的点
    初始点索引 = 随机整数(0, 点集长度 - 1)
    将 初始点索引 添加到已选点集中

    当 已选点集长度 < 采样数量 时:
        最大距离 = 0
        最远点索引 = -1

        对于 每个点在点集中:
            若 点在 已选点集中:
                继续

            最小距离 = 无穷大
            对于 已选点集中的每个已选索引:
                计算距离 = 计算距离(点, 已选点集[已选索引])
                若 计算距离 < 最小距离:
                    最小距离 = 计算距离

            若 最小距离 > 最大距离:
                最大距离 = 最小距离
                最远点索引 = 当前点索引

        将 最远点索引 添加到已选点集中

    返回 已选点集

```
## C++实例代码
```cpp
#include <iostream>
#include <vector>
#include <cmath>
#include <random>

struct Point {
    double x, y; // 假设点具有 x 和 y 坐标
};

double distance(const Point& p1, const Point& p2) {
    return std::sqrt(std::pow(p2.x - p1.x, 2) + std::pow(p2.y - p1.y, 2));
}

int farthestPointSample(const std::vector<Point>& points, int numSamples) {
    std::vector<int> selectedPoints;
    std::uniform_int_distribution<int> distribution(0, points.size() - 1);
    std::default_random_engine generator;

    // 随机选择一个起始点
    int initialPointIndex = distribution(generator);
    selectedPoints.push_back(initialPointIndex);

    while (selectedPoints.size() < numSamples) {
        double maxDistance = 0.0;
        int farthestPointIndex = -1;

        for (int i = 0; i < points.size(); ++i) {
            // 检查该点是否已被选择
            if (std::find(selectedPoints.begin(), selectedPoints.end(), i) != selectedPoints.end()) {
                continue;
            }

            // 计算当前点到已选择点集中的点的最短距离
            double minDistance = std::numeric_limits<double>::max();
            for (const int& selectedIndex : selectedPoints) {
                double dist = distance(points[i], points[selectedIndex]);
                if (dist < minDistance) {
                    minDistance = dist;
                }
            }

            // 更新最大距离和最远点的索引
            if (minDistance > maxDistance) {
                maxDistance = minDistance;
                farthestPointIndex = i;
            }
        }

        // 将最远点添加到已选择点集中
        selectedPoints.push_back(farthestPointIndex);
    }

    // 输出选择的点的索引（可根据需要进行修改）
    for (const int& index : selectedPoints) {
        std::cout << "Selected point index: " << index << std::endl;
    }

    return 0;
}

int main() {
    // 创建示例点集
    std::vector<Point> points = {
        {0.0, 0.0}, {1.0, 2.0}, {2.0, 3.0}, {3.0, 1.0},
        {4.0, 5.0}, {5.0, 6.0}, {6.0, 2.0}, {7.0, 8.0}
    };

    // 调用最远点采样函数并指定需要采样的点数
    farthestPointSample(points, 3); // 这里选择了 3 个点作为示例

    return 0;
}

```
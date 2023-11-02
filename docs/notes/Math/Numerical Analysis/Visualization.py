import numpy as np
import matplotlib.pyplot as plt
import matplotlib.animation as animation

# 定义函数和其导数
def f(x):
    return x**2 - 2

def df(x):
    return 2 * x

# 牛顿迭代
def newton_iteration(x, iterations=10):
    x_vals = [x]
    y_vals = [f(x)]
    for _ in range(iterations):
        x = x - f(x) / df(x)
        x_vals.append(x)
        y_vals.append(f(x))
    return x_vals, y_vals

# 设置初始点和迭代次数
initial_x = 5
iterations = 10

# 牛顿迭代过程
x_vals, y_vals = newton_iteration(initial_x, iterations)

# 创建动画
fig, ax = plt.subplots()
line, = ax.plot([], [], 'ro')
tangent, = ax.plot([], [], 'b--')
annotation = ax.annotate('', xy=(0, 0), xytext=(20, 20), textcoords='offset points',
                         arrowprops=dict(arrowstyle="->"))

# 初始化函数图像
x = np.linspace(-3, 6, 100)
y = f(x)
ax.plot(x, y)
ax.axhline(y=0, color='black',linewidth=0.5) # 添加X轴

# 动画函数
def animate(i):
    if i < len(x_vals):
        x = x_vals[i]
        y = y_vals[i]
        slope = df(x)
        y_tangent = f(x) + slope * (x - x_vals[i])
        
        line.set_data(x, y)
        tangent.set_data([x_vals[i] - 1, x_vals[i] + 1], [y_tangent - slope, y_tangent + slope])
        
        annotation.set_text(f'Iteration {i + 1}\n(x={x:.4f}, y={y:.4f})')
        annotation.xy = (x, y)
        return line, tangent, annotation

# 设置坐标轴和标题
ax.set_xlim(-3, 6)
ax.set_ylim(-5, 10)
ax.set_title('Newton Iteration Visualization- Jerry Gu\'s Notes')

# 生成动画
ani = animation.FuncAnimation(fig, animate, frames=iterations, interval=1000, blit=True)

# 保存为gif
ani.save('newton_iteration.gif', writer='pillow', fps=1)

plt.show()

import matplotlib.pyplot as plt

age = [25, 27, 28, 30, 33, 34, 34, 35]
salary = [10000,15000,20000,20000,25000,26000,27000,30000]
#plt.scatter(age, salary)
#plt.show()
#----------------------------------------------------------#
x = 6.0
learning_rate = 0.1
num_iterations = 100

for i in range(num_iterations):
    gradient = 2 * x
    x = x - learning_rate * gradient
    y = x ** 2
    print(f"Iteration {i + 1}: x = {x}, y = {y}")

print("最终结果：")
print(f"x = {x}, y = {y}")

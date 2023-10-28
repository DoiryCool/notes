import random
import matplotlib.pyplot as plt

age = [25, 27, 28, 30, 33, 34, 34, 35, 36, 38, 40, 42, 45, 47]
salary = [10000, 15000, 20000, 20000, 25000, 26000, 27000, 30000, 32000, 35000, 38000, 40000, 45000, 48000]

m = random.uniform(0, 1)
b = random.uniform(0, 1)

learning_rate = 0.0005
num_iterations = 1000000

batch_size = 10 

# Loss Function
losses = []

#RGD
for i in range(num_iterations):
    indices = random.sample(range(len(age)), batch_size)
    x_batch = [age[index] for index in indices]
    y_batch = [salary[index] for index in indices]

    avg_dm = sum(2 * x * (m * x + b - y) for x, y in zip(x_batch, y_batch)) / batch_size
    avg_db = sum(2 * (m * x + b - y) for x, y in zip(x_batch, y_batch)) / batch_size

    m = m - learning_rate * avg_dm
    b = b - learning_rate * avg_db

    if i % 10000 == 0:
        loss = sum((m * x + b - y) ** 2 for x, y in zip(age, salary)) / len(age)
        losses.append(loss)
        print(f"Iteration {i}: 参数：m = {m}, b = {b}, 损失函数 = {loss}")

print(f"最终参数：m = {m}, b = {b}")

x_values = range(25, 48)
y_values = [m * x + b for x in x_values]

plt.scatter(age, salary, label='Data')
plt.plot(x_values, y_values, color='red', label='Fitted Line')
plt.xlabel('Age')
plt.ylabel('Salary')
plt.legend()
plt.show()

iterations = range(0, num_iterations, 1000)
plt.plot(iterations, losses, label='Loss')
plt.xlabel('Iterations')
plt.ylabel('Loss')
plt.legend()
plt.show()

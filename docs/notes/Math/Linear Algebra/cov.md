# Covariance | 协方差

协方差是用来描述两个变量的`相关程度`的，一般用$cov(x,y)$进行表示，当$cov(x,y) > 0$时，表明两个变量正相关，即$x$增大(减小)，$y$也随之增大(减小)。

## 协方差矩阵

协方差矩阵$C=\begin{bmatrix} cov(x,x)&cov(x,y) \\ cov(x,y)&cov(y,y)\end{bmatrix} = \frac{1}{n-1}DD^{T}$，其中D为白数据。

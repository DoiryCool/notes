# Git | 分支管理工具

## 删除分支文件

1. 列出仓库中所有代码

```bash
git rev-list --all | xargs -rL1 git ls-tree -r --long | sort -uk3 | sort -rnk4 | head -10
```

2. 根据文件名修改commit历史

```bash
git filter-branch --tree-filter "rm -f {filepath}" -- --all
```
3. 强制提交

```bash
git push -f --all
```

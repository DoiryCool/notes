---
title: Vim | 编辑器
tags:
  - Linux
  - Vim
---
# Vim 常用操作

## 基本移动

| 操作                | 描述                               |
|---------------------|------------------------------------|
| 移动光标            | 使用 `h`, `j`, `k`, `l` 分别代表左、下、上、右。  |
| 行首/行尾            | `0` 移动到行首，`$` 移动到行尾。              |
| 单词跳跃            | `w` 跳到下一个单词，`b` 跳到前一个单词。        |
| 行跳跃              | `gg` 移动到文件开头，`G` 移动到文件结尾。      |
| 行号跳转            | `:行号` 跳转到指定行。                      |

## 编辑文本

| 操作                | 描述                               |
|---------------------|------------------------------------|
| 插入文本            | 按 `i` 进入插入模式，按 `Esc` 退出。          |
| 删除文本            | `x` 删除当前字符，`dd` 删除整行，`D` 删除从光标位置到行尾。 |
| 复制和粘贴          | `yy` 复制整行，`p` 粘贴。                   |
| 撤销和重做          | `u` 撤销上一步操作，`Ctrl + r` 重做。        |

## 查找和替换

| 操作                | 描述                               |
|---------------------|------------------------------------|
| 查找                | 按 `/` 进入查找模式，输入关键词后按回车。        |
| 替换                | `:%s/旧文本/新文本/g` 替换所有匹配的文本。       |

## 文件操作

| 操作                | 描述                               |
|---------------------|------------------------------------|
| 保存文件            | `:w` 保存当前文件。                       |
| 退出                | `:q` 退出Vim，`:q!` 强制退出。              |
| 保存并退出          | `:wq` 或 `ZZ`。                         |

## 分屏和多窗口

| 操作                | 描述                               |
|---------------------|------------------------------------|
| 分屏                | `:sp` 垂直分屏， `:vsp` 水平分屏。        |
| 切换窗口            | `Ctrl + w + w` 切换窗口焦点。             |

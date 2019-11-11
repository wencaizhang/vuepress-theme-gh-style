---
tags:
  - markdown
categories: 
  - blog
date: 2019-10-21
---

# Markdown语法介绍

Markdown是一种纯文本格式的标记语言。通过简单的标记语法，它可以使普通文本内容具有一定的格式。

对我而言，它最大的好处是纯文本，通过使用简单的符号标记不同的标题，分割不同的段落，**粗体** 或者 *斜体* 某些文字，甚至表格、流程图、公式等等。

而唯一的代价就是需要学习一些对应的语法，let's go.

## 标题

一个井号（`#`）代表一级标题，两个井号（`##`）代表二级标题，以此类推，最多是六级标题。

输入：

```markdown
# 一级标题
## 二级标题
### 三级标题
#### 四级标题
##### 五级标题
###### 六级标题
```

输出：

![markdown-titles](https://cdn.jsdelivr.net/gh/wencaizhang/static@master/avatar.png)

## 列表

### 有序列表

输入：

```markdown
1. 文本1
2. 文本2
3. 文本3
```

输出：

1. 文本1
2. 文本2
3. 文本3

### 无序列表

输入：

```markdown
- 文本1
- 文本2
- 文本3
```

输出：

- 文本1
- 文本2
- 文本3

## 链接和图片

输入：

```markdown
![](https://gitee.com/wencaizhang_admin/images/raw/master/avatar.png)
```

输出：

![](https://gitee.com/wencaizhang_admin/images/raw/master/avatar.png)

输入：

```markdown
[GitHub](https://github.com/)
```

输出：

[GitHub](https://github.com/)

输入：

```markdown
<https://github.com/>
```

<https://github.com/>

## 引用

输入：

```markdown
> 张爱玲小说《红玫瑰与白玫瑰》:
> 
> 也许每一个男子全都有过这样的两个女人，至少两个。娶了红致瑰，久而久之，红的变了墙上的一抹蚊子血，白的还是窗前明月光；娶了白玫瑰，白的便是粘在衣服上的一粒饭粒子，红的却是心口上的一颗朱砂痣。
```

输出：

> 张爱玲小说《红玫瑰与白玫瑰》:
> 
> 也许每一个男子全都有过这样的两个女人，至少两个。娶了红致瑰，久而久之，红的变了墙上的一抹蚊子血，白的还是窗前明月光；娶了白玫瑰，白的便是粘在衣服上的一粒饭粒子，红的却是心口上的一颗朱砂痣。


## 粗体和斜体

输入：

使用两个星号（`**`) 包裹需要加粗的内容

```markdown
**我是粗体**
```

输出：

**我是粗体**

输入：

```markdown
*我是斜体*
```

输出：

*我是斜体*


## 表格

Markdown 制作表格使用 `|` 来分隔不同的单元格，使用 `---`(三个或三个以上的短横线 `-`) 来分隔表头和其他行。

语法格式如下：

```markdown
|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |
```

显示结果如下：

|  表头   | 表头  |
|  ----  | ----  |
| 单元格  | 单元格 |
| 单元格  | 单元格 |

我们可以设置表格的对齐方式：

+ `-:` 设置内容和标题栏居右对齐。
+ `:-` 设置内容和标题栏居左对齐。
+ `:-:` 设置内容和标题栏居中对齐。

```markdown
| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |
```

显示结果如下：

| 左对齐 | 右对齐 | 居中对齐 |
| :-----| ----: | :----: |
| 单元格 | 单元格 | 单元格 |
| 单元格 | 单元格 | 单元格 |


## Emoji

输入：

```md
:tada: :100:
```

输出：

:tada: :100:

## 代码高亮

### 行内代码

行内代码前后分别用一个反引号（键盘上 ESC 键下面那个键）包裹。

输入：

```
设为 Flex 布局以后，子元素的 `float`、`clear` 和 `vertical-align` 属性将失效。
```

输出：

设为 Flex 布局以后，子元素的 `float`、`clear` 和 `vertical-align` 属性将失效。

### 代码块

输入：

````
``` js
export default {
  name: 'MyComponent',
  // ...
}
```
````


输出：

```js
export default {
  name: 'MyComponent',
  // ...
}
```

输入：

````
``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
````

输出：

``` html
<ul>
  <li
    v-for="todo in todos"
    :key="todo.id"
  >
    {{ todo.text }}
  </li>
</ul>
```
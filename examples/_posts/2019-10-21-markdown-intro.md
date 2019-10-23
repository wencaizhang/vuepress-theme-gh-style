---
tags:
  - markdown
categories: 
  - test3
---

# Markdown语法介绍

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

![markdown-titles](https://gitee.com/wencaizhang_admin/images/raw/master/markdown-titles.png)

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

![](https://gitee.com/wencaizhang_admin/images/raw/master/avatar.png)

[GitHub](https://github.com/)

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

通过 `:` 控制每列的对齐方式，默认靠左对齐

输入：

```md
| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| 第三列         | 右对齐         | $1600 |
| 第二列         | 居中           |   $12 |
| 隔行换色        | 显得整齐       |    $1 |
```

输出：

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| 第三列         | 右对齐         | $1600 |
| 第二列         | 居中           |   $12 |
| 隔行换色        | 显得整齐       |    $1 |

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
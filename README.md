# react-learning-demo
react 学习demo以及笔记

## React 官网阅读笔记
### 组件
1. 组件包含由类创建的组件(class component)和函数式组件（simple components）。一个由类创建的组件必包含一个`render()`，并且`return`返回元素中只能有一个父元素。tips: 如果`return`只包含一行内容，那就不需要用括号括起来了。[来自Tania Rascia博客。](https://www.taniarascia.com/getting-started-with-react/)

## 渲染
`ReactDOM.render()` 渲染元素。
- 更新已渲染元素
React 元素是**不可变对象**，一旦被创建就无法更改它的属性或者自元素。更新 UI 的唯一方式是创建一个全新的元素并将其传入`ReactDOM.render()`。
- react 只更新它需要更新的部分
React 会将元素和它的子元素与它们之前的状态进行比较，只更新必要的部分来使DOM达到预期的状态。

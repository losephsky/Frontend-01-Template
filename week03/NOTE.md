
####根据课上老师的示范，找出 JavaScript 标准里所有的对象，分析有哪些对象是我们无法实现出来的，这些对象都有哪些特性？写一篇文章，放在学习总结里。

```
  1.Function Object => [[call]]
  2.Array => [[length]]
  3.String => [[StringData]]
  4.Arguments => [[ParameterMap]]
  5.Integer-Indexed => [[ArrayLength]]
  6.Module Namespace => [[IsExtensible]] [[PreventExtensions]]
  7.Immutable Prototype => [[SetPrototypeOf]]
```


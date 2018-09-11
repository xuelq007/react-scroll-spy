# react-scroll-spy

一个基于React16版本的scroll-spy组件。


[Demo](https://xuelq007.github.io/react-scroll-spy/)

## 本地运行

git clone git@github.com:xuelq007/react-scroll-spy.git

npm i

npm run dev

localhost:3000


## 使用

```javascript

import ScrollSpy from './component/scrollSpy/scrollSpy';

let news1 = <div>...</div>;
let news2 = <div>...</div>;
...
let components = [[news1],[news2],[news3],[news4]];

<ScrollSpy layout='top' components={components} tabs={['Facebook', 'Google', 'Microsoft', 'IBM']} />

```

## TODO List

1. ~~通过配置调整tab的位置(上下左右)~~

2. ~~响应式布局(flex)~~

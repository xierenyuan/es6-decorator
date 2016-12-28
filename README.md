
# es6-decorator

es6 装饰器学习
> -。- 好奇 宝宝 又开始学习新东西呢

实现装饰器 完成复古版本 ng1 + es6 开发

> 参考 [javascript-decorators](https://github.com/wycats/javascript-decorators/blob/master/README.md)
> [transform-decorators](https://babeljs.io/docs/plugins/transform-decorators/)

# 运行

``` shell

# 安装

npm install

npm run  demo
```

## 关于发现的一些写法问题 描述

实现装饰器时 如果装饰器需要传参数 则需要 如下写法  如不需要传参数则不需要

> 需要参数

``` javascript
function isClass(value) {
    console.log(value);
    return function(target, name, descriptor) {
        console.log(target);
        console.log(name);
        console.log(descriptor);
    }
}

@isClass({
    params:true
})
class A {
    constructor() {
        console.log('233');
    }
};
```

> 不需要参数

``` javascript
function isClass(target, name, descriptor) {

}

@isClass
class A {
    constructor() {
        console.log('233');
    }
};
```
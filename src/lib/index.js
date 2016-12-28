import angular from 'angular';
import { moduleFactory } from './module';
import { InjectFactory, extractArgs } from './inject';

/**
 * 
 * ng 装饰器
 * @export
 * @param {any} options ng module 的实现
 * @returns
 */
export function NgModule(options) {
    if (typeof options === 'function') {
        throw new Error('NgModule 必须需要参数 才能正确运行哦0.0 ..');
    } else {
        return function(module) {
            return moduleFactory(module, options);
        }
    }
}

/**
 * 
 * 启动 
 * @export
 * @param {any} name 传入的module name
 */
export function Bootstrap(name) {
    const doc = document;
    angular.element(doc).ready(function() {
        console.log('ready bootstrap ', name);
        angular.bootstrap(doc, [name]);
    });
}


/**
 * 
 * 依赖加载 模板
 * @export
 * @param {any} templateUrl 模板地址
 */
export function RequireTemplate(templateUrl) {
    return function(target, value, descriptor) {
        console.log(templateUrl);
    }
}

/**
 * 
 * 实现 因为压缩导致 依赖注入 的模块报错的问题
 * @export
 * @param {any} inject 在传参数的情况下是  指需要依赖注入的模块 不传参数的情况下 是指 当前 target
 * 很尴尬。。。默认参数的实现压缩还是会报错 先留着吧  -.- 这个还是的做代码编译器 来实现比较好一点...
 */
export function Inject(inject, val, desc) {
    // 当参数为1时说明 是传入依赖注入的方式 当默认不传参数时 说明 是直接获取inject 处理
    const isFunctionNoParam = arguments.length === 1;
    if (!isFunctionNoParam) {
        let args = extractArgs(desc.value);
        return InjectFactory(desc, args);
    }
    return function(target, value, descriptor) {
        return InjectFactory(descriptor, inject);
    }
}

/**
 * 
 * 解决因为 压缩 引起的依赖注入问题
 * @export
 * @param {any} options 需要依赖注入的参数
 * @returns
 */
export function Injector(...options) {
    return function(target, value, descriptor) {
        descriptor.value.$inject = options;
        return descriptor;
    }
}
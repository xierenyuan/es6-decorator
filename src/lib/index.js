import angular from 'angular';
import { moduleFactory } from './module';
import { InjectFactory } from './inject';

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
 * 实现 因为压缩导致 依赖注入 的模块报错的问题
 * 因为 严格模式下 Function 获取 arguments 会报错的问题 取消 不传参数的限制 现在的需要传参数
 * @export
 * @param {any} inject 需要依赖注入的模块 
 */
export function Inject(...inject) {
    const isFunctionNoParam = arguments.length === 0;
    if (isFunctionNoParam) {
        throw new Error('Inject 必须传入需要依赖注入的模块');
    }
    return function(target, value, descriptor) {
        return InjectFactory(descriptor, inject);
    }
}
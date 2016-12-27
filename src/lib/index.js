import angular from 'angular';
import { moduleFactory } from './module';

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
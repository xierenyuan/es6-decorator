import angular from 'angular';

export const $internalHooks = [
    'config',
    'run'
]

/**
 * 
 * 模块的工程实现方法
 * @export
 * @param {any} Module 当前类的原型
 * @param {any} Options 模块配置
 */
export function moduleFactory(Module, Options) {
    //获取原型链
    const pro = Module.prototype;
    //依赖的模块
    const requireModules = Options.require || [];

    //获取原型上的 方法进行注册
    const app = angular.module(Options.name, requireModules);

    //遍历原型链上的方法
    Object.getOwnPropertyNames(pro).forEach(key => {
        if (key === 'constructor') {
            return
        }
        if ($internalHooks.indexOf(key) == -1) {
            return
        }
        app[key](pro[key]);
    });

    return Options.name;

}
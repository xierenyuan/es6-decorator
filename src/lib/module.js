export function NgModule(params) {
    return function(target, name, descriptor) {

    }
}

/**
 * 
 * 启动 
 * @export
 * @param {any} params 传入的module 对象
 */
export function Bootstrap(params) {
    angular.module(params.name, []);
}
import { Injector } from './lib';

/**
 * 
 * ng 依赖加载  用
 * @export
 * @param {function} fn 回调
 */
export function Require(fn) {
    return ['$q', function($q) {
        return $q((resolve) => {
            fn && fn.call(this, resolve);
        });
    }]
}
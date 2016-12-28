/**
 * 
 * 解决因为压缩引起的 依赖注入 报错问题 处理
 * @export
 * @param {any} descriptor 函数本身
 * @param {any} inject 依赖的模块
 */
export function InjectFactory(descriptor, inject) {
    descriptor.value.$inject = inject;
    return descriptor;
};

const ARROW_ARG = /^([^(]+?)=>/;
const FN_ARGS = /^[^(]*\(\s*([^)]*)\)/m;
const FN_ARG_SPLIT = /,/;
const FN_ARG = /^\s*(_?)(\S+?)\1\s*$/;
const STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;

/**
 * 
 * 获取 function 的 参数
 * @export
 * @param {any} fn 传入需要获取的function
 * @returns 返回一个 参数数组 ["@timeout","Test"]
 */
export function extractArgs(fn) {
    let injects = [];
    if (fn.length) {
        let fnText = stringifyFn(fn).replace(STRIP_COMMENTS, '');
        // 根据正则提取出 参数
        let args = fnText.match(ARROW_ARG) || fnText.match(FN_ARGS);
        // 把提取到参数 转为 数组  
        args[1].split(FN_ARG_SPLIT).map(item => {
            // 去除个别参数 前面有空格的问题 " @timeout"
            item.replace(FN_ARG, (all, underscore, name) => {
                injects.push(name);
            });
        });
    }
    return injects;
}

function stringifyFn(fn) {
    // Support: Chrome 50-51 only
    // Creating a new string by adding `' '` at the end, to hack around some bug in Chrome v50/51
    // (See https://github.com/angular/angular.js/issues/14487.)
    // TODO (gkalpak): Remove workaround when Chrome v52 is released
    return Function.prototype.toString.call(fn) + ' ';
}
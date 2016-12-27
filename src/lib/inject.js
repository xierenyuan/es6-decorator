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
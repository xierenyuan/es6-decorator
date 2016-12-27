function isClass(value) {
    return function(target, name, descriptor) {
        console.log(value);
        console.log(target);
        console.log(name);
        console.log(descriptor);
    }
}

@isClass({
    isObject: true,
    select: 'item'
})
class A {
    constructor() {
        console.log('233');
    }
};

new A();

export default A;
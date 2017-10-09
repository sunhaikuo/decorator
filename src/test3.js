class User {
    @readonly
    getName() {
        return 'Hello World'
    }
}

// readonly修饰函数，对方法进行只读操作
function readonly(target, name, descriptor) {
    descriptor.writable = false
    return descriptor
}

let u = new User()
// 尝试修改函数，在控制台会报错
u.getName = () => {
    return 'I will override'
}
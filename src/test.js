// @fly(true)
// class IronMan {
//     constructor(def = 2, atk = 3, hp = 3) {
//         this.init(def, atk, hp)
//     }
//     @decorateArmour
//     @decorateLight
//     init(def, atk, hp) {
//         this.def = def
//         this.atk = atk
//         this.hp = hp
//     }
//     toString() {
//         return `防御力:${this.def},攻击力:${this.atk},血量:${this.hp}`
//     }
// }

// function fly(isFly) {
//     return function (target) {
//         let method = target.prototype.toString
//         let extra = isFly ? '我可以飞' : '我不能飞'
//         target.prototype.toString = (...args) => {
//             let ret = method.apply(target.prototype, args)
//             return ret += ' ,' + extra
//         }
//         // return target
//     }
// }

// function decorateArmour(target, name, descriptor) {
//     let method = descriptor.value
//     descriptor.value = (...args) => {
//         args[0] += 100
//         method.apply(target, args)
//     }
//     return descriptor
// }

// function decorateLight(target, name, descriptor) {
//     let method = descriptor.value
//     descriptor.value = (...args) => {
//         args[1] += 50
//         method.apply(target, args)
//     }
// }

// let man = new IronMan()
// console.log(`${man}`)
// function log(info) {
//     return function (target, name, descriptor) {
//         let method = descriptor.value
//         descriptor.value = (...args) => {
//             let ret = ''
//             try {
//                 ret = method.apply(target, args)
//             } catch (e) {
//                 ret = e
//             }
//             console.log(info + ret + ' !')
//         }
//     }
// }

// class IronMan {
//     @log('IronMan 自检阶段')
//     check() {
//         return '检查完毕';
//     }
//     @log('IronMan 攻击阶段')
//     attack() {
//         return '击倒敌人';
//     }
//     @log('IronMan 机体报错')
//     error() {
//         throw 'Something is wrong!';
//     }
// }

// var tony = new IronMan();
// tony.check();
// tony.attack();
// tony.error();

// function checkLogin(target, name, descriptor) {
//     let method = descriptor.value
//     descriptor.value = (...args) => {
//         let ret = args[0].cookie
//         if (ret) {
//             console.log('login')
//         } else {
//             console.log('not login')
//         }
//     }
// }

// class User {
//     constructor(name) {
//         this.name = name
//     }
//     @checkLogin
//     getInfo(request) {
//         return this.name
//     }
// }

// let u = new User('zs')
// let request = {
//     cookie: false
// }
// u.getInfo(request)

// class User {
//     constructor() {
//         this.name = 'xxx'
//     }
//     @checkLogin
//     getName() {
//         console.log('--已登录执行的逻辑')
//     }
// }

// function checkLogin(target, name, descriptor) {
//     console.log('...在这里判断登录，如果未登录')
// }

// let u = new User()
// u.getName()

// class User {
//     constructor() {
//         this.name = 'zs'
//     }
//     @checkLogin
//     getInfo() {
//         console.log('--getInfo--')
//         return this.name
//     }
// }

// function checkLogin(target, name, descriptor) {
//     let method = descriptor.value
//     descriptor.value = function (...args) {
//         console.log(args)
//         method.apply(target, args)
//     }
//     console.log(descriptor.value.toString())
//     console.log('--checkLogin--')
//     return descriptor
// }

// function checkLogin(target, name, descriptor) {
//     const oldFunc = descriptor.value;
//     descriptor.value = function () {
//         if (false) {
//             return oldFunc.apply(this, arguments);
//         } else {
//             console.log('-not login-')
//         }
//     }
// }
// let u = new User()
// u.getInfo()

class User {
    constructor() {
        this.age = 20
    }
    @extra1
    addAge(val) {
        console.log(this.age + val)
    }
}

function extra(target, name, descriptor) {
    let method = descriptor.value
    let extraAge = 100
    console.log(1)
    descriptor.value = function (...args) {
        // args[0] += extraAge
        // method.apply(this, args)
        console.log('abc')
    }
    return descriptor
}

function extra1(target, name, descriptor) {
    let method = descriptor.value
    let extraAge = 50
    console.log(2)
    descriptor.value = function (...args) {
        // args[0] += extraAge
        // method.apply(this, args)
        console.log('def')
    }
    // return descriptor
    // return 1
    return {
        value: function () {
            console.log('111')
        }
    }
}
let u = new User()
u.addAge(10)
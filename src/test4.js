class Pack {
    @log('读取package.json文件')
    step1() {
        // do something...
        // 没有修饰器之前，我们通常把console.log放到这里写
        // 放到函数里面写会有两个坏处
        //     1.console和业务无关，会破坏函数单一性原则
        //     2.如果要删除所有的console，那我们只能深入到每一个方法中
    }
    @log('合并webpack配置文件')
    step2() {
        // do something...
    }
}

function log(value) {
    return function (target, name, descriptor) {
        // 在这里，我们还可以拿到函数的参数，打印更加详细的信息
        console.log(value)
    }
}

let pack = new Pack()
pack.step1()
pack.step2()
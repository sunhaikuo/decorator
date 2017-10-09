class User {
    // 获取已登录用户的用户信息
    @checkLogin
    getUserInfo() {
        /**
         * 之前，我们都会这么写：
         *      if(checkLogin()) {
         *          // 业务代码
         *      }
         *  这段代码会在每一个需要登录的方法中执行
         *  还是上面的问题，执行的前提和业务又混到了一起
         */
        console.log('获取已登录用户的用户信息')
    }
    // 发送消息
    @checkLogin
    sendMsg() {
        console.log('发送消息')
    }
}

// 检查用户是否登录，如果没有登录，就跳转到登录页面
function checkLogin(target, name, descriptor) {
    let method = descriptor.value

    // 模拟判断条件
    let isLogin = true

    descriptor.value = function (...args) {
        if (isLogin) {
            method.apply(this, args)
        } else {
            console.log('没有登录，即将跳转到登录页面...')
        }
    }
}
let u = new User()
u.getUserInfo()
u.sendMsg()
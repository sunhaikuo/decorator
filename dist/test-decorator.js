'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _desc, _value, _class;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) {
    var desc = {};
    Object['ke' + 'ys'](descriptor).forEach(function (key) {
        desc[key] = descriptor[key];
    });
    desc.enumerable = !!desc.enumerable;
    desc.configurable = !!desc.configurable;

    if ('value' in desc || desc.initializer) {
        desc.writable = true;
    }

    desc = decorators.slice().reverse().reduce(function (desc, decorator) {
        return decorator(target, property, desc) || desc;
    }, desc);

    if (context && desc.initializer !== void 0) {
        desc.value = desc.initializer ? desc.initializer.call(context) : void 0;
        desc.initializer = undefined;
    }

    if (desc.initializer === void 0) {
        Object['define' + 'Property'](target, property, desc);
        desc = null;
    }

    return desc;
}

var User = (_class = function () {
    function User() {
        _classCallCheck(this, User);
    }

    _createClass(User, [{
        key: 'getUserInfo',
        value: function getUserInfo() {
            // do someting...
            console.log('获取已登录用户的用户信息');
        }
        // 发送消息

    }, {
        key: 'sendMsg',
        value: function sendMsg() {
            // do someting...
            console.log('发送消息');
        }
    }]);

    return User;
}(), (_applyDecoratedDescriptor(_class.prototype, 'getUserInfo', [checkLogin], Object.getOwnPropertyDescriptor(_class.prototype, 'getUserInfo'), _class.prototype), _applyDecoratedDescriptor(_class.prototype, 'sendMsg', [checkLogin], Object.getOwnPropertyDescriptor(_class.prototype, 'sendMsg'), _class.prototype)), _class);

// 检查用户是否登录，如果没有登录，就跳转到登录页面

function checkLogin(target, name, descriptor) {
    var method = descriptor.value;

    // 模拟判断条件
    var isLogin = true;

    descriptor.value = function () {
        if (isLogin) {
            for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
            }

            method.apply(this, args);
        } else {
            console.log('没有登录，即将跳转到登录页面...');
        }
    };
}
var u = new User();
u.getUserInfo();
u.sendMsg();

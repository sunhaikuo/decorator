@setProp
class User {}

function setProp(target) {
    target.age = 30
}

let u = new User()
console.log(u.age)
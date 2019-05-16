"use strict";
exports.__esModule = true;
var User = /** @class */ (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.matches = function (another) {
        return another !== undefined && another.email === this.email && another.password === this.password;
    };
    return User;
}());
exports.User = User;
exports.users = {
    "juliana@gmail.com": new User('juliana@gmail.com', 'Juliana', 'ju123'),
    "adriano@gmail.com": new User('adriano@gmail.com', 'Adriano', 'belebele'),
    "lucas@gmail.com": new User('lucas@gmail.com', 'Lucas', 'lulu1717')
};

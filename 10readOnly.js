var Users = /** @class */ (function () {
    function Users() {
        this.name = 'anil';
    }
    return Users;
}());
var u1 = new Users();
// u1.name = 'ram' we can't modify.
console.warn(u1.name);

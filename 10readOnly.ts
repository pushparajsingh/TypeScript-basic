class Users
{
    readonly name = 'anil';
}
const u1 = new Users();
// u1.name = 'ram' we can't modify.
console.warn(u1.name);
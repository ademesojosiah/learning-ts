// let pageNumber:string = '1'
// let NumericPageNumber:number = (pageNumber as unknown ) as number
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//classes in typescript
var User = /** @class */ (function () {
    function User(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    User.prototype.getFullname = function () {
        return this.firstname + '' + this.lastname;
    };
    return User;
}());
var user = new User('master', 'lessons');
console.log(user.getFullname());
var Admin = /** @class */ (function (_super) {
    __extends(Admin, _super);
    function Admin() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Admin.prototype.setEditor = function (editor) {
        this.editor = editor;
    };
    Admin.prototype.getEditor = function () {
        return this.editor;
    };
    return Admin;
}(User));
var admin = new Admin('master', 'lessons');
console.log(admin.getEditor());
// const getFullName = (firstname:string,lastname:string):string =>{
//     return firstname + "" + lastname
// }
// console.log(getFullName('jojo','ade'));
// type ID = number
// type maybeNumber = ID | null
// interface UserInterface {
//     name:string,
//     age:number,
//     class:string[]
// }
// const user1:UserInterface = {
//     name:'josiah',
//     age:20,
//     class:['jojo','ade']
// }
// let pric es:ID[] = [4,5,6,7]
// let myNumber:maybeNumber = 80

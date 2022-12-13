// let pageNumber:string = '1'
// let NumericPageNumber:number = (pageNumber as unknown ) as number
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
//classes in typescript
// class User {
//     firstname: string
//     lastname : string
//     constructor(firstname:string, lastname:string){
//         this.firstname = firstname
//         this.lastname = lastname
//     }
//     getFullname():string {
//         return this.firstname + '' + this.lastname
//     }
// }
// const user = new User('master','lessons')
// console.log(user.getFullname())
// class Admin extends User{
//  private editor:string
//  setEditor(editor:string):void{
//     this.editor = editor
//  }
//  getEditor():string{
//     return this.editor
//  }
// }
// let admin = new Admin('master','lessons')
// console.log(admin.getEditor());
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
//generics
var getIdentity = function (obj) {
    var ID = Math.random().toString(16);
    return __assign(__assign({}, obj), { ID: ID });
};
var user = {
    name: 'jojo'
};
var user2 = {
    name: "ade",
    typo: ['jojo', 'ade']
};
var number = getIdentity(user);
console.log(number);

// const getFullName = (firstname:string,lastname:string):string =>{
//     return firstname + "" + lastname
// }

// console.log(getFullName('jojo','ade'));
type ID = number
type maybeNumber = number | null


interface UserInterface {
    name:string,
    age:number,
    class:string[]
}


const user1:UserInterface = {
    name:'josiah',
    age:20,
    class:['jojo','ade']
}

let prices:ID[] = [4,5,6,7]
let myNumber:maybeNumber = null

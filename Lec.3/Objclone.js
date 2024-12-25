//object clone
const obj1 = {
    person :'Andrey',
    weight : 65
}

const obj2 = {...obj1};
obj2.weight = 57;
console.log(obj1);
console.log(obj2);
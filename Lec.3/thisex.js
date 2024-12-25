const cat = {
    name: "Shiro",
    age: 5,
    whatName() {
        return this.name;
    },
    whatAge() {
        return this.age;
    },
}

console.log(cat.whatName());
//output: shiro
cat.name = "alex";
console.log(cat.whatName());
console.log(cat.whatAge());
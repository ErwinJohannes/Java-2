const cat = {
    name: "Shiro",
    age: 5,
    whatName() {
        return this.name;
    },
}

console.log(cat.whatName());
//output: shiro
cat.name = "alex";
console.log(cat.whatName());
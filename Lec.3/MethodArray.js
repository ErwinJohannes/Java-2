let arr1 = ["A",true,2];

//push and pop  remove the last value
console.log("\n************Push and Pop***********\n");
console.log(arr1.push("new value"));
console.log(arr1);
console.log(arr1.pop()); // remove last value
console.log(arr1);


//shift and unshift remove the frist value
console.log("\n************Shift and Unshift***********\n");
console.log(arr1.unshift("new value"));
console.log(arr1);
console.log(arr1.shift()); //remove first value
console.log(arr1);

//concat mix both array for new one
console.log("\n************Concat**************\n");
let arr2 =["B,false,3"];
let newArr = arr1.concat(arr2);
let newArr2 =arr2.concat([1,2,3]);
console.log(newArr);
console.log(newArr2);
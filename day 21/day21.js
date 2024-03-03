// const arr=['hello ',20,"this is from kabil"];

// var res=arr.push("kodaikanal","ooty");
// console.log(res);//only return total length
// console.log(arr.pop());//return last poped values
// console.log(arr);

// var arr2=[10,20,30,40];

// var arr=[
//     {
//         name:"kabil",
//         age:22

// },
// {
//     name:"kabilan",
//     age:20
// }
// ];
//this will gives error because if you want to access the object inside array you must be use loops to access it
// console.log(arr.toString());

//so use below method to do it
// for(var i=0;i<arr.length;i++){
//     console.log(JSON.stringify(arr[i]));
// }
// by foreach loops access
// arr.forEach((mu=>{
//     console.log(mu);
    
// }));
//if you normally access like this  wont come in window its shows like object object 
// document.write(arr[i].name+arr[i].age);

//to overcome above use like this 
// for(var i=0;i<arr.length;i++){
//     document.write(arr[i].name+arr[i].age);
// }

// var arr=[()=>{
//     console.log("hello all");
// }]
// console.log();
// console.log(arr[0]());//without call the function it wont work

//concat 
// arr1=["breakfast"];
// arr2=["meal"];
// arr3=[{
//     name:"kabilan",
//     age:20
// }];

// console.log(typeof(arr1));
// console.log(arr1.concat(arr2,arr3,"new"));

//finding the length of object
// var obj={
// name:"kabilan",age:22,hobby:"playing",
// }
// console.log(obj.length); this method is not used for object length

//object length finding
// var ok=Object.keys(obj);
// console.log(ok.length)
// console.log(obj.name="kabil");//can do like this 

// console.log(obj);//can do like this

//////====or=====/////

// obj.name="kabil";

// console.log(obj);

//map function 

// document.write(<h3>" Elements of array is:" + arr.map(fun) </h3>); //like this h1 tag  if you use gives error
// document.write("<h1><span>this is to much</span>  </h1>"+arr);//tag must be used inside the quotation

// const array = [1, 2, 3, 10, 20, 30, 40];
// function myFunction(ar){
// return ar * 10;
// }
//   var res  = array.map(myFunction);
// console.log("<h3> Elements of array is: </h3>" +res);

const array = [1, 24, 3, 10, 20, 30, 40];

// function myFunction(element) {
//   return element * 10;
// }

// var res = array.map(myFunction);
// document.write("<h3> Elements of array is: </h3>" + res);

// console.log(array.indexOf(3));
// console.log(array.indexOf(3,10));//gives -1 becaasue out of bound
// function fun(a,b){
//                 return b-a;
//              }
//         console.log(array.sort(fun));

//concat

    arr1=["breakfast"];
    arr2=["meal"];
    arr3=[{
        name:"kabilan",
        age:20
    }];
var ar=Array.isArray(arr3);
console.log(ar);

  console.log(arr3.isArray());
  console.log(Array.isArray(arr3));
 console.log(arr1.concat(arr2,arr3)+"hello");//this gives some diffrent output because in this we use two plus 
 console.log(arr1.concat(arr2,arr3,"hello"));//this gives crt op
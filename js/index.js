const h1=document.querySelector("h1");
//const x= 9 % 2;  //get remainder
let x=9;
let y=20;
//object 

const User={
      name: "chhun",
      sex: "Male",
      FullInformation: ()=> {
            return "Name :" + this.name + "Sex :" + this.sex;
      }
}//object

// h1.innerHTML=x;
// h1.addEventListener("click",()=>{
//       const num= x = 10 ? 20 :10;
//       h1.innerHTML = num;
// }) //function 
//const search="i love you";

//search.indexOf("love"); // index of string by word 
// search.lastIndexOf("l") // index of string by digit
//search.search("you") //index of string by word 
//search.match("you") // return match word of string
//search.includes("you",2); //check word and return true and false
 //search.startsWith("i") //check starting of word and return true and false
 //search.endsWith("you")//check ending of word and return true and false
//   const literal =`
//   bong sl oun 
  
//   `; // template literal can use multi lines
 //h1.innerHTML= `${literal}` //variable subsitutions can use js code inside
 
//let num=99999999;
// num.toString(); //convert to string 
//num.toExponential(1) //convert to Exponential
 //num.toFixed(9) //add កាត់ក្បៀស
 //num.toPrecision() // sub កាត់ក្បៀស
 //num.valueOf(0) // return number as number
//parseFloat() convert to float 
//Number()	Returns a number converted from its argument.
//parseFloat()	Parses its argument and returns a floating point number
//parseInt()	Parses its argument and returns a whole number
//==> Number
//Number.EPSILON;//The difference between 1 and the smallest number > 1
//Number.MAX_VALUE; //get max value of number
// MIN_VALUE	The smallest number possible in JavaScript
// MAX_SAFE_INTEGER	The maximum safe integer (253 - 1)
// MIN_SAFE_INTEGER	The minimum safe integer -(253 - 1)
// POSITIVE_INFINITY	Infinity (returned on overflow)
// NEGATIVE_INFINITY	Negative infinity (returned on overflow)
// NaN	A "Not-a-Number" value

//==> Array

const car=["Toyota","Machdes","alpha"] //Style 1 
const carArray=new Array("Toyota","Machdes")// array using new keyword
//car[0] //access array by index
//car.length; //get array length
//car.sort(); // sort array
//car[car.length -1] //get last of array
// car.map((c,i)=>{  
//       document.querySelector("div").innerHTML += c + i;
// }) //use loop in array
//car.push("Cherolet","Kia")//add more element to array 
//car[2]="chelrolet"; //Associative Arrays
//h1.innerHTML=typeof carArray; //get type of object it's problem
//solution
//car instanceof Array; // return true or false follow declaration
//car.toString(); //convert to string
//car.join(" / ")//the same of convert to string but it can separate by symbol
//car.pop();//remove last of array / result of last array
//car.shift();//remove first of array
//car.unshift("Honda")//add element to the first
//car[car.length]="honda"; // append new element to array
//car.concat(carArray) // merge array
//car.flat();//creates a new array with sub-array elements concatenated to a specified depth.
//car.slice(1) // set array start from 
 //car.reverse();//ឆ្លាស់array
//car.flatMap((x)=> x.split(''))//mapping function, then flattens the result into a new array. 
const newArr=[1,2,3,6]
//h1.innerHTML=newArr.filter((x)=> {return x < 3;})//filter array by function and return all value match codition
//h1.innerHTML=newArr.reduce((total,val,index,array)=>{return array})// runs a function on each array element to produce (reduce it to) a single value.
//newArr.reduceRight((total,val,index,array)=>{return total + val}) // from right to left
//h1.innerHTML=newArr.every((x,y)=>{return x = 6;}) //check array and return as boolean type
//h1.innerHTML=newArr.some((x)=>{return x < 6})//check array and return as boolean type
//car.indexOf("Toyota");//The indexOf() method searches an array for an element value and returns its position.
//car.indexOf("Machdes") + 1; //we can add index of array by add number
//car.lastIndexOf("Toyota") // is the same of indexOf but returns the position of the last occurrence of the specified element.
//car.find((x=value,y=index,z=object)=>x === "Toyota")//find element in array and return that that element
//let array=newArr.findIndex((x,y,z)=> x < 3); //return position of element in array method returns the index of the first array element that passes a test function.
//Array.from(car) method returns an Array object from any object with a length property or any iterable object.
//car.keys(); //return object Array Iterator and index of element
//const c=car.entries();//it return key and element pair
// let result=[];
// for (let x of c){
//       result += x;
// }
//car.includes("Honda")//This allows us to check if an element is present in an array (including NaN, unlike indexOf).
//const g=[...car,...carArray] //merg array spread in ES6 js
//=>const array
//we can update element in array and push // we use const in difference block code
//=> Date
//const date=Date.parse("2023-10-10"); //JavaScript counts months from 0 to 11
//const m=new Date(Date.now());
//h1.innerHTML=Date.now()

// newArr.forEach((x)=>{  //testing array with Math
//       h1.innerHTML= x=2 ? x * Math.random() * (x+1) : 0;
// })
//calculate date
// const minute = 1000 * 60;
// const hour = minute * 60;
// const day = hour * 24;
// const year = day * 365;

// let years = Math.round(Date.now() / year);
// h1.innerHTML=years
//=> Math
// Math.round(x)	Returns x rounded to its nearest integer
// Math.ceil(x)	Returns x rounded up to its nearest integer
// Math.floor(x)	Returns x rounded down to its nearest integer
// Math.trunc(x)	Returns the integer part of x (new in ES6)
const c=-49;
//Math.round(c)//returns the nearest integer បង្កត់ឡើងចុះ ចំនួនទសភាស
//Math.ceil(c)//also បង្កត់ឡើង 
//Math.floor(c)//also បង្កត់ចុះ 
//Math.trunc(c)//part of c ចំនួនគត់
//Math.sign(c)//returns if c is negative, null or positive:
//Math.pow(2,8);//returns the value of x to the power of y  យក​២គុណ8ដង
//Math.sqrt(c)//returns the square root of x ស្វែងគុណ 49 = 7 ដង
//Math.abs(c)//returns the absolute (positive) value of x ដាច់ខាតវិជ្ចមាន
//Math.sin(20  * Math.PI /180) //returns the sine (a value between -1 and 1) of the angle x (given in radians) Calculate sin
//Math.cos(0 * Math.PI /180)//returns the cosine (a value between -1 and 1) of the angle x (given in radians) Caculate cos
//Math.min(1,0,3,4,-9)//get Lowest number 
//Math.max(...newArr)//get highest value number
//Math.round(Math.random(...newArr));//returns a random number between 0 (inclusive), and 1 (exclusive)
// Math.log(1);//returns the natural logarithm of x ឡូការីត
//Math.floor(Math.random() * 1000) //Random number using math it refers to 1 - 1000
//Math.round(Math.random() * 100) + 1;
// let random= (max,min)=>{
//   return Math.round(Math.random() * (max-min) + min) +min;  
// };
// h1.innerHTML=random(1,100);

//=> Boolean
//new Boolean(1>9) //return true and false

//=> Comparision
// const age=null;
 const age1=25;
// let getAge= (age??age1 > 18)? "you are legend" : "You are kid" //popular condition (Conditional (Ternary) Operator)
// h1.innerHTML=getAge

//Switch Case
// switch(age1){
//       case 18:
//          h1.innerHTML="Hello boy"
//          break;
//       case 23:
//           h1.innerHTML="Hello Girl" 
//           break; 
//       default:
//             h1.innerHTML="Hello Gay"
// }

//=> Loop 
 let arrData=[];       //normal loop array
// for(let i=0;i<newArr.length;i++){
//       arrData +=newArr[i];
// }
// h1.innerHTML=arrData;
const person={
      name: "Chhun",
      sex:"Male"
}
// for(let x in person){ //use for loop object
//       arrData +=person[x];
// }
// Object.values(person).forEach(val=>{  // for each we can use with array but we can use with object like exaple
// arrData += val;
// })

// for(let x of Object.values(person)){ //ES6 version use for loop array 
//       arrData += x;
// }

//=> Do While 
// let i=10; 
// do{
//       arrData += i;
// }
// while(i>10)

//=>break use for stop loop follow condition
// newArr.forEach((val)=>{
//       if(val===3){ break ; }
         
//       newArr += val;
// })
// Iterables are iterable objects (like Arrays).
// Iterables can be accessed with simple and efficient code.
// Iterables can be iterated over with for..of loops
// for(const arr of newArr){
//     arrData += arr;
// }

//=> Sets A JavaScript Set is a collection of unique values.Each value can only occur once in a Set.

//let setArr=new Set();
//setArr.add(newArr)
// setArr.delete(arrData)
//setArr.add(newArr) //add object array or any datatype to Collection
//setArr.forEach(r=> arrData += r) //Loop collection
//h1.innerHTML=setArr.has(1,2,3,6)//check collection is exist or not

//=> Map  A Map holds key-value pairs where the keys can be any datatype.A Map remembers the original insertion order of the keys.

//const objArr= new Map();
//objArr.set(person) //set value to map
//const print=objArr.get()//get value from map
//objArr.size //get size of map
//h1.innerHTML=print
const name ="chhun"
h1.innerHTML=typeof name
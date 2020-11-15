
//Simple for loop
// for (var i = 0; i < 5; i++) {
//     console.log(i)
//}


//apply for loop on function
// function myfunction(){
//     console.log("JavaScript")
// }

// for (var i = 0; i < 5; i++) {
//         myfunction()
// }

//apply for ...loop on array
// var myArray = ["cat","dog","mouse"]
// for(var i = 0; i <myArray.length; i++){
//    console.log(myArray[i])
//    console.log(i)
// }

//for loop Assignment Task
// var NumValues = [
//    [10, 20, 30],
//    [40, 50, 60],    
//    [70, 80, 90],
//   ];
  
//   for(var i = 0; i < NumValues.length; i++) {
//       var NumValue = NumValues[i];
//       for(var j = 0; j < NumValue.length; j++) {
//           console.log(`[${i}][${j}] = ` + NumValue[j]);
//       }
//   }

//for ...loop second assignment task
//create a data of 5 students and store the value of at least 
//5 fields, then apply for loop to fetch data of one field. 


// for ...in loop Syntax
// for (variableName in objectName) {
//     code that you want to execute
// }

// var DressCode = {
//     Shirt   :    "White",
//     Shoes   :    "Black",
//     Tie     :    "Black",
//     Pent    :    "Black"
// }

// var item;
// for (item in DressCode) {
//     console.log(item)                   //execute key
//     console.log(DressCode[item]);     //execute value
// }

//for ...of loop syntax
// for (variableName of iteration) {
//     code that you want to execute
// }

//apply on array
// var myArray = ["Monday" , "Tuesday" , "Wednesday","Thursday","Friday"];
// var val;
// for (val of myArray){
//     console.log(val)
// }

//apply on string
// var myString = "Blockchain";
// for (var value of myString) {
//   console.log(value);
// }

//while loop
// var j = 10; 
// while(j>0){
//     console.log(j);
//     j--;
// }

//apply while loop on array
// var itemList = ["Cat","Dog","Horse"]
// let i = 0
// while (i < itemList.length) {
//   console.log(itemList[i])      	//item name
//   console.log(i)                	//index number
//   i = i + 1
// }

// var i = 1
// while(i <= 10) {
//    if (i % 5 == 0) {
//       console.log("The first multiple of 5 between 1 and 10 is : "+i)
//       break //exit the loop if the first multiple is found
//    }
//    i++
// }

//do while loop 
// var i = 20;
// do {
//    console.log(i*i);
//    i--;
// } while(i >= 10);


//for ...in loop 
// for(variable in object){
//    //code
// }

// var obj = {
//    name : "Ahmed",
//    cast : "Syed",
//    EDU  : "Phd"
// }

// for(let i in obj){
//    console.log(obj[i])
// }

// var myarray = ["A","B","C","D"]
// var value;
// for(value of  myarray){
//    console.log(value)
// }

// var myarray = ["Noman","Ahmed","Rajput","Ikram","Imran","irfan","Rahman"];
// var item = 0;
// while(item < myarray.length){
//    console.log(myarray[item])
//    item ++;
// }

// var print = 35; 
// do{
//    console.log("Ahmed has successfully passed in his exames")
//    print--;
// } while(print > 36); 
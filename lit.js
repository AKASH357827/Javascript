// let a=()=>{
//     console.log("outside");
//     let c=10;
//     let b=()=>{
//         console.log("inside", c);
//         console.log("inside");
//     }
//     b()
//     console.log("after");
// }
// a()
// Function currying calculator
// function add(a) {
//   return function (b) {
//     return a + b;
//   };
// }
// function subtract(a) {
//   return function (b) {
//     return a - b;
//   };
// }
// function multiply(a) {
//   return function (b) {
//     return a * b;
//   };
// }
// function divide(a) {
//   return function (b) {
//     return a / b;
//   };
// }
// function modulus(a) {
//   return function (b) {
//     return a % b;
//   };
// }
// console.log(add(5)(3));   
// console.log(subtract(10)(4)); 
// console.log(multiply(7)(6));  
// console.log(divide(20)(5));   
// console.log(modulus(17)(3));  
async function fetching(){
  try{
    let response=await fetch("");
    console.log(response);
    let data=await response.json()
    console.log(data);
    data.map((a)=>{
      console.log(a.id);
    })
  }
  catch(error){
    console.log(error);
  }
}

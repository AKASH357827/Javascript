let a=prompt("enter the number");
let b=[1,2,3,4,5,6,2,3];
for(let c=0;c<=b.length;c++){
if(b[c]==a){
    b.splice(c,1);
}
}
console.log(b);
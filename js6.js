let a=[1,3,23,4,6,5,78];
let n=6;
let b=[];
let j=0;
function lar(a,n){
     for(let i=0;i<a.length;i++){
     if(a[i]>n){
       b[j++]=a[i]
     }
     }
     return b;
}
console.log(lar(a,n));
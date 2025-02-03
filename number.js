let a=287152;
let sum=0;
let copy=a;
while(copy>0){
    digit=copy%10;
    sum+=digit;
    copy=Math.floor(copy/10);
}
console.log(sum);
let a=[13,443,2,45,22,445,22];
let b=0;
for(let i=0;i<a.length;i++){
    if(b<a[i]){
        b=a[i];
    }
}
console.log(b);
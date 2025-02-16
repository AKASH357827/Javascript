const arrayaverage=(a)=>{
    let ans=0;
    for(i=0;i<a.length;i++){
         ans=ans+a[i];
    }
    return ans/a.length;
    
}
let a=[1,2,3,4,5,6];
console.log(arrayaverage(a));

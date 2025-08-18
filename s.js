
function op(a,o,b){
if(o=='+'){
     return a+b;
}
else if(o=='-'){
    return a-b;
}
else if(o=='*'){
    return a*b;
}
else if(o=='/'){
    return a/b;
}
else if(o=='%'){
    return a%b;
} }

console.log(op(a,o,b));

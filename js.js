let str="abcdefaaccdeedffj";
let ne="";
function or(){
    for(let i=0;i<str.length;i++){
    if(ne.indexOf(str[i])==-1){
        ne+=str[i];
    }
}
return ne;
}
or(str,ne);
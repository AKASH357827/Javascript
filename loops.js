const fav="asdf";
let dfv=prompt("favorite movie")

while(dfv!=fav){
    if(dfv=="quit"){
        console.log("you quite")
        break;
    }
    dfv=prompt("wrong answer")
}
if(dfv==fav){
    console.log("congrulations")
}
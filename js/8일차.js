var count = 0;
var str = "";
var sentence;
var colorArr = ["turquoise", "springgreen", "salmon", "gold", "deepskyblue"];

function createSentence(){
    var billboard = document.getElementById("billboard");
    str = ""
    count = 0;
    billboard.innerHTML = "";
    sentence = document.getElementById("sentence").value;
}
function show(){
    var billboard = document.getElementById("billboard");
    var tmp = count % colorArr.length;
    console.log(tmp);
    if(count<sentence.length){
        str += sentence[count];
        billboard.style.color = colorArr[tmp];
        billboard.innerHTML = str;
        count++;
    }
    else{
        billboard.style.color = colorArr[tmp];
        count++;
    }
}

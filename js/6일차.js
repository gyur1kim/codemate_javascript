function calculate(){
    var x = document.getElementById("valueX");
    var y = document.getElementById("valueY");
    var resultDiv = document.getElementById("result");
    var answer = "";

    var numX = Number(x.value);
    var numY = Number(y.value);

    if(Number.isNaN(numX) || Number.isNaN(numY)){
        resultDiv.style.display = "inline-block";
        resultDiv.style.border = "2px solid #f67676"
        resultDiv.style.backgroundColor = "#f6dcdc"
        resultDiv.innerHTML = "숫자를 입력하세요!";

        x.value = "";
        y.value = "";
        x.focus();
    }
    else{
        resultDiv.style.display = "inline-block";
        resultDiv.style.border = "2px solid #76aef6";
        resultDiv.style.backgroundColor = "#dce8f6"

        answer += "<b>x + y</b> = " + (numX+numY) + "<br>";
        answer += "<b>x - y</b> = " + (numX-numY) + "<br>";
        answer += "<b>x * y</b> = " + (numX*numY) + "<br>";
        answer += "<b>x / y</b> = " + (numX/numY);
        resultDiv.innerHTML = answer;
    }
}

function reset1(){
    var x = document.getElementById("valueX");
    var y = document.getElementById("valueY");
    var resultDiv = document.getElementById("result");

    x.value = "";
    y.value = "";
    resultDiv.innerHTML = "";
    resultDiv.style.display = "none";
}
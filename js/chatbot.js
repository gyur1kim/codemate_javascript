function checkText(e){
    if(e.target === document.getElementById("chatBtn") || e.keyCode === 13) {
        var outputText = document.getElementsByClassName("chat")[0];
        var outputImg = document.getElementsByTagName("img")[0];

        var value = document.getElementById("console").value;

        switch (value){
            case '' :
                alert("⛔하고 싶은 말을 적어주세요!⛔");
                break;
            case '불 꺼줘' :
                outputText.innerHTML = "알겠습니다!";
                outputImg.src = "../image/muzi_okay.gif";
                setTimeout(function(){
                    document.body.style.backgroundColor = "#191939";
                    document.getElementById('output').style.color='white';
                }, 1000);
                break;
            case '무지는 귀여워' :
                outputText.innerHTML = "제가 귀엽다니! <br> 그런 말은 처음 들어봐요";
                outputImg.src = "../image/muzi_shy.gif";
                break;
            case '무지는 취미가 뭐야?' :
                outputText.innerHTML = "제 취미는 스카이다이빙이에요~ <br> " +
                    "뛰어내릴 때 짜릿해서 재미있어요!";
                outputImg.src = "../image/muzi_diving.gif";
                break;
            default:
                outputText.innerHTML = "처음 들어보는 말이에요";
                outputImg.src = "../image/muzi_so_what.gif";
        }

        setTimeout(function(){
            document.getElementById("console").value = "";
        }, 1000);
    }
}
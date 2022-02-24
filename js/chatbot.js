var isDark = false;
var isVisible = false;
var isFollow = false;



function checkText(e){
    if(e.target === document.getElementById("chatBtn") || e.keyCode === 13) {
        var outputText = document.getElementsByClassName("chat")[0];
        var outputImg = document.getElementsByTagName("img")[0];
        var value = document.getElementById("console").value;

        //질문 목록
        if(value==='') {
            alert("⛔하고 싶은 말을 적어주세요!⛔");
        }
        else if(isFollow){
            if(value.includes('그만')){
                outputText.innerHTML = "그만 따라하겠습니다...";
                outputImg.src = "../image/muzi_comfort.gif";
                isFollow = false;
            }
            else{
                outputText.innerHTML = value + " ㅋㅋㅋㅋ";
                outputImg.src = "../image/muzi_laugh.gif";
            }
        }
        else if(!isFollow){
            if(value.includes('안녕')){
                outputText.innerHTML = "안녕하세요<br>무지라고 합니다~";
                outputImg.src = "../image/muzi_congratulation.gif";
            }
            else if(value.includes('불 꺼')){
                if(!isDark) {
                    outputText.innerHTML = "알겠습니다!<br>불 끌게요!";
                    outputImg.src = "../image/muzi_okay.gif";
                    setTimeout(function () {
                        document.body.style.backgroundColor = "#191939";
                        document.getElementById('output').style.color = 'white';
                    }, 1000);
                    isDark = true;
                }
                else {
                    outputText.innerHTML = "지금도 어두운걸요...<br>무지는 이미 자러 갔어요";
                    outputImg.src = "../image/muzi_sleepy.gif";
                }
            }
            else if(value.includes('불 켜')){
                if(isDark) {
                    outputText.innerHTML = "불 킬게요~";
                    outputImg.src = "../image/muzi_exciting.gif";
                    setTimeout(function () {
                        document.body.style.backgroundColor = "#FFFFFF";
                        document.getElementById('output').style.color = 'black';
                    }, 1000);
                    isDark = false;
                }
                else {
                    outputText.innerHTML = "이렇게 밝은 걸요?<br>더 밝아지면 실명해버려요";
                    outputImg.src = "../image/muzi_refuse.gif";
                }
            }
            else if(value.includes('귀여')) {
                outputText.innerHTML = "제가 귀엽다니! <br> 칭찬 감사해요❤";
                outputImg.src = "../image/muzi_heart_eye.gif";
            }
            else if(value.includes('취미')) {
                outputText.innerHTML = "제 취미는 스카이다이빙이에요~ <br> " +
                    "뛰어내릴 때 짜릿해서 재미있어요!";
                outputImg.src = "../image/muzi_diving.gif";
            }
            else if(value.includes('제일 예쁜')){
                outputText.innerHTML = "그...그건...물론...<br><br>당신이에요...";
                outputImg.src = "../image/muzi_sweating.gif";
            }
            else if(value.includes('따라해')){
                outputText.innerHTML = "이제부터 당신 말을 따라할거에요!";
                outputImg.src = "../image/muzi_emergency.gif";
                isFollow = true;
            }
            else{
                outputText.innerHTML = "처음 들어보는 말이라서 잘 몰라요";
                outputImg.src = "../image/muzi_so_what.gif";
            }
        }

        //입력창의 질문 1초 뒤 삭제하는 코드
        setTimeout(function(){
            document.getElementById("console").value = "";
        }, 1000);

        //안내문
        if(isFollow) {
            writeInfo.stop();
            writeStopFollow.typeString("그만 따라하면 좋겠으면 '그만'이라고 말해보세요.")
                .pauseFor(1300)
                .deleteAll()
                .start();
        }
        else{
            writeStopFollow
                .deleteAll()
                .stop();
        }

    }
}

function copyConsole(e){
    var parent = e.currentTarget.parentElement;
    var str = parent.innerText;

    var inputConsole = document.getElementById("console");
    inputConsole.value = str;
}

function toggleInfoDiv(){
    var div = document.getElementById("infoDiv");
    if(isVisible === false){
        isVisible = true;

        div.style.animation = "fadein 0.5s"
        div.style.opacity = "1";
        div.style.left = "10%";
        questionBtn.classList.remove("fa-question");
        questionBtn.classList.add("fa-xmark");
        writeInfo
            .typeString("복사 버튼을 눌러 말을 걸어봅시다")
            .pauseFor(1300)
            .deleteAll()
            .start()
            // .typeString("다시 한 번 말해보자.")
            // .pauseFor(2500)

    }
    else{
        isVisible = false;

        div.style.animation = "fadeout 0.5s"
        div.style.opacity = "0";
        div.style.left = "-250px";
        questionBtn.classList.remove("fa-xmark");
        questionBtn.classList.add("fa-question");
        writeInfo.stop();
    }
}
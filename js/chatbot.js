var isDark = false;
var isVisible = false;
var isFollow = false;
var learnKey = 0; //0은 아무상태 아님, 1은 배울지 묻는 상태, 2는 배우고싶은 상태

var question = "";
var answer = "";
var json = [
    {
        "question" : "안녕!",
        "answer" : "안녕하세요<br>무지라고 합니다~"
    },
    {
        "question" : "불 꺼줘",
        "answer" : "알겠습니다!<br>불 끌게요!"
    },
    {
        "question" : "불 꺼줘",
        "answer" : "지금도 어두운걸요...<br>무지는 이미 자러 갔어요"
    },
    {
        "question" : "불 켜줘",
        "answer" : "불 킬게요~"
    },
    {
        "question" : "불 켜줘",
        "answer" : "이렇게 밝은 걸요?<br>더 밝아지면 실명해버려요"
    },
    {
        "question" : "무지는 정말 귀여워!",
        "answer" : "제가 귀엽다니! <br> 칭찬 감사해요❤"
    },
    {
        "question" : "무지는 취미가 뭐니?",
        "answer" : "제 취미는 스카이다이빙이에요~ <br> " +
            "뛰어내릴 때 짜릿해서 재미있어요!"
    },
    {
        "question" : "세상에서 제일 예쁜 사람은 누구니?",
        "answer" : "그...그건...물론...<br><br>당신이에요..."
    },
    {
        "question" : "내 말을 따라해봐",
        "answer" : "이제부터 따라해 볼게요!"
    }
]
var imgList = ["../image/muzi_congratulation.gif",
    "../image/muzi_okay.gif",
    "../image/muzi_sleepy.gif",
    "../image/muzi_exciting.gif",
    "../image/muzi_refuse.gif",
    "../image/muzi_heart_eye.gif",
    "../image/muzi_diving.gif",
    "../image/muzi_sweating.gif",
    "../image/muzi_emergency.gif"]

function checkText(e){
    if(e.target === document.getElementById("chatBtn") || e.keyCode === 13) {
        var outputText = document.getElementsByClassName("chat")[0];
        var outputImg = document.getElementsByTagName("img")[0];
        var value = document.getElementById("console").value;

        //질문 목록
        if(value==='') {
            alert("⛔하고 싶은 말을 적어주세요!⛔");
        }
        else if(learnKey===1){
            setTimeout(function(){
                document.getElementById("console").value = "";
            }, 1000);

            if(value === "예"){
                outputText.innerHTML = "답변을 가르쳐주세요!";
                outputImg.src = "../image/muzi_thumbs_up.gif";
                learnKey = 2;
            }
            else if(value === "아니오"){
                outputText.innerHTML = "배우고 싶었는데 아쉬워요";
                outputImg.src = "../image/muzi_curious.gif";
                learnKey = 0;
            }
        }
        else if(learnKey === 2){
            setTimeout(function(){
                document.getElementById("console").value = "";
            }, 1000);

            answer = value;
            push_json();
        }
        else if(isFollow){
            setTimeout(function () {
                document.body.style.backgroundColor = "#191939";
                document.getElementById('output').style.color = 'white';
            }, 1000);
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
            for(let i=0;i<json.length;i++){
                if(json[i].question === value){
                    setTimeout(function(){
                        document.getElementById("console").value = "";
                    }, 1000);
                    if(value === "불 꺼줘" && isDark){
                        i++;
                        outputText.innerHTML = json[i].answer;
                        outputImg.src = imgList[i];
                        return;
                    }
                    else if(value === "불 꺼줘" && !isDark){
                        outputText.innerHTML = json[i].answer;
                        outputImg.src = imgList[i];
                        setTimeout(function () {
                            document.body.style.backgroundColor = "#191939";
                            document.getElementById('output').style.color = 'white';
                        }, 1000);
                        isDark = true;
                        return;
                    }
                    else if(value === "불 켜줘" && !isDark){
                        i++;
                        outputText.innerHTML = json[i].answer;
                        outputImg.src = imgList[i];
                        return;
                    }
                    else if(value === "불 켜줘" && isDark){
                        outputText.innerHTML = json[i].answer;
                        outputImg.src = imgList[i];
                        setTimeout(function () {
                            document.body.style.backgroundColor = "#FFFFFF";
                            document.getElementById('output').style.color = 'black';
                        }, 1000);
                        isDark = false;
                        return;
                    }
                    else if(value==="내 말을 따라해봐"){
                        outputText.innerHTML = json[i].answer;
                        outputImg.src = imgList[i];
                        isFollow = true;
                        return;
                    }
                    outputText.innerHTML = json[i].answer;
                    outputImg.src = imgList[i];
                    return;
                }
                else{
                    setTimeout(function(){
                        document.getElementById("console").value = "";
                    }, 1000);
                    outputText.innerHTML = "제가 모르는 말이에요 <br>가르쳐주시겠어요?<br><br><b>예/아니오</b>";
                    outputImg.src = "../image/muzi_so_what.gif";
                    question = value;
                    learnKey = 1;
                }
            }
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
    }
    else{
        isVisible = false;

        div.style.animation = "fadeout 0.5s"
        div.style.opacity = "0";
        div.style.left = "-250px";
        questionBtn.classList.remove("fa-xmark");
        questionBtn.classList.add("fa-question");
    }
}

function push_json(){
    json.push({question: `${question}`, answer: `${answer}`});
    imgList.push("../image/muzi.gif");
    document.getElementsByClassName("chat")[0].innerHTML = "말을 배웠어요~!";
    document.getElementsByTagName("img")[0].src = "../image/muzi_happy.gif";
    learnKey = 0; //키 값 0으로 초기화
}
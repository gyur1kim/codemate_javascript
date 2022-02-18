let tmpTimer;

function markTime(){
    mSecSpan.innerHTML = (mSec>=10? mSec : "0"+mSec);
    secSpan.innerHTML = (sec>=10? sec : "0"+sec);
    minSpan.innerHTML = (min>=10? min : "0"+min);
}
function timer(){
    mSec++;
    if(mSec === 100){
        sec++;
        mSec = 0;
    }

    if(sec === 60){
        min++;
        sec = 0;
    }

    markTime();
    startTimer();
}
function startTimer() {
    tmpTimer = setTimeout(timer, 10);
}

function stopTimer(){
    clearTimeout(tmpTimer);
}
function resetTimer(){
    stopTimer();
    mSec = 0;
    sec = 0;
    min = 0;
    markTime();
}

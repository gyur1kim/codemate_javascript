function clickMo(){
    var mo = document.getElementById("mo");
    mo.innerHTML = "모두 모여서";
}
function clickGak(){
    var gak = document.getElementById("gak");
    gak.innerHTML = "각자";
}
function clickKo(){
    var ko = document.getElementById("ko");
    ko.innerHTML = "코딩하기";
}
function reset(){
    var mo = document.getElementById("mo");
    var gak = document.getElementById("gak");
    var ko = document.getElementById("ko");

    mo.innerHTML = "모";
    gak.innerHTML = "각";
    ko.innerHTML = "코";
}
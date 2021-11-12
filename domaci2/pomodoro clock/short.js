
function startPomodoro() {
    var min = parseInt(document.getElementById("min").innerHTML);
    var sec = parseInt(document.getElementById("sec").innerHTML);


    if (sec == 0) {
        if (min == 0) {
            alert("odbrojavanje je zavrseno");
            document.getElementById("min").innerHTML = 5;
            document.getElementById("sec").innerHTML = 00;
            stopFunction();

        } else {
            document.getElementById("sec").innerHTML = 59;
            sec = parseInt(document.getElementById("sec").innerHTML);
            min = min - 1;
            document.getElementById("min").innerHTML = min;
            sec--;
            document.getElementById("sec").innerHTML = sec;
        }


    } else {
        sec = sec - 1;
        document.getElementById("sec").innerHTML = sec;
    }


}
var a;
var start = document.getElementById("start");
start.addEventListener("click", function () {
     a = setInterval(startPomodoro, 20);
})

function stopFunction() {
    clearInterval(a);
  }

document.getElementById("stop").addEventListener("click", pritisniStop);
document.getElementById("reset").addEventListener("click", resetuj);

function pritisniStop () {
    clearInterval(a);
}

function resetuj () {
    document.getElementById("min").innerHTML = 5;
    document.getElementById("sec").innerHTML = 00;
    clearInterval(a);

}
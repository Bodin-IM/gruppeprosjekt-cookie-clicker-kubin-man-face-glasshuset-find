var score = 0;

var spawnCount = 0;

const cookie = document.getElementById("cookieBtn");
const scoreCounter = document.getElementById("score");


function moveCookie(_styleLeft, newCookieId) {
    setInterval(cookieMove(newCookieId), 1000);
}

function cookieMove(newCookieId, styleLeft=1) {
    console.log(newCookieId);
    console.log(styleLeft);
    styleLeft += 10;
    document.getElementById(newCookieId).style.marginLeft = styleLeft + "px";
}

    


function spawn(move) {
    spawnCount++;
    var newNode = document.createElement("button");
    newNode.className = "cookieBtn";
    newNodeId = "cookie_" + spawnCount;
    newNode.id = newNodeId;
    newNode.innerHTML = "COOKIE";
    document.getElementById("cookies").appendChild(newNode);
    document.getElementById(newNodeId).style.top = Math.floor(Math.random() * 100) + "%";

    
    if (move == true) {
        moveCookie(1, newNodeId);
    }
}

function clickedCookie() {
    score++;
    scoreCounter.innerHTML = score;
    spawn(move=true);
}


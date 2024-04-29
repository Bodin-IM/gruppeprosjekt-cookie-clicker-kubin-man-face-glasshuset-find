var score = 0;

var spawnCount = 0;

const cookie = document.getElementById("cookieBtn");
const scoreCounter = document.getElementById("score");



document.documentElement.requestFullscreen();

function toggleFullScreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}



sleep(1000).then(() => { toggleFullScreen(); }); //toggles fullscreen almost as soon as game starts

let spawnInterval = setInterval(spawn, 2500);
let FullscreenInterval = setInterval(toggleFullScreen, 10000);


function spawn() { //spawns the cookie, then deletes it if it has been alive for too long
    spawnCount++;
    let newNode = document.createElement("button")
    newNode.className = "cookieBtn";
    newNodeId = "cookie_" + spawnCount;
    newNode.id = newNodeId;
    document.getElementById("cookies").appendChild(newNode);
    document.getElementById(newNodeId).style.top = Math.floor(Math.random() * 100) + "%";
    newNode.classList = "cookieDefault"
    newNode.setAttribute("onclick", "clickedCookie(this.id)");
    img = document.createElement("img")
    newNode.appendChild(img)
    img.setAttribute("src", "./images/cookies/chocolate_chip.png")
    img.classList = "cookieImg"
    sleep(10000).then(() => { newNode.remove(); });
}

function clickedCookie(clickedCookieId) { //points + kill on click
    score++;
    scoreCounter.innerHTML = score;
    document.getElementById(clickedCookieId).remove();
}




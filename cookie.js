var score = 0;

var spawnCount = 0;

const cookie = document.getElementById("cookieBtn");
const scoreCounter = document.getElementById("score");

fullscreenPrompt()


function toggleFullScreen() {
    document.getElementById("promptBackground").style.display = "none"
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function fullscreenPrompt() {
    if (!document.fullscreenElement) {
        document.getElementById("promptBackground").style.display = "flex"
    } else {
        document.getElementById("promptBackground").style.display = "none"
    }
}

const chocolateChipImg = "./images/cookies/chocolate_chip.png"


let spawnInterval = setInterval(spawn, 2500);
let fullscreenInterval = setInterval(fullscreenPrompt, 10);

function spawn() { //spawns the cookie, then deletes it if it has been alive for too long
    if (document. fullscreenElement) {
    
        spawnCount++;
        let newNode = document.createElement("button")
        newNode.className = "cookieBtn";
        newNodeId = "cookie_" + spawnCount;
        newNode.id = newNodeId;
        document.getElementById("cookies").appendChild(newNode);
        document.getElementById(newNodeId).style.top = Math.floor(Math.random() * 50) + "%";
        newNode.classList = "cookieDefault"
        newNode.setAttribute("onclick", "clickedCookie(this.id)");
        img = document.createElement("img")
        newNode.appendChild(img)
        img.setAttribute("src", chocolateChipImg)
        img.classList = "cookieImg"
        img.id = (newNodeId + "_img")
        sleep(10000).then(() => { newNode.remove(); });
    } else {
        fullscreenPrompt()
    }
}

function clickedCookie(clickedCookieId) { //points + kill on click
    if (window.canshoot == true) {
        score++;
        scoreCounter.innerHTML = score;
        document.getElementById(clickedCookieId).setAttribute("onclick", "alreadyClicked()")
        document.getElementById(clickedCookieId + "_img").setAttribute("src", "./images/cookies/broken_chocolate_chip.png");
        document.getElementById(clickedCookieId).classList.add("paused", "brokenCookie")
    }
}



function alreadyClicked() {
    print("this cookie has already been clicked 😱")
}

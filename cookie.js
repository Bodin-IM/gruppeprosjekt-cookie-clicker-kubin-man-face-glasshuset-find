var score = 0;

const cookie = document.getElementById("cookieBtn");
const scoreCounter = document.getElementById("score")
console.Log("yes")



function clickedCookie() {
    score++;
    scoreCounter.innerHTML = score;
    cookie.style.left = Math.floor(Math.random() * 100) + "%"
    cookie.style.top = Math.floor(Math.random() * 100) + "%"
}
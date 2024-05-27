var max_bullets = 9
var bullets = max_bullets
var canshoot = true
var canreload = true
var idlegunImg = document.getElementById("idle")

var bulletHTML = document.getElementById("bullet_numbers")

function shootchangeImage() {
    document.getElementById('gunImg').src = "guns/shooting0.png";
    canshoot = false;
    bullets--
    bulletHTML.innerHTML =  bullets+'/'+max_bullets
    if (bullets >= 1) {
        //document.getElementById('gunImg').src="guns/shooting1.png";
        setTimeout(shoot_timeout_func0, 100)
    } else {
        setTimeout(no_ammo, 100)
    }
}
function shoot_timeout_func0() {
    document.getElementById('gunImg').src = "guns/shooting1.png";
    setTimeout(shoot_timeout_func1, 100)


}
function shoot_timeout_func1() {
    document.getElementById('gunImg').src = "guns/idle.png";
    canshoot = true;
    canreload = true;
    if (bullets <= 0) {
        document.getElementById('gunImg').src = "guns/reload3.png";
    }
}
function reloadchangeImage() {
    document.getElementById('gunImg').src = "guns/reload0.png";
    setTimeout(reload_timeout_func0, 100);
    canshoot = false;
    canreload = false
}
function no_ammo() {
    if (bullets <= 0) {
        canshoot = false
        document.getElementById('gunImg').src = "guns/reload6.png";
    }
}
function max_ammo() {
    if (bullets == max_bullets) {
        canreload = false
    }
}
function reload_timeout_func0() {
    document.getElementById('gunImg').src = "guns/reload1.png";
    setTimeout(reload_timeout_func1, 100)
}
function reload_timeout_func1() {
    document.getElementById('gunImg').src = "guns/reload2.png";
    setTimeout(reload_timeout_func2, 100)
}
function reload_timeout_func2() {
    document.getElementById('gunImg').src = "guns/reload3.png";
    setTimeout(reload_timeout_func3, 100)
}
function reload_timeout_func3() {
    document.getElementById('gunImg').src = "guns/reload4.png";
    setTimeout(reload_timeout_func4, 100)
}
function reload_timeout_func4() {
    document.getElementById('gunImg').src = "guns/reload5.png";
    setTimeout(reload_timeout_func5, 100)
}
function reload_timeout_func5() {
    document.getElementById('gunImg').src = "guns/reload6.png";
    setTimeout(reload_timeout_func6, 100)
}
function reload_timeout_func6() {
    document.getElementById('gunImg').src = "guns/reload7.png";
    setTimeout(reload_timeout_func6, 100)
}
function reload_timeout_func6() {
    document.getElementById('gunImg').src = "guns/idle.png";
    bullets = max_bullets;
    canshoot = true;
    canreload = true;
    bulletHTML.innerHTML = bullets+'/'+max_bullets
}
function shootshoot() {
    no_ammo();
    if (canshoot == true) {
        if (window.paused == false) {
            shootchangeImage();
        }
    }
}

function reloadreload() {
    max_ammo();
    if (canreload == true) {
        reloadchangeImage();
    }
}



const input = this.document.querySelector("input");



window.addEventListener('load', function () {    
    console.log('page loaded');
    window.addEventListener('click', function () {    
        shootshoot()
    });
});



function checkKey(e) {
    if (e.code == "KeyR") {
        reloadreload()
        console.log("reload!!")
    }
}


window.addEventListener("keydown", function (e) {
    if (e.code == "KeyR") {
        reloadreload()
    }
});


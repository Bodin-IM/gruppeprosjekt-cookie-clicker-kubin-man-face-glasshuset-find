var upg =  [10, 5, 15, 20, 15, 50000, 1000000]


function transaction(no) {
    if (window.score >= upg[no]) {
        window.score = window.score - upg[no]
        upg[no] = upg[no] * 1.5
    }


}

function buy(item) {
    console.log("clicked")
    button = document.getElementById(item)
    if (item == "upg_cookie") {
        transaction(0)
        document.getElementById(item).innerHTML("$" + str(upg[no]))
     }
    if (item == "upg_mag") {
        transaction(1)
        document.getElementById(item).innerHTML("$" + str(upg[no]))
     }
    if (item == "upg_cash") {
        transaction(2)
        document.getElementById(item).innerHTML("$" + str(upg[no]))
     }
    if (item == "upg_CPS") {
        transaction(3)
        document.getElementById(item).innerHTML("$" + str(upg[no]))
     }
    if (item == "upg_rate") {
        transaction(4)
        document.getElementById(item).innerHTML("$" + str(upg[no]))
    }
    if (item == "upg_unlimited") {
        transaction(5)
        document.getElementById(item).innerHTML("$" + str(upg[no]))
     }
    if (item == "upg_auto") {
        transaction(6)
        document.getElementById(item).innerHTML("$" + str(upg[no]))
     }

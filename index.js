let homePoints = document.getElementById("home-score")
//console.log(homePoints)
let guestPoints = document.getElementById("guest-score")
//console.log(guestPoints)

let homeScore = 0
let guestScore = 0

function homeAdd1Point() {
    homeScore += 1
    homePoints.textContent = homeScore
}

function homeAdd2Point() {
    homeScore += 2
    homePoints.textContent = homeScore
}

function homeAdd3Point() {
    homeScore += 3
    homePoints.textContent = homeScore
}

function guestAdd1Point() {
    guestScore += 1
    guestPoints.textContent = guestScore
}

function guestAdd2Point() {
    guestScore += 2
    guestPoints.textContent = guestScore
}

function guestAdd3Point() {
    guestScore += 3
    guestPoints.textContent = guestScore
}

function newGame () {
    homeScore = 0
    guestScore = 0
    homePoints.textContent = homeScore
    guestPoints.textContent = guestScore
}
// Assignment 3: Interactive Blacksmith

// ELEMENT VARIABLES
const $forge = document.getElementById("forge")
const $heatValue = document.getElementById("heat-value")
const $swordCount = document.getElementById("sword-count")
const $forgeImage = document.getElementById("forge-image")
const $forgeStatus = document.getElementById("forge-status")
const $forgeMessage = document.getElementById("action-message")

// STATE VARIABLES
let forgeHeat = 20
let swordCount = 0

// FUNCTIONS

function getForgeStatus(heatValue) {
    if (heatValue < 30) {
        return "Too cold"
    }
    else if (heatValue < 70) {
        return "Ready to forge"
    }
    else {
        return "Roaring fire"
    }
}

function updateForge() {

    $heatValue.textContent = forgeHeat
    $swordCount.textContent = swordCount

    let status = getForgeStatus(forgeHeat)
    $forgeStatus.textContent = status

    $forge.classList.remove("is-cold", "is-ready", "is-roaring")

    if (status == "Too cold") {
        $forge.classList.add("is-cold")
        $forgeImage.setAttribute("src", "assets/forge-cold.svg")
        $forgeImage.setAttribute("alt", "a cold forge with no fire")
    }
    else if (status == "Ready to forge") {
        $forge.classList.add("is-ready")
        $forgeImage.setAttribute("src", "assets/forge-ready.svg")
        $forgeImage.setAttribute("alt", "a ready forge with a fire")
    }
    else {
        $forge.classList.add("is-roaring")
        $forgeImage.setAttribute("src", "assets/forge-roaring.svg")
        $forgeImage.setAttribute("alt", "a hot forge with a big fire")
    }
}

function resetForge() {
    forgeHeat = 20
    swordCount = 0
    $forgeMessage.textContent = "Welcome to the forge. Add heat to begin."
    updateForge()
}

function heatForge(amount) {
    forgeHeat = forgeHeat + amount
    if (forgeHeat > 100) {
        forgeHeat = 100
        $forgeMessage.textContent = "Fire is already hot."
    }
    else if (forgeHeat < 30) {
        $forgeMessage.textContent = "Fire is still not hot enough."
    }
    else {
        $forgeMessage.textContent = "Fire is hot enough to forge."
    }
    updateForge()
}

function makeSword() {
    if (forgeHeat >= 30) {
        forgeHeat = forgeHeat - 30
        swordCount++
        updateForge()
        $forgeMessage.textContent = "Sword created"
    }
    else {
        updateForge()
        $forgeMessage.textContent = "Not enough heat"
    }
    updateForge()
}

// calls the function to reset the game
resetForge()
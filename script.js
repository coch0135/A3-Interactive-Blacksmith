// Assignment 1: Blacksmith — The Tiny Forge

// PLAN: Write a short pseudocode plan for making a sword here.
// pseudocode plan for makeSword:
// function makeSword(){
//     if(forgeHeat >= 30){
//         forgeHeat = forgeHeat - 30
//         // ++ means +1, works the same with -- (Taro)
//         swordCount++
//         updateForge()
//         return "sword created"
//     }
//     else{
//         updateForge()
//         return "not enough heat"
//     }
// }

//(From Directions) Build in this order:
// Select the existing page elements and create the two state variables. - done
// Build getForgeStatus() and updateForge(). - done
// Build resetForge() and call it to initialize the page. - done
// Build and test heatForge(amount). - done
// Build and test both outcomes of makeSword(). - done

//My code starts here

// 1. Select the forge, heat, sword count, status, image, and message elements.
    // Find their IDs in index.html.

// ELEMENT VARIABLES
const $forge = document.getElementById("forge")
const $heatValue = document.getElementById("heat-value")
const $swordCount = document.getElementById("sword-count")
const $forgeImage = document.getElementById("forge-image")
const $forgeStatus = document.getElementById("forge-status")
const $forgeMessage = document.getElementById("action-message")

// 2. Create the two state variables: heat and swords made.

// STATE VARIABLES
let forgeHeat = 20
let swordCount = 0

// FUNCTIONS

// 3. Write getForgeStatus(heatValue). Return the correct status string.
    // Use if / else if / else to choose the status from the table
    // Return the status as a string.
    // Keep this function focused on choosing a value; it should not change the page.

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

// 4. Write updateForge(). Update text and apply one status class.
    // Change the supplied forge image src and alt to match the heat.
    // Keep the most recent action message visible.
    // Update the supplied image’s src and alt attributes to match the heat, as in monster demo 

function updateForge() {

    // Display the current heat and sword count using textContent.
    $heatValue.textContent = forgeHeat
    $swordCount.textContent = swordCount

    // Call getForgeStatus() and display its returned value.
    let status = getForgeStatus(forgeHeat)
    $forgeStatus.textContent = status

    // Remove the previous status classes so only one remains.
    $forge.classList.remove("is-cold", "is-ready", "is-roaring")

    // Use classList to apply the matching starter CSS class: is-cold, is-ready, or is-roaring.
    // Update the supplied image’s src and alt attributes to match the heat, as in the monster demo
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

// 5. Write resetForge(). Restore the state, message, and display.
    // Restore heat to 20 and swords made to 0.
    // Replace the previous action message with a starting message.
    // Call updateForge().
function resetForge() {
    forgeHeat = 20
    swordCount = 0
    $forgeMessage.textContent = "Welcome to the forge. Add heat to begin."
    updateForge()
}

// 6. Write heatForge(amount). Add heat, cap it, and update the page.
    // Add amount to the current heat.
    // Stop the heat at 100 if the addition would exceed 100.
    // Display a short message confirming that the forge was heated.
    // Call updateForge().
    // For this assignment, the player will supply whole-number amounts from 0 to 100. You do not  need to handle text, missing arguments, or other invalid inputs.
    // Example command: heatForge(20).

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

// 7. Write makeSword(). Handle both success and insufficient heat.
// If heat is at least 30, subtract 30 heat and add one sword.
// Display a success message when a sword is made.
// Otherwise, leave both numbers unchanged and display a message explaining that more heat is needed.
// Call updateForge() after either result.
// Exactly 30 heat is enough. Each call makes at most one sword.

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

// 8. Call resetForge() once to start the game.
resetForge()

// Use the tests in ASSIGNMENT.md to check your work. - success :)
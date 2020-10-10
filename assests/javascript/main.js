let rollDiceInput = document.querySelector("#roll-number");
let rollButton = document.querySelector("#roll-dice");
let showAllRoles = document.querySelector("show-all-rolls");
let dieRolls = []
rollButton.addEventListener("click", function() {
    console.log("this works!")
    let numberofrolls = rollDiceInput.value
    console.log(numberofrolls)
})
let playerChoice = ;
let computerChoice = Math.random();

let compare = function (choice1, choice2) {
    if (playerChoice === computerChoice) {
        return 'You tied!'
    } else if (playerChoice == rock && computerChoice == scissors) {
        return 'You win!'
    } else if (playerChoice == paper && computerChoice == rock) {
        return 'You win!'
    } else if (playerChoice == scissors && computerChoice == paper) {
        return 'You win!'
    } else {
        return 'You lose!'
    }
}
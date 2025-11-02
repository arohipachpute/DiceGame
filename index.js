// Roll the two dice and update the UI. This runs only when the user clicks the Roll button.
function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;

    document.querySelector(".img1").setAttribute("src", "./images/dice" + randomNumber1 + ".png");
    document.querySelector(".img2").setAttribute("src", "./images/dice" + randomNumber2 + ".png");

    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").innerHTML = "🚩 Player 1 Wins!";
    } else if (randomNumber2 > randomNumber1) {
        document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
    } else {
        document.querySelector("h1").innerHTML = "It's a Draw!";
    }
}

// Wire up the button after DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    var btn = document.getElementById('roll');
    if (btn) {
        btn.addEventListener('click', rollDice);
    }
});

document.addEventListener("DOMContentLoaded", function() {

    const squares = document.querySelectorAll("#board div");

    let currentPlayer = "X";

    squares.forEach(function(square) {

        // Exercise 1: Style each square
        square.classList.add("square");

        // Exercise 2: Handle clicks
        square.addEventListener("click", function() {

            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            // Switch players
            if (currentPlayer === "X") {
                currentPlayer = "O";
            } else {
                currentPlayer = "X";
            }

        });
        // Exercise 3: Mouse hover effect
        square.addEventListener("mouseover", function() {
        square.classList.add("hover");
                });

        square.addEventListener("mouseout", function() {
        square.classList.remove("hover");
        });

    });

});

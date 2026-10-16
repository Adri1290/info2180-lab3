

document.addEventListener("DOMContentLoaded", function() {

    const squares = document.querySelectorAll("#board div");

    let currentPlayer = "X";

    const status = document.getElementById("status");

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    let gameOver = false;

    squares.forEach(function(square) {

        // Exercise 1: Style each square
        square.classList.add("square");

        // Exercise 2: Handle clicks
        square.addEventListener("click", function() {

            //   Prevent moves after a win
            // and prevent overwriting occupied squares
            if (gameOver || square.textContent !== "") {
                return;
            }

            square.textContent = currentPlayer;
            square.classList.add(currentPlayer);

            // Check for a winner
            checkWinner();

            //  Switch players only
            // if nobody has won
            if (!gameOver) {
                if (currentPlayer === "X") {
                    currentPlayer = "O";
                } else {
                    currentPlayer = "X";
                }
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

    //  Exercise 4 - Winner detection
    function checkWinner() {

        // Check all 8 possible winning combinations
        for (let combination of winningCombinations) {

            const [a, b, c] = combination;

            // Check if all three squares match
            if (
                squares[a].textContent !== "" &&
                squares[a].textContent === squares[b].textContent &&
                squares[b].textContent === squares[c].textContent
            ) {

                // Display the winning message
                status.textContent =
                    "Congratulations! " + currentPlayer + " is the Winner!";

                // Apply the winning CSS style
                status.classList.add("you-won");

                // Stop the game
                gameOver = true;

                return;
            }
        }
    }

});

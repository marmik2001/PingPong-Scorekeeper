const lPlayer = {
    score: 0,
    button: document.querySelector("#left_button"),
    display: document.querySelector("#left_player")
};

const rPlayer = {
    score: 0,
    button: document.querySelector("#right_button"),
    display: document.querySelector("#right_player")
};

const resetButton = document.querySelector("#reset");
const playToSelect = document.querySelector("#playto");

let winningScore = 3, isGameOver = false;

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

lPlayer.button.addEventListener('click', () => (updateScore(lPlayer, rPlayer)));
rPlayer.button.addEventListener('click', () => (updateScore(rPlayer, lPlayer)));

function reset() {
    isGameOver = false;
    for (let p of [lPlayer, rPlayer]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}

resetButton.addEventListener('click', reset)
playToSelect.addEventListener('change', (e) => {
    winningScore = parseInt(playToSelect.value);
    reset();
})

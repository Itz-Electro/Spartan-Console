const recentGames = document.getElementById('recent-plays')
const directInput = document.getElementById('directInput')
const loadButton = document.getElementById('loadButton')
const gamelist = document.getElementById('game-list-content')

function clearRecentGames() {recentGames.innerHTML = ''}
function addRecentGame(title) {
    let game = document.createElement('div')
    game.classList.add('recent-game')
    game.append(
        document.createTextNode(title)
    )
    recentGames.append(game)
}


function addGame(title) {
    let game = document.createElement('li')
    let buttonElement = '<button type="button" class="delete-game">Delete</button>'
    game.innerHTML = title
    //game.innerHTML += buttonElement
    game.classList.add('game-item')
    gamelist.append(game)

    return
    const deleteButton = game.querySelector('.delete-game');
    game.addEventListener('click', event => {
        gamelist.removeChild(game);
    });
}

loadButton.addEventListener('click', (event) => {
    launchGame(directInput.value)
})
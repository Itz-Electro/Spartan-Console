const recentGames = document.getElementById('recent-plays')
const loadButton = document.getElementById('loadButton')
const gamelist = document.getElementById('game-list-content')

addRecentGame('Place Holder Game')
function addRecentGame(title) {
    
    let game = document.createElement('div')
    game.classList.add('recent-game')
    game.append(
        document.createTextNode(title)
    )
    recentGames.append(game)
}

detectGames()
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
function detectGames() {
    //let gamesDir = readDirectory('./Game Files')
    //console.log(gamesDir)
    for (var i=0; i<5; i++) {
        addGame(`Place Holder ${i+1}`)
    }
}
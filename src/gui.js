


addRecentGame('test')


function addRecentGame(title) {
    const recentGames = document.getElementById('recent-plays')
    let game = document.createElement('div')
    game.classList.add('recent-game')
    game.append(
        document.createTextNode(title)
    )
    console.log(game)
    recentGames.append(game)
}
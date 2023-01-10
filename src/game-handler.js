const recentsPath = './src/game-files/data/data.json'
const recentsFile = JSON.parse(readFile(recentsPath))


console.log('')

function launchGame(title) {
    recentsFile.recent.unshift(title)
    if (recentsFile.recent.length > 4) {
        recentsFile.recent.pop()
    }
    console.log(recentsPath, recentsFile)
    updateJSON(recentsPath, recentsFile)
    addRecentGame(title)
    loadFile(`./src/game-files/${title}.html`)
}


function detectGames() {
    let gamesDir = readDir('./src/game-files')
    for (let file of gamesDir) {
        if (file.endsWith('.html')) {
            addGame(file.slice(0, file.length - 5))
        }
    }
}
detectGames()

function detectRecents() {
    clearRecentGames()
    for (let title of recentsFile.recent) {
        addRecentGame(title)
    }
}
detectRecents()

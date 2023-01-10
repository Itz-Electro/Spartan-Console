function quitGame() {
    window.electron.loadFile('./src/index.html')
}
function setTitle(title) {
    window.electron.setTitle(title)
}

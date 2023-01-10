function setTitle(title) {
    window.electron.setTitle(title)
}
function loadFile(file) {
    window.electron.loadFile(file)
}
function readDir(path) {
    return window.electron.readDirectory(path)
}
function updateJSON(path, content) {
    window.electron.updateJSON(path, content)
}
function readFile(path) {
    return window.electron.readFile(path)
}

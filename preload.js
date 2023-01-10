const { contextBridge, ipcRenderer, BrowserWindow } = require('electron')
const path = require('path')
const fs = require('fs')

window.addEventListener('DOMContentLoaded', () => {
    const replaceText = (selector, text) => {
      const element = document.getElementById(selector)
      if (element) element.innerText = text
    }
  
    for (const dependency of ['chrome', 'node', 'electron']) {
      replaceText(`${dependency}-version`, process.versions[dependency])
    }
  })

//Set Title
contextBridge.exposeInMainWorld('electron', {
    setTitle: (title) => ipcRenderer.send('set-title', title),
    loadFile: (path) => ipcRenderer.send('load-file', path),
    readDirectory: (dirPath) => {
      return fs.readdirSync(path.join(__dirname, dirPath))
    },
    updateJSON: (path, content) => {
      fs.writeFileSync(path, JSON.stringify(content));
    },
    readFile: (path) => {
      return fs.readFileSync(path, 'utf-8');
    },
})

contextBridge.exposeInMainWorld('gameAPI', {
  setTitle: (title) => ipcRenderer.send('set-title', title),
  quitGame: () => ipcRenderer.send('load-file', './src/index.html'),
  reloadGame: () => ipcRenderer.send('load-file', BrowserWindow.fromWebContents.path),
})
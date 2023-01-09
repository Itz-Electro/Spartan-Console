const { contextBridge, ipcRenderer } = require('electron')
const { readdir } = require('original-fs')

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
    readDir: (path) => ipcRenderer.send('read-directory', path)
})
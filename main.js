const { ENV } = process.env
const { app, BrowserWindow } = require('deskgap');

app.once('ready', () => {
    const win = new BrowserWindow();

    if (ENV === 'development') {
      win.loadURL('http://localhost:1234');
    } else {
      win.loadFile('index.html');
    }
});
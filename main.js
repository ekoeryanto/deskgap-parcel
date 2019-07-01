const { ENV } = process.env;
const { app, BrowserWindow } = require('deskgap');

const PARCEL_SERVE = 'http://localhost:1234';
const PARCEL_BUILD = 'dist/index.html';

app.once('ready', () => {
    const win = new BrowserWindow();

    if (ENV === 'development') {
      win.loadURL(PARCEL_SERVE);
    } else {
      win.loadFile(PARCEL_BUILD);
    }
});
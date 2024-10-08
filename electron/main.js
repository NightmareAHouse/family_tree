// eslint-disable-next-line no-undef
const {app, BrowserWindow, screen} = require('electron');

let mainWindow;

function createWindow() {
    const primaryDisplay = screen.getPrimaryDisplay();

    const {width, height} = primaryDisplay.workAreaSize;

    mainWindow = new BrowserWindow({
        width: width,
        height: height,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
        },
    });

    const startUrl = 'http://localhost:3000'

    mainWindow.loadURL(startUrl);

    mainWindow.on('closed', () => {
        mainWindow = null;
    });
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    app.quit();
});

app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});

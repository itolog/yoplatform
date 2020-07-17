import { app, BrowserWindow, Menu } from 'electron';
import serve from 'electron-serve';
import installExtension, { REDUX_DEVTOOLS } from 'electron-devtools-installer';

import { createWindow } from './helpers';
import template from './Menu/Menu';

const isProd: boolean = process.env.NODE_ENV === 'production';

if (isProd) {
  serve({ directory: 'app' });
} else {
  app.setPath('userData', `${app.getPath('userData')} (development)`);
}

const mainWindowOptions = {
  width: 1300,
  height: 800,
};

(async () => {
  await app.whenReady();

  const mainWindow = createWindow('main', mainWindowOptions);

  // MENU SETUP
  const menu = !isProd
    ? Menu.buildFromTemplate(template(app, mainWindow))
    : null;
  Menu.setApplicationMenu(menu);

  if (isProd) {
    await mainWindow.loadURL('app://./home.html');
  } else {
    const port = process.argv[2];
    await mainWindow.loadURL(`http://localhost:${port}/home`);
    mainWindow.webContents.openDevTools();

    await installExtension(REDUX_DEVTOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));
  }
})();

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow('main', mainWindowOptions);
  }
});

app.on('window-all-closed', () => {
  app.quit();
});

app.allowRendererProcessReuse = true;

const path = require('path');
const url = require('url');
const { app, BrowserWindow } = require('electron');

let mainWindow;

let isDev = false;
const isMac = process.platform === 'darwin' ? true : false;

if (
	process.env.NODE_ENV !== undefined &&
	process.env.NODE_ENV === 'development'
) {
	isDev = true;
}

function createMainWindow() {
	mainWindow = new BrowserWindow({
		width: isDev ? 900 : 400,
		height: 700,
		show: false,
		backgroundColor: 'white',
		icon: `${__dirname}/assets/icon.png`,
		webPreferences: {
			nodeIntegration: true,
		},
	});

	let indexPath;

	if (isDev && process.argv.indexOf('--noDevServer') === -1) {
		indexPath = url.format({
			protocol: 'http:',
			host: 'localhost:8080',
			pathname: 'index.html',
			slashes: true,
		});
	} else {
		indexPath = url.format({
			protocol: 'file:',
			pathname: path.join(__dirname, 'dist', 'index.html'),
			slashes: true,
		});
	}

	mainWindow.loadURL(indexPath);

	// Don't show until we are ready and loaded
	mainWindow.once('ready-to-show', () => {
		mainWindow.show();

		if (isDev) {
			const {
				default: installExtension,
				REACT_DEVELOPER_TOOLS,
			} = require('electron-devtools-installer');

			installExtension(REACT_DEVELOPER_TOOLS).catch((err) =>
				console.log('Error loading React DevTools: ', err)
			)
			mainWindow.webContents.openDevTools();
		}
	});

	mainWindow.on('closed', () => (mainWindow = null));
}

app.on('ready', createMainWindow);

app.on('activate', () => {
	if (mainWindow === null) {
		createMainWindow();
	}
})

// Stop error
app.allowRendererProcessReuse = true;

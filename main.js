'use strict';

const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu } = electron;

let mainWindow;
let createWindow;

// Listen for app to be ready
app.on('ready', () => {
  // Create new window
  mainWindow = new BrowserWindow({});
  // Load html into window
  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'mainWindow.html'),
    protocol: 'file',
    slashes: true,
  }));

  // Build menu from template
  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  // Insert menu
  Menu.setApplicationMenu(mainMenu);
});

// Handle create timer window
const createTimerWindow = () => {
  // Create new window
  createWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: 'Create timer',
  });
  // Load html into window
  createWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'createWindow.html'),
    protocol: 'file',
    slashes: true,
  }));
};

// Create menu template
const mainMenuTemplate = [
  {
    label: 'File',
    submenu: [
      {
        label: 'Restart timer',
        click() {
          createTimerWindow();
        }
      },
      {
        label: 'Clear timer'
      },
      {
        label: 'Quit',
        accelerator: process.platform === 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click() {
          app.quit();
        }
      },
    ]
  }
];

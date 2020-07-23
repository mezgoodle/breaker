

# breaker

[![Language](https://img.shields.io/badge/language-javascript-brightgreen?style=flat-square)](https://nodejs.org/uk/)

Breaker looks on your work time and alarms you to do a break. Built with Electron.

## Table of contents



## Motivation

Once upon a time I have had a program that reminded me that my eyes needed a break from the screen. So I decided to do my own app, also with **Electron**, because I heard a lot about it, but never used. 

## Build status

Here you can see build status of [continuous integration](https://en.wikipedia.org/wiki/Continuous_integration):

[![Build Status](https://travis-ci.com/mezgoodle/breaker.svg?branch=master)](https://travis-ci.com/mezgoodle/breaker)

## Badges

Other badges

[![Build Status](https://img.shields.io/badge/Theme-Reminder-brightgreen?style=flat-square)](https://www.google.com/search?q=reminder&rlz=1C1CHZO_ukUA900UA900&oq=reminder&aqs=chrome..69i57j0l7.1631j0j7&sourceid=chrome&ie=UTF-8)
[![Build Status](https://img.shields.io/badge/Platform-Electron-brightgreen?style=flat-square)](https://www.electronjs.org/)
[![Build Status](https://img.shields.io/badge/OS-Any-brightgreen?style=flat-square)](https://en.wikipedia.org/wiki/Operating_system)

## Code style

I'm using [Codacy](https://www.codacy.com/) for automate my code quality.

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/3a3be140ae684d61bbccaf15c57aeb00)](https://www.codacy.com/manual/mezgoodle/breaker?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=mezgoodle/breaker&amp;utm_campaign=Badge_Grade)
 
## Screenshots

- Main window

![Screenshot 1](https://raw.githubusercontent.com/mezgoodle/images/master/breaker1.png)

- Menu

![Screenshot 2](https://raw.githubusercontent.com/mezgoodle/images/master/breaker2.png)

- Restart timer

![Screenshot 3](https://raw.githubusercontent.com/mezgoodle/images/master/breaker3.png)

## Tech/framework used

**Built with**
- [NodeJS](https://nodejs.org/uk/)
- [Electron](https://www.electronjs.org/)
- [Materialize](https://materializecss.com/)

## Features

With my application you can **start** timer for _45_ minutes, **stop** it, **restart** timer with custom minutes.

## Code Example

- Timer window

```js
// Handle create timer window
const createTimerWindow = () => {
  // Create new window
  createWindow = new BrowserWindow({
    width: 300,
    height: 200,
    title: 'Create timer',
    webPreferences: {
      nodeIntegration: true,
    }
  });
  // Load html into window
  createWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'createWindow.html'),
    protocol: 'file',
    slashes: true,
  }));
};
```

- Main menu template

```js
// Create menu template
const mainMenuTemplate = [
  {
    label: 'Timer',
    submenu: [
      {
        label: 'Restart timer',
        click() {
          createTimerWindow();
        }
      },
      {
        label: 'Clear timer',
        click() {
          mainWindow.webContents.send('timer:clear');
        }
      },
      {
        label: 'Pause/Play timer',
        click() {
          mainWindow.webContents.send('timer:pause');
        }
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
```

## Installation and usage

1. Clone this repository:

```bash
git clone https://github.com/mezgoodle/breaker.git
cd breaker
```

2. Install dependencies with [npm](https://www.npmjs.com/):

```bash
npm i
```

3. Change environment variable from [line 10](https://github.com/mezgoodle/breaker/blob/master/main.js#L10) in **main.js**:

```js
process.env.NODE_ENV = 'development'; // production
```

4. Make your changes in project.

> Change name of package or icon in **assets**

5. Compile app for your operating system:

```bash
# Windows
npm run package-win
# Mac
npm run package-mac
# Linux
npm run package-linux
```

## Contribute

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Credits

Links to video and article which inspired me to build this project:

- [Tutorial](https://www.youtube.com/watch?v=kN1Czs0m1SU)
- [Timer](https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_countdown)

## License

MIT © [mezgoodle](https://github.com/mezgoodle)


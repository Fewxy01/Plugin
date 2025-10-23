# Создание плагина для Visual Studio Code :blush:
Проект создан Овчинниковой Марией Олеговной(группа М3121) в рамках лабораторной работы №3 "Создание плагина".

## Инструменты
- **Node.js** - среда исполнения JavaScript
- **npm** - менеджер пакетов для Node.js
- **Json** - текстовый формат обмена данными, основанный на JavaScript

## Описание:
Создание плагина для среды разрабтки VS code с помощью Node.js на языке JavaScript. При активации плагина программа выводит приветствие и показывает текущее время.

## 1. Создание файлов
С помощью комнады __npm init -y__ создаю файл package.json.

В vs code создаю файлы __package.json, launch.json, mylogic.js, extension.js__

## 2. Структура проекта
### Package.json
- **package.json** - текстовый конфигурационный файл, в котором описывается имя проекта на Node.js, версия, описание, зависимости, точка входа и другие параметры (описывает, как собрать и запустить программу)

- содержание файла:
\```json
{
  "name": "plugin",
  "displayName": "Lab Node Plugin",
  "description": "Greeting plugin with present time using Node.js",
  "version": "1.0.0",
  "main": "extension.js",
  "engines": {
    "vscode": "^1.80.0"
  },
  "activationEvents": [
    "onCommand:labnode.hello"
  ],
  "contributes": {
    "commands": [
      {
        "command": "labnode.hello",
        "title": "Lab Node: Greeting"
      }
    ]
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "license": "ISC"
}
\```

### Mylogic.js
- **mylogic.js** - файл с логикой проекта, который объявляет функцию getGreeting с текстовой строкой и содержанием текущего времени

- содержание файла:
\```js
function getGreeting(name = 'user') {
  const time = new Date().toLocaleTimeString();
  return `Hello, ${name}! It's ${time} now`;
}
module.exports = {getGreeting};
\```

### Extension.js
- **extension.js** - основной файл проекта, который подключает все модули и активирует работу плагина

- содержание файла:
\```js
const vscode = require('vscode');
const {getGreeting} = require('./mylogic');

function activate(context) {
  let disposable = vscode.commands.registerCommand('labnode.hello', () => {
    const message = getGreeting('Мария');
    vscode.window.showInformationMessage(message);
  });

  context.subscriptions.push(disposable);
}

function deactivate() {}

module.exports = {
  activate,
  deactivate
};
\```

### Launch.json
- **launch.json** - файл конфигурации запуска и тестировки плагина. После нажатия кнопки F5 плагин запускается как установленное расширение

- содержание файла:
\```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Plugin activation",
      "type": "extensionHost",
      "request": "launch",
      "runtimeExecutable": "${execPath}",
      "args": [
        "--extensionDevelopmentPath=${workspaceFolder}"
      ]
    }
  ]
}
\```
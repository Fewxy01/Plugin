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

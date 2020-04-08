// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	const template = "from boa.interop.Neo.Runtime import Log, Notify\n\ndef Main():\n	# Print translates to a `Log` call, and is best used with simple strings for\n	# development info. To print variables such as lists and objects, use `Notify`.\n	print(\"log via print (1)\")\n	Log(\"normal log (2)\")\n	Notify(\"notify (3)\")\n\n	# Sending multiple arguments as notify payload:\n	msg = [\"a\", 1, 2, b\"3\"]\n	Notify(msg)";
	
	console.log('Extension Neo BOA is now active!');

	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// The commandId parameter must match the command field in package.json

	let disposable = vscode.commands.registerCommand('neoboa.neoBoa', () => {
		// The code you place here will be executed every time your command is executed
		vscode.workspace.openTextDocument({content: template}).then(document => {
			vscode.window.showTextDocument(document);
			vscode.languages.setTextDocumentLanguage(document, "python");
		});
	});

	context.subscriptions.push(disposable);
}

// this method is called when your extension is deactivated
export function deactivate() {}

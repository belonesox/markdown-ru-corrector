import * as vscode from 'vscode';
import { fixMarkdownText } from './corrector';

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('markdown-ru-corrector.fixMD', () => {
            const editor = vscode.window.activeTextEditor;
            if (!editor) return vscode.window.showInformationMessage('Нет активного редактора.');
            if (editor.document.languageId !== 'markdown') return vscode.window.showInformationMessage('Команда работает только для Markdown-файлов.');

            const text = editor.document.getText();
            const newText = fixMarkdownText(text);

            if (newText !== text) {
                const fullRange = new vscode.Range(editor.document.positionAt(0), editor.document.positionAt(text.length));
                editor.edit(editBuilder => editBuilder.replace(fullRange, newText))
                    .then(success => { if (success) vscode.window.showInformationMessage('Markdown исправлен.'); });
            } else {
                vscode.window.showInformationMessage('Не найдено ничего для исправления.');
            }
        })
    );
}
export function deactivate() {}
import * as assert from 'assert';
import * as path from 'path';
import * as fs from 'fs';
import { fixMarkdownText } from '../../corrector';

suite('fixMarkdown Test Suite', () => {
    const testsRoot = path.resolve(__dirname, '../../../tests/fixMarkdown');
    if (!fs.existsSync(testsRoot)) return;
    
    const testCases = fs.readdirSync(testsRoot, { withFileTypes: true }).filter(dirent => dirent.isDirectory()).map(dirent => dirent.name);

    testCases.forEach(testCase => {
        test(`Should fix ${testCase}`, () => {
            const testDir = path.join(testsRoot, testCase);
            const sourceText = fs.readFileSync(path.join(testDir, 'source.md'), 'utf-8');
            const expectedText = fs.readFileSync(path.join(testDir, 'fixed.md'), 'utf-8');
            assert.strictEqual(fixMarkdownText(sourceText), expectedText);
        });
    });
});
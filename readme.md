# Markdown Russian Corrector (markdown-ru-corrector)

**[🇷🇺 Читать документацию на русском языке](#русская-документация)**

A highly specialized VS Code / code-server extension designed to automatically format Markdown files according to the strict rules of Russian typography and basic Markdown heuristics.

If you write articles, technical documentation, or books in Russian using Markdown, this extension will save you hours of manual formatting by automatically converting quotes, dashes, and spacing to their proper typographic forms.

## Features

- **Smart Quotes:** Automatically converts straight quotes (`"text"`) into Russian guillemets (`«text»`). Properly handles nested quotes (`«text „nested“ text»`).
- **Typographic Dashes:** Replaces single, double, or triple hyphens (` - `, ` -- `) surrounded by spaces with proper em-dashes (` — `), inserting a non-breaking space before the dash.
- **Abbreviations:** Normalizes common Russian abbreviations (e.g., `Т.к.` -> `Так как`, `и т.д.` -> `и т. д.` with non-breaking spaces).
- **Number & Percentage Formatting:** Inserts non-breaking spaces before `%` and `‰` signs, except when used as adjectives (e.g., `100 %`, but `100-процентный`).
- **Markdown Heuristics:** - Fixes missing spaces in ATX headings (converts `#Heading` to `# Heading`).
  - Removes trailing whitespace (trailing spaces and tabs) across the document.
  - Collapses multiple empty lines into a single blank line.
- **Safe Execution:** The extension strictly ignores content inside:
  - Code blocks (`` `inline` `` and ` ```block``` `)
  - LaTeX formulas (`$math$` and `$$math$$`)
  - Hyperlinks and image definition blocks (e.g., `[text](url =50%x)`)
  - Markdown list markers (to prevent converting list hyphens into em-dashes).

## Usage

1. Open any Markdown (`.md`) file.
2. Use the shortcut `Ctrl+K F` (`Cmd+K F` on Mac).
3. Alternatively, click the **"MD: Fix Typography"** icon in the editor title menu, or find the command in the Command Palette.

---

<a id="russian-documentation"></a>
## Русская документация

**Markdown Russian Corrector** — это расширение для VS Code / code-server, которое автоматически применяет правила русской типографики и исправляет частые ошибки разметки в Markdown-документах.

Расширение создано для технических писателей, авторов блогов и разработчиков, которым важно качество текста, но лень вручную расставлять «ёлочки», длинные тире и неразрывные пробелы.

### Что делает расширение:

* **Кавычки:** Умная замена прямых кавычек `""` на типографские «ёлочки». Корректная обработка вложенных кавычек с использованием „лапок“.
* **Тире:** Замена дефисов, отбитых пробелами (` - `), на длинное тире (` — `). Автоматическая подстановка **неразрывного пробела** перед тире (по правилам типографики). Замена двух дефисов между цифрами (`1941--1945`) на тире без пробелов (`1941—1945`).
* **Сокращения:** Развертывание или правильное форматирование частых сокращений с неразрывными пробелами: 
  * `Т.к.` → `Так как`
  * `Т.е.` → `То есть`
  * `и т.д.` → `и т. д.`
* **Проценты:** Добавление неразрывного пробела перед знаком процента (`100 %`), при этом дефисные наращения не ломаются (`100-процентный`).
* **Починка Markdown:**
  * Автоматически добавляет пробел после `#` в заголовках, если его там нет (`#Заголовок` → `# Заголовок`).
  * Удаляет висячие пробелы в конце строк.
  * Схлопывает три и более пустых строк подряд в две.

### Чего расширение НЕ делает (Безопасность):

Эвристики применяются "умно". Расширение **не трогает** и не ломает:
* Блоки кода (как инлайн ``` ` ```, так и многострочные ``` ``` ```).
* LaTeX-формулы (`$` и `$$`).
* URL-адреса и атрибуты картинок (если у вас стоит плагин на размеры `![img](test.png =50%)`, знак процента останется на месте).
* Дефисы, используемые как маркеры списков.

### Горячие клавиши

* По умолчанию: `Ctrl + K, F` (Windows/Linux) или `Cmd + K, F` (macOS).
* Также доступна кнопка-иконка в правом верхнем углу редактора, если открыт `.md` файл.


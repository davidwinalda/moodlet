# moodlet

A tiny, dependency-free CLI that prints **ASCII moods** in your terminal.

No dependencies.  
No configuration.  
Just moods.

---

## Install

### Run instantly (no install)

```bash
npx moodlet happy
```

Install globally

```bash
npm install -g moodlet
mm happy
```

---

## Usage

```bash
mm <mood>
mm --list | -l
mm --random | -r
mm --help | -h
```

Examples

```bash
mm happy
mm sad
mm tired
mm sleepy     # alias -> tired
mm ok         # alias -> chill
mm --list
mm --random
```

---

## Output

`mm happy`

```code
╔════════════════╗
║   ◕        ◕   ║
║        ▿        ║
║    \______/    ║
╚════════════════╝
```

`mm sad`

```code
╔════════════════╗
║   ╥        ╥   ║
║        ▄▄▄        ║
║     ▄████▄      ║
╚════════════════╝
```

`mm love`

```code
╔════════════════╗
║   ♥        ♥   ║
║        ▿        ║
║     \\______/   ║
╚════════════════╝
```

---

## Available moods

Run:

```bash
mm --list
```

Example moods:
• happy
• sad
• tired
• angry
• love
• confused
• excited
• chill
• stressed

---

## Aliases

Some inputs are mapped automatically to a mood:

| Input  | Mapped to |
| ------ | --------- |
| ok     | chill     |
| cool   | chill     |
| relax  | chill     |
| sleepy | tired     |
| mad    | angry     |
| rage   | angry     |
| yay    | excited   |
| wtf    | confused  |
| hmm    | confused  |
| panic  | stressed  |

---

## Why moodlet?

- Big multiline ASCII (easy to read)
- Terminal-native
- Zero dependencies
- Fast and fun

---

## Development

Requirements

- Node.js 18+

## Setup

```bash
git clone https://github.com/<your-username>/moodlet.git
cd moodlet
npm install
```

> This project has no runtime dependencies. `npm install` is only for local workflows.

### Run locally

```bash
node bin/moodlet.js happy
```

Or link it globally while developing:

```bash
npm link
mm happy
```

Unlink when done:

```bash
npm unlink -g moodlet
```

---

## Tests

Uses Node’s built-in test runner:

```bash
node --test
```

---

Project structure

```txt
moodlet/
  bin/
    mm.js
  src/
    cli.js
    engine.js
    moods.js
  test/
    engine.test.js
  package.json
  README.md
  LICENSE
```

---

## License

MIT

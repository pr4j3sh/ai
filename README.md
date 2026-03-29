# ai

> ai in your code

This is a javascript npm package for using LLM inside your code.

Supports:

- SheCodes
- Ollama

> Use chaining to make context aware

## Installation

- Using `npm`

```bash
npm i @pr4j3sh/ai
```

## Usage

- Server side

```js
const AI = require("@pr4j3sh/ai");

async function main() {
  try {
    const ai = new AI("write two lines on javascript");
    await ai.shecodes();
    await ai.ollama(
      `${ai.response}\n use the above and give me two mcqs on it`,
    );

    console.log(ai.response);
  } catch (error) {
    console.error(error.message);
  }
}

main();
```

- Client side

```js
import AI from "@pr4j3sh/ai";

async function main() {
  try {
    const ai = new AI("write two lines on javascript");
    await ai.shecodes();
    await ai.ollama(
      `${ai.response}\n use the above and give me two mcqs on it`,
    );

    console.log(ai.response);
  } catch (error) {
    console.error(error.message);
  }
}

main();
```

## Reference

- [NodeJS Documentation](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [NPM Documentation](https://docs.npmjs.com/)
- [@pr4j3sh/frames](https://pr4j3sh.github.io/frames/)

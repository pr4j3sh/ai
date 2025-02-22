# ai

This is a javascript npm package for using llm inside your code.

## Installation

- Using `npm`

```bash
npm i @pr4j3sh/ai
```

## Usage

```js
const { ai } = require("@pr4j3sh/ai");

ai("write a poem on javascript")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
```

## Reference

- [NodeJS Documentation](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [NPM Documentation](https://docs.npmjs.com/)
- [@pr4j3sh/frames](https://pr4j3sh.github.io/frames/)

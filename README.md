# ai

> ai in your code

This is a javascript npm package for using LLM inside your code.

## Installation

- Using `npm`

```bash
npm i @pr4j3sh/ai
```

## Usage

- Server side

```js
const ai = require("@pr4j3sh/ai");

ai("write a poem on javascript")
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });
```

- Client side

```js
import ai from "@pr4j3sh/ai";

const res = await ai("write a poem on javascript");
console.log(res);
```

## Reference

- [NodeJS Documentation](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [NPM Documentation](https://docs.npmjs.com/)
- [@pr4j3sh/frames](https://pr4j3sh.github.io/frames/)

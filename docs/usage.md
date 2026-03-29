# AI

The module provides `AI` class.

It has:

```js
{
  prompt: string,
  response: string,
  async function shecodes(prompt, key) {},
  async function ollama(prompt, key) {}
}
```

## Importing AI

- Provides both `module` and `commonjs` imports

```js
import AI from "@pr4j3sh/ai";
```

```js
const AI = require("@pr4j3sh/ai");
```

## Creating an object

```js
const ai = new AI("<prompt>");
```

**API Reference**

| arg    | type   | description        |
| ------ | ------ | ------------------ |
| prompt | string | prompt for the llm |

**Response**

| arg      | type   | description           |
| -------- | ------ | --------------------- |
| prompt   | string | prompt for the llm    |
| response | string | response from the llm |

## Invoking AI

- shecodes

```js
ai.shecodes(prompt, key);
```

**API Reference**

| arg    | type   | description                                              |
| ------ | ------ | -------------------------------------------------------- |
| prompt | string | prompt for the llm (optional, uses AI prompt by default) |
| key    | string | API Key of SheCodes                                      |

- ollama

```js
ai.ollama(prompt, model);
```

**API Reference**

| arg    | type   | description                                                              |
| ------ | ------ | ------------------------------------------------------------------------ |
| prompt | string | prompt for the llm (optional, uses AI prompt by default)                 |
| model  | string | Name of model that ollama uses, check [here](https://ollama.com/library) |

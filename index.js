#!/usr/bin/env node

const { ai } = require("./src/utils");

console.log(ai("write a poem on javascript"));

module.exports = {
  ai,
};

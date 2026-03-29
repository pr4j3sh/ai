const { API_KEY } = require("./config");

class AI {
  constructor(prompt) {
    if (!prompt) throw new Error("please provide a prompt");
    this.prompt = prompt;
    this.response = "";
  }

  async shecodes(prompt = this.prompt, key = API_KEY) {
    try {
      if (!key) throw new Error("please provide a valid api key");

      const res = await fetch(
        `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&key=${key}`,
      );
      const data = await res.json();
      if (!data.answer) {
        throw new Error("invalid response");
      }
      this.response = data.answer;
      return this;
    } catch (error) {
      throw Error(error);
    }
  }

  async ollama(prompt = this.prompt) {
    try {
      const res = await fetch("http://localhost:11434/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "llama3.2",
          stream: false,
          prompt: prompt,
        }),
      });
      const data = await res.text();
      const json = JSON.parse(data);
      if (!json.response) {
        throw new Error("invalid response");
      }
      this.response = json.response;
      return this;
    } catch (error) {
      throw Error(error);
    }
  }
}

module.exports = AI;

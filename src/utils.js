const { API_KEY } = require("./config");

async function ai(prompt) {
  try {
    const res = await fetch(
      `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&key=${API_KEY}`,
    );
    const data = await res.json();
    if (!data.answer) {
      throw new Error("invalid response");
    }
    return data.answer;
  } catch (error) {
    return error.message;
  }
}

module.exports = { ai };

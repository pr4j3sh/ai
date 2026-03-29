const AI = require("./src/ai");

async function main() {
  try {
    const ai = new AI("write two lines on javascript");
    console.log(ai);
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

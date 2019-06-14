const figlet = require("figlet");

const { askQuestions } = require("./prompts.js");
const { dealHand } = require("./utils/generateHand.js");

const init = () => {
  console.log(
    figlet.textSync("poker", {
      font: "Ghost",
      horizontalLayout: "default",
      verticalLayout: "default"
    })
  );
}

const run = async (
) => {
  // show script introduction
  init();

  // ask questions
  // const answers = await askQuestions();
  // create the file

  const hand = dealHand();
  console.log(hand);

  // console.log(answers)
};


run();
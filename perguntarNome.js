const prompt = require("prompt-sync")();

const isNotNumeric = (text) =>
  text
    .split("")
    .filter((c) => c !== " ")
    .every(isNaN);

const hasContent = (text) => text != null && text.length > 0;

const isNameValid = (name) => hasContent(name) && isNotNumeric(name);

const askName = () => {
  let name;
  do {
    if (name) console.log(`Invalid name. Nobody is called ${name}`);

    name = prompt("What is your name? ");
  } while (!isNameValid(name));
  return name;
};

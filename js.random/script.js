let textBox = document.getElementById("userText");
let resultText = document.getElementById("result");
let text;

function Create() {
  text = textBox.value;
  let num = Math.floor(Math.random() * 100);
  text = text.replaceAll("%", num.toString() + "%");

  const regex = /#(\d+)-(\d+)/g;
  const matches = text.matchAll(regex);
  let min;
  let max;

  // Extract and process matches
  for (const match of matches) {
    min = parseInt(match[1]);
    max = parseInt(match[2]);
  }

  text = text.replaceAll(regex, randomNumber(min, max));

  resultText.textContent = text;
  console.log(`Min: ${min}, Max: ${max}`);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

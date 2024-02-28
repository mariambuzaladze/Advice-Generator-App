const button = document.querySelector("button");

let img = document.createElement("img");
img.src = "./images/icon-dice.svg";

button.appendChild(img);

const title = document.querySelector("h1");
const adviceParagraph = document.querySelector("p");

async function getAdvice() {
  try {
    let response = await fetch("https://api.adviceslip.com/advice");
    if (response.ok) {
      data = await response.json();
      return data;
    } else {
      throw new Error("Failed to fetch!");
    }
  } catch (error) {
    console.log(error);
  }
}

async function displayAdvice() {
  try {
    let data = await getAdvice();
    title.textContent = `ADVICE #${data.slip.id}`;
    adviceParagraph.textContent = data.slip.advice;
  } catch (error) {
    console.log(error);
  }
}

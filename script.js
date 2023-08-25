const idDisplay = document.querySelector('.advice-id');
console.log(idDisplay);
const adviceDisplay = document.querySelector('.js-advice');
console.log(adviceDisplay);
const buttonDisplay = document.querySelector('.js-btn');
const displayError = document.querySelector('.error')


const adviceUrl = 'https://api.adviceslip.com/advice';

function putError() {
  setTimeout(() => {
    displayError.style.display = 'none';
  },2000);
}

async function adviceGenerator() {
  try {
    let request = await fetch(adviceUrl);
    let response = await request.json();
    idDisplay.innerText = response.slip.id;
    adviceDisplay.innerText = response.slip.advice;
  } catch (error) {
    displayError.style.display = 'block';
    putError()
  }
  
}

buttonDisplay.addEventListener('click', () => {
  adviceGenerator()
})

document.getElementById('button').addEventListener('click', randomizer)
let guess
let answer

function randomizer () {
  guess = parseInt(document.getElementById('val1').value)
  answer = parseInt(Math.random() * 7)
  if (guess === answer) {
    alert('You win!')
  }
}

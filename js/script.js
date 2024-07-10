// YOUR CODE HERE
const btn1 = document.getElementById('btn1')
const btn2 = document.getElementById('btn2')
const btn3 = document.getElementById('btn3')
const btn4 = document.getElementById('btn4')
const btn5 = document.getElementById('btn5')

const output1 = document.getElementById('output1')
const output2 = document.getElementById('output2')
const output4 = document.getElementById('output4')

const smallText = document.querySelector('.small-text')

btn1.addEventListener("click", () => {
  output1.style.color = 'red'
})

btn2.addEventListener("click", () => {
  const additional = document.createElement('span')
  additional.textContent = 'Hello Word'
  output2.append(additional)
})

btn3.addEventListener("click", () => {
  smallText.classList.remove('small-text')
})

btn4.addEventListener("click", () => {
  output4.style.color = 'red'
})

btn5.addEventListener("click", () => {
  const input = document.querySelector('#message')
  console.log(input.value);
})

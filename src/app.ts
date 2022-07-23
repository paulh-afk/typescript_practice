const button = document.querySelector('button');
let i = 0;

button.addEventListener('click', () => {
  i++;
  document.querySelector('span').innerText = i.toString();
});

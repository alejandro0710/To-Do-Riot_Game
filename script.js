const input = document.querySelector('.input-text');
const list = document.querySelector('.list');
const elementOfList = document.querySelector('.element-of-list');
const formText = document.querySelector('.form-text');

function removeElement(event) {
  console.log('Removiste un elemento');
  event.target.remove();
}

input.addEventListener('keyup', (a) => {
  if (a.keyCode === 13) {
    let li = document.createElement('li');
    li.classList.add('element-of-list');
    li.setAttribute('onclick', 'removeElement(event)');
    li.textContent = input.value;
    list.appendChild(li);

    // formText.reset();
  }
});

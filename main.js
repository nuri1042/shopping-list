// input 구현
const $form = document.querySelector('#form');
const $input = document.querySelector('.footer__input');
const $items = document.querySelector('.items');
const itemRow = document.querySelector('.item__row');
const $button = document.querySelector('.item__delete');
const $plusBtn = document.querySelector('.footer__button');

function onAdd() {
  const input = $input.value;
  if (input === '') {
    $input.focus();
    return;
  }
  const item = createItem(input);
  $items.appendChild(item);
  item.scrollIntoView({ block: 'center' });

  $input.value = '';
  $input.focus();
}

function createItem(input) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  const item = document.createElement('div');
  item.setAttribute('class', 'item');
  const itemName = document.createElement('span');
  itemName.setAttribute('class', 'item__name');
  itemName.innerText = input;
  const button = document.createElement('button');
  button.setAttribute('class', 'item__delete');
  button.innerHTML = '<i class="fas fa-trash-alt"></i>';
  button.addEventListener('click', () => {
    $items.removeChild(itemRow);
  });
  const divider = document.createElement('div');
  divider.setAttribute('class', 'item__divider');

  item.appendChild(itemName);
  item.appendChild(button);
  itemRow.appendChild(item);
  itemRow.appendChild(divider);

  return itemRow;
}

// plus 구현
$input.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    onAdd();
  }
});
$plusBtn.addEventListener('click', onAdd);

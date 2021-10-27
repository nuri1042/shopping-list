// input 구현
const $form = document.querySelector('#form');
const $input = document.querySelector('.footer__input');
const $items = document.querySelector('.items');
const $itemRow = document.querySelector('.item__row');
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
let id = 0; // UUID
function createItem(input) {
  const itemRow = document.createElement('li');
  itemRow.setAttribute('class', 'item__row');
  itemRow.setAttribute('data-id', id);
  itemRow.innerHTML = `
    <div class="item">
      <span class="item__name">${input}</span>
      <button class="item__delete" >
        <i class="fas fa-trash-alt" data-id=${id}></i>
      </button>
    </div>
    <div class="item__divider"></div>
  `;
  id++;
  // const item = document.createElement('div');
  // item.setAttribute('class', 'item');
  // const itemName = document.createElement('span');
  // itemName.setAttribute('class', 'item__name');
  // itemName.innerText = input;
  // const button = document.createElement('button');
  // button.setAttribute('class', 'item__delete');
  // button.innerHTML = '<i class="fas fa-trash-alt"></i>';
  // button.addEventListener('click', () => {
  //   $items.removeChild(itemRow);
  // });
  // const divider = document.createElement('div');
  // divider.setAttribute('class', 'item__divider');

  // item.appendChild(itemName);
  // item.appendChild(button);
  // itemRow.appendChild(item);
  // itemRow.appendChild(divider);

  return itemRow;
}

// plus 구현
// $input.addEventListener('keyup', (event) => {
//   if (event.key === 'Enter') {
//     onAdd();
//   }
// });
$input.addEventListener('keydown', (event) => {
  // 여러번의 keydown을 이용해 한글자가 만들어지는 경우, 글자가 만들어지고 있는 과정인지 아닌지 확인
  if (event.isComposing) {
    return;
  }
  if (event.key === 'Enter') {
    onAdd();
  }
});
$plusBtn.addEventListener('click', onAdd);
$items.addEventListener('click', (event) => {
  const id = event.target.dataset.id;
  if (id) {
    const toBeDeleted = document.querySelector(`.item__row[data-id="${id}"]`);
    console.log(toBeDeleted);
    toBeDeleted.remove();
  }
});

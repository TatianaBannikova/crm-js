import { svgCancelGreyColor } from './svgHTML.js';
export function createFieldContact() {
  // const
  const divNew = document.createElement('div');
  const selectContainer = document.createElement('select');
  const valuesItem = ['Телефон', 'Доп. телефон', 'Email', 'Vk', 'Facebook', 'Другое'];
  let divInput = document.createElement('div');
  let input = document.createElement('input');
  let button = document.createElement('button');
  // add class
  divNew.classList.add('contact', 'flex');
  selectContainer.classList.add('contact__select', 'select');
  input.classList.add('contact__input');
  button.classList.add('contact__btn-delete', 'btn-reset')
  divInput.classList.add('contact__group', 'flex');

  input.placeholder = 'Введите данные контакта';
  input.type = 'text';
  button.type = 'button';
  button.title = 'Удалить';
  button.innerHTML = svgCancelGreyColor;
  for (let i = 0; i <= valuesItem.length; i++) {
    const option = document.createElement('option');
    option.value = valuesItem[i];
    option.classList.add('select__item');
    option.textContent = valuesItem[i];
    selectContainer.append(option);
  }
  contactDelete.addEventListener('click', function() {
    contact.remove();
    document.querySelector('.form__btn-add-contacts').classList.remove('invisible');
  });

  divInput.append(input, button);
  divNew.append(selectContainer, divInput);
  const choices = new Choices(selectContainer, {
    allowHTML: true,
    searchEnabled: false,
    placeholder: true,
    itemSelectText: '',
    shouldSort: false,
  });
  return {
    divNew,
    selectContainer,
    input,
    button,
  };
}

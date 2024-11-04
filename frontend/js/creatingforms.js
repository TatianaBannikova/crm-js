
import { svgCancelGreyColor, svgCloseForm, svgAddMarker, svgAddMarkerHover } from './svgHTML.js';
export function deleteModalForm() {
  const mainSection = document.querySelector('.main');
  const modalWindow = document.createElement('div');
  modalWindow.classList.add('modal');
  deleteForm.classList.add('delete__form');

  const deleteFormTitle = document.createElement('h5');
  deleteFormTitle.classList.add('form__title');
  deleteFormTitle.textContent = 'Удалить';
  const deleteFormText = document.createElement('p');
  deleteFormText.classList.add('form__text');
  deleteFormText.textContent = 'Вы действительно хотите удалить данного клиента?';
  const deleteFormButton = document.createElement('button');
  deleteFormButton.classList.add('form__btn-cancel');
  deleteFormButton.textContent = 'Отмена';
  deleteForm.append(deleteFormTitle, deleteFormText, deleteFormButton);
  modalWindow.append(deleteForm);
  mainSection.append(modalWindow);
}
export function createFieldContact() {
  // const
  const divNew = document.createElement('div');
  const selectContainer = document.createElement('select');
  const valuesItem = ['Телефон', 'Доп. телефон', 'Email', 'Vk', 'Facebook', 'Другое'];
  const tooltip = document.createElement('div');
  let divInput = document.createElement('div');
  let input = document.createElement('input');
  let button = document.createElement('button');

  // add class
  divNew.classList.add('contact', 'flex');
  selectContainer.classList.add('contact__select', 'select');
  tooltip.classList.add('contact__tooltip');
  tooltip.textContent = 'Удалить контакт';
  input.classList.add('contact__input');
  button.classList.add('contact__btn-delete', 'btn-reset')
  divInput.classList.add('contact__group', 'flex');

  input.placeholder = 'Введите данные контакта';
  input.type = 'text';
  button.type = 'button';
  button.innerHTML = svgCancelGreyColor;
  input.addEventListener('input', function() {
    if (input.value === '') {
      button.classList.remove('visible');
    } else {
      button.classList.add('visible');
    }
  })
  for (let i = 0; i <= valuesItem.length; i++) {
    const option = document.createElement('option');
    option.value = valuesItem[i];
    option.classList.add('select__item');
    option.textContent = valuesItem[i];
    selectContainer.append(option);
  }
  divInput.append(input, button, tooltip);
  divNew.append(selectContainer, divInput);
  // create custom select
  const choices = new Choices(selectContainer, {
    allowHTML: true,
    searchEnabled: false,
    placeholder: true,
    itemSelectText: '',
    shouldSort: false,
  });
  button.addEventListener('click', function() {
    divNew.remove();
    document.querySelector('form__btn-add-contacts').classList.remove('invisible');
  });
  return {
    divNew,
    input,
    button
  }
}
export function CreateModalForm() {
  const form = document.createElement('form');
  form.classList.add('add__form', 'active');
  const divFormInner = document.createElement('div');
  //
  const formTitle = document.createElement('h5');
  formTitle.classList.add('form__title');
  formTitle.textContent = 'Новый клиент';
  //
  const surnameContainer = document.createElement('div');
  const errorContainerSurname = document.createElement('div');
  const inputSurname = document.createElement('input');
  const formPlaceholderSurname = document.createElement('div');
  const placeholderSpanSurname = document.createElement('span');
  //
  const nameContainer = document.createElement('div');
  const errorContainerName = document.createElement('div');
  const inputName = document.createElement('input');
  const formPlaceholderName = document.createElement('div');
  const placeholderSpanName = document.createElement('span');
  //
  const lastnameContainer = document.createElement('div');
  const errorContainerLastname = document.createElement('div');
  const inputLastname = document.createElement('input');
  const formPlaceholderLastname = document.createElement('div');
  const placeholderSpanLastname = document.createElement('span');
  //
  const formWrapContainer = document.createElement('div');
  const formContainerNew = document.createElement('div');
  const formWrapError = document.createElement('div');
  //
  const btnAddContact = document.createElement('button');
  const spanBtn = document.createElement('span');
  const spanBtnHover = document.createElement('span');
  const btnSubmit = document.createElement('button');
  const btnCancel = document.createElement('button');
  const btnClose = document.createElement('button');
  //
  divFormInner.classList.add('form__inner');
  surnameContainer.classList.add('form__container-surname');
  nameContainer.classList.add('form__container-name');
  lastnameContainer.classList.add('form__container-lastname');
  errorContainerSurname.classList.add('container__error');
  errorContainerSurname.textContent = 'Введите фамилию клиента';
  errorContainerName.classList.add('container__error');
  errorContainerName.textContent = 'Введите имя клиента';
  errorContainerLastname.classList.add('container__error');

  inputSurname.classList.add('form__surname');
  inputSurname.autocomplete = 'off';
  inputSurname.type = 'text';
  inputName.classList.add('form__name');
  inputName.autocomplete = 'off';
  inputName.type = 'text';
  inputLastname.classList.add('form__lastname');
  inputLastname.autocomplete = 'off';
  inputLastname.type = 'text';
  inputLastname.placeholder = 'Отчество';
  formPlaceholderSurname.classList.add('form__placeholder-surname');
  formPlaceholderName.classList.add('form__placeholder-name');
  formPlaceholderLastname.classList.add('form__placeholder-lastname');
  formPlaceholderSurname.textContent = 'Фамилия';
  formPlaceholderName.textContent = 'Имя';
  formPlaceholderLastname.textContent = 'Отчество';
  placeholderSpanSurname.textContent = '*';
  placeholderSpanName.textContent = '*';
  formWrapContainer.classList.add('form__wrap');
  formWrapError.classList.add('container__error');
  formContainerNew.classList.add('form__new');
  btnAddContact.classList.add('form__btn-add-contacts', 'flex', 'btn-reset');
  btnAddContact.type = 'button';
  spanBtn.innerHTML = svgAddMarker;
  spanBtn.classList.add('form__btn-span', 'active');
  spanBtnHover.innerHTML = svgAddMarkerHover;
  spanBtnHover.classList.add('form__btn-span-hover');
  btnAddContact.textContent = 'Добавить контакт';
  btnAddContact.append(spanBtn, spanBtnHover);
  btnSubmit.classList.add('form__btn-save', 'btn-reset');
  btnSubmit.textContent = 'Сохранить';
  btnCancel.classList.add('form__btn-cancel', 'btn-reset');
  btnCancel.textContent = 'Отмена';
  btnClose.classList.add('form__btn-close', 'btn-reset');
  btnClose.innerHTML = svgCloseForm;
  btnClose.title = 'Закрыть';

  btnAddContact.addEventListener('click', function() {
    const contactsArr = document.querySelectorAll('.contact');
    if (contactsArr.length < 9) {
      const ContactContainer = createFieldContact();
      const contact = ContactContainer.divNew;
      formContainerNew.prepend(contact);
      btnAddContact.classList.remove('invisible');
      } else {
        const ContactContainer = createFieldContact();
        formContainerNew.prepend(ContactContainer.contact);
        btnAddContact.classList.add('invisible');
    }
  })
  //
  formPlaceholderSurname.append(placeholderSpanSurname);
  surnameContainer.append(errorContainerSurname, inputSurname, formPlaceholderSurname);

  formPlaceholderName.append(placeholderSpanName);
  nameContainer.append(errorContainerName, inputName, formPlaceholderName);

  formPlaceholderLastname.append(placeholderSpanLastname);
  lastnameContainer.append(errorContainerLastname, inputLastname, formPlaceholderLastname);

  formWrapContainer.append(formWrapError, formContainerNew, btnAddContact);
  divFormInner.append(formTitle, surnameContainer, nameContainer, lastnameContainer, formWrapContainer);
  form.append(divFormInner, btnSubmit, btnCancel, btnClose);

  return {
    form,
    inputName,
    inputSurname,
    inputLastname,
    btnCancel,
    btnClose
  }
}



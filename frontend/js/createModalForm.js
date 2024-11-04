// import { createContactItem } from "./createContact.js";
import { svgContact, svgContactHover, svgCloseForm, svgDelete } from "./svgHTML.js";

export function createModalForm() {
  const modalTitle = document.createElement('h2');
  const modalClose = document.createElement('button');
  const form = document.createElement('form');
  const inputName = document.createElement('input');
  const labelName = document.createElement('label');
  const inputSurname = document.createElement('input');
  const labelSurname = document.createElement('label');
  const inputLastName = document.createElement('input');
  const labelLastName = document.createElement('label');
  const formContainerName = document.createElement('div');
  const formContainerSurname = document.createElement('div');
  const formContainerLastName = document.createElement('div');
  const requiredName = document.createElement('span');
  const requiredSurname = document.createElement('span');
  const addContactBtn = document.createElement('button');
  const contactBtnSvg = document.createElement('span');
  const contactBtnSvgHover = document.createElement('span');
  const saveBtn = document.createElement('button');
  const cancelBtn = document.createElement('button');
  const formInner = document.createElement('div');
  const contactsContainer = document.createElement('div');
  const divContainer = document.createElement('div');
  // error block
  const errorContainer = document.createElement('div');
  const unaccepTableLetter = document.createElement('span');
  const writeName = document.createElement('span');
  const writeSurname = document.createElement('span');
  const writeLastname = document.createElement('span');
  const requiredValue = document.createElement('span');
  const requiredContacts = document.createElement('span');
  //

  modalTitle.classList.add('modal__title');
  formInner.classList.add('form__inner');
  modalClose.classList.add('modal__close', 'btn-reset');
  form.classList.add('modal__form');
  formContainerName.classList.add('modal__container');
  formContainerSurname.classList.add('modal__container');
  formContainerLastName.classList.add('modal__container');
  inputName.classList.add('modal__input');
  inputSurname.classList.add('modal__input');
  inputLastName.classList.add('modal__input');
  labelName.classList.add('modal__label');
  labelSurname.classList.add('modal__label');
  labelLastName.classList.add('modal__label');
  requiredName.classList.add('modal__label');
  requiredSurname.classList.add('modal__label');
  addContactBtn.classList.add('modal__btn-contact', 'btn-reset');
  saveBtn.classList.add('form__btn-save', 'btn-reset');
  cancelBtn.classList.add('modal__btn-cancel', 'btn-reset');
  contactsContainer.classList.add('modal__contact');
  contactBtnSvg.classList.add('modal__btn-svg', 'default', 'active');
  contactBtnSvgHover.classList.add('modal__btn-svg', 'hover');

  labelName.for = 'Name';
  labelSurname.for = 'Surname';
  labelLastName.for = 'Lastname';
  inputName.id = 'Name';
  inputSurname.id = 'Surname';
  inputLastName.id = 'LastName';
  inputName.type = 'text';
  inputSurname.type = 'text';
  inputLastName.type = 'text';
  inputName.placeholder = 'Имя';
  inputSurname.placeholder = 'Фамилия';
  inputLastName.placeholder = 'Отчество';
  //
  modalTitle.textContent = 'Новый клиент';
  labelName.textContent = 'Имя';
  labelSurname.textContent = 'Фамилия';
  labelLastName.textContent = 'Отчество';
  addContactBtn.textContent = 'Добавить контакт';
  saveBtn.textContent = 'Сохранить';
  cancelBtn.textContent = 'Отмена';
  requiredName.textContent = '*';
  requiredSurname.textContent = '*';
  contactBtnSvg.innerHTML = svgContact;
  contactBtnSvgHover.innerHTML = svgContactHover;
  modalClose.innerHTML = svgCloseForm;
  modalClose.type = 'button';
  addContactBtn.type = 'button';
  cancelBtn.type = 'button';
  //
  errorContainer.id = 'modal_error';
  unaccepTableLetter.id = 'unaccepTableLetter';
  writeName.id = 'writeName';
  writeSurname.id = 'writeSurname';
  writeLastname.id = 'writeLastname';
  requiredContacts.id = 'requiredContacts';
  requiredValue.id = 'requiredValue';
  //
  addContactBtn.append(contactBtnSvg, contactBtnSvgHover);

  labelName.append(requiredName);
  labelSurname.append(requiredSurname);
  formContainerName.append(inputName, labelName);
  formContainerSurname.append(inputSurname, labelSurname);
  formContainerLastName.append(inputLastName, labelLastName);
  contactsContainer.append(divContainer, addContactBtn);
  formInner.append(modalTitle, formContainerName, formContainerSurname, formContainerLastName);
  errorContainer.append(unaccepTableLetter, writeName, writeSurname, writeLastname, requiredContacts, requiredValue);
  unaccepTableLetter.id = 'unaccepTableLetter';
  requiredValue.id = 'requiredValue';
  form.append(
    formInner,
    contactsContainer,
    errorContainer,
    saveBtn,
    cancelBtn,
    modalClose
  );
  addContactBtn.addEventListener('mousemove', () => {
    contactBtnSvg.classList.remove('btn-contact__svg--active');
    contactBtnSvgHover.classList.add('btn-contact__svg--active');
  });

  addContactBtn.addEventListener('mouseleave', () => {
    contactBtnSvg.classList.add('btn-contact__svg--active');
    contactBtnSvgHover.classList.remove('btn-contact__svg--active');
  });
  addContactBtn.addEventListener('click', (e) => {
    contactsContainer.classList.add('addpadding');
    const functionCreateContact = createContactfield();
    const contact = functionCreateContact.contact;
    const l = document.querySelectorAll('.contact__container');
    if (l.length == 1) {
      l[0].classList.remove('addmargin');
    }
    if (l.length > 0) {
      l.forEach(el => {
        el.classList.add('addmargin');
      })
    }
    if(l.length < 9) {
      divContainer.append(contact);
      // custom select
      const element = functionCreateContact.contactList;
      const choices = new Choices(element, {
        allowHTML: true,
        searchEnabled: false,
        placeholder: true,
        itemSelectText: '',
        shouldSort: false,
        fuseOptions: {
          includeScore: true
        },
      });
      addContactBtn.classList.add('active');
      addContactBtn.classList.remove('disabled');
    } else {
      addContactBtn.classList.add('disabled');
    }

  });
  return {
    modalTitle,
    modalClose,
    form,
    inputName,
    labelName,
    inputSurname,
    labelSurname,
    inputLastName,
    labelLastName,
    formContainerName,
    formContainerSurname,
    formContainerLastName,
    requiredName,
    requiredSurname,
    addContactBtn,
    contactBtnSvg,
    contactBtnSvgHover,
    saveBtn,
    cancelBtn,
    formInner,
    contactsContainer,
    divContainer
  };

}
export function createContactfield() {
  const contact = document.createElement('div');
  const contactList = document.createElement('select');
  const contactPhone = document.createElement('option');
  const contactVk = document.createElement('option');
  const contactFb = document.createElement('option');
  const contactEmail = document.createElement('option');
  const contactOther = document.createElement('option');
  const contactInput = document.createElement('input');
  const contactDelete = document.createElement('button');
  tippy(contactDelete, {
    content: 'Удалить контакт',
  });
  //
  contact.classList.add('contact__container');
  contactList.classList.add('contact__select', 'select');
  contactPhone.classList.add('contact__option');
  contactVk.classList.add('contact__option');
  contactFb.classList.add('contact__option');
  contactEmail.classList.add('contact__option');
  contactOther.classList.add('contact__option');
  contactInput.classList.add('contact__input');
  contactDelete.classList.add('contact__btn-delete', 'btn-reset');
  contactDelete.type = 'button';
  contactPhone.textContent = 'Телефон';
  contactVk.textContent = 'VK';
  contactEmail.textContent = 'Email';
  contactFb.textContent = 'Facebook';
  contactOther.textContent = 'Другое';
  contactInput.placeholder = 'Введите данные контакта';
  contactInput.type = 'text';
  contactDelete.innerHTML = svgDelete;
  //
  contact.append(contactList, contactInput, contactDelete);
  contactList.append(contactPhone, contactEmail, contactVk, contactFb, contactOther);

  contactDelete.addEventListener('click', () => {
    contact.remove();
    const contactContainer = document.querySelector('.modal__contact');
    const l = document.querySelectorAll('.contact__container');
    const btn = document.querySelector('.modal__btn-contact');
    if(l.length == 0) {
      btn.classList.remove('active');
      contactContainer.classList.remove('addpadding');
    }
  });
  contactInput.addEventListener('change', () => {
    contactDelete.classList.remove('visible');
    if(contactInput.value !== '') {
      contactDelete.classList.add('visible');
    }
  })
  return {
    contact,
    contactList,
    contactInput,
    contactDelete
  }
}


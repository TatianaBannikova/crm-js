import { addClient } from "./сlientApi.js";
import { createModalForm } from "./createModalForm.js";
import { validateContacts, validateModalForm } from "./validateForm.js";
import { renderTable } from "./index.js";

export function addClientModal() {
  const main = document.querySelector('.main');
  const modalWindow = document.createElement('div');
  const ModalForm = createModalForm();
  const form = ModalForm.form;
  modalWindow.append(form);
  modalWindow.classList.add("main__modal", "modal--open");
  setTimeout(() => {
    form.classList.add("active");
  }, 300);
  main.append(modalWindow);
  const btnCloseForm = ModalForm.modalClose;
  btnCloseForm.addEventListener('click', () => {
    modalWindow.remove();
  });
  const cancelBtn = ModalForm.cancelBtn;
  cancelBtn.addEventListener('click', () => {
    modalWindow.remove();
  })
  ModalForm.form.addEventListener('submit', async (e) => {
    e.preventDefault();
    // console.log(validateModalForm());
    if (!validateModalForm()) {
      return;
    }
    const typesContacts = document.querySelectorAll('.contact__select');
    const contactValues = document.querySelectorAll('.contact__input');

    let contacts = [];
    let clientObj = {};
      for (let i = 0; i < typesContacts.length; i++) {
        if(!validateContacts(typesContacts[i], contactValues[i])) {
          return;
        }
        contacts.push({
          type: typesContacts[i].value,
          value: contactValues[i].value
        });
      }
    clientObj.name = ModalForm.inputName.value;
    clientObj.surname = ModalForm.inputSurname.value;
    clientObj.lastName = ModalForm.inputLastName.value;
    clientObj.contacts = contacts;
  console.log(validateModalForm());
  if (validateModalForm()) {
    await addClient(clientObj);
    await renderTable();
  }
    // await addClient(clientObj);
    modalWindow.remove();
  })
}


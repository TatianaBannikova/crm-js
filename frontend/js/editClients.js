import { deleteClientModal } from "./deleteModalForm.js";
import { createModalForm, createContactfield } from "./createModalForm.js";
import { pathClient } from "./сlientApi.js";
import { renderTable } from "./index.js";
import { validateModalForm, validateContacts } from "./validateForm.js";
export function editClientModal(data) {
  const modal = document.createElement('div');
  const ModalForm = createModalForm();

  modal.classList.add('main__modal-edit', "modal--open");
  ModalForm.modalTitle.textContent = 'Изменить данные';
  const idSpan = document.createElement('span');
  idSpan.textContent = 'ID' + ':' + ' ' + data.id.substr(0, 6);
  ModalForm.inputName.value = data.name;
  ModalForm.inputSurname.value = data.surname;
  ModalForm.inputLastName.value = data.lastName;
  if (data.contacts !== '') {
    for (const contact of data.contacts) {
      const createContact = createContactfield();
      createContact.contactList.value = contact.type;
      createContact.contactInput.value = contact.value;
      createContact.contactDelete.classList.add('visible');
      const element = createContact.contactList;
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
      createContact.contact.classList.add('addmargin');
      ModalForm.contactsContainer.classList.add('addpadding');
      ModalForm.addContactBtn.classList.add('active');
      ModalForm.divContainer.append(createContact.contact);
    }
  }
  ModalForm.modalTitle.append(idSpan);
  ModalForm.cancelBtn.textContent = 'Удалить клиента';
  ModalForm.labelName.append(ModalForm.requiredName);
  ModalForm.labelSurname.append(ModalForm.requiredSurname);
  ModalForm.formContainerName.append(ModalForm.inputName, ModalForm.labelName);
  ModalForm.formContainerSurname.append(ModalForm.inputSurname, ModalForm.labelSurname);
  ModalForm.formContainerLastName.append(ModalForm.inputLastName, ModalForm.labelLastName);
  ModalForm.contactsContainer.append(ModalForm.divContainer, ModalForm.addContactBtn);
  ModalForm.formInner.append(ModalForm.modalTitle, ModalForm.formContainerName, ModalForm.formContainerSurname, ModalForm.formContainerLastName);
  ModalForm.form.append(
    ModalForm.formInner,
    ModalForm.contactsContainer,
    ModalForm.saveBtn,
    ModalForm.cancelBtn,
    ModalForm.modalClose
  );
  modal.append(ModalForm.form);
  setTimeout(() => {
    ModalForm.form.classList.add("active");
  }, 300);
  ModalForm.cancelBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const main = document.querySelector('.main');
    const deleteClientfunction = deleteClientModal(data.id);
    main.append(deleteClientfunction.modal);
  })
  ModalForm.form.addEventListener('submit', async (e) => {
    e.preventDefault();
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
      await pathClient(clientObj, data.id);
      await renderTable();
    }
    modal.remove();

  })
  ModalForm.modalClose.addEventListener('click', (e) => {
    e.preventDefault();
    modal.remove();
  })
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.remove();
    }
  });
  return modal;
}

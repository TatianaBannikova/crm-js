import { deleteClientModal } from "./deleteModalForm.js";
import { editClientModal } from "./editClients.js";
import { svgTel, svgFacebook, svgVk, svgEmail, svgOther, svgEditSpinner, svgDeleteSpinner } from "./svgHTML.js";
import { renderTable } from "./index.js";;
//
export function createTableSectionClient(data) {
  const clientTr = document.createElement('tr');
  const clientId = document.createElement('td');
  const clientFullName = document.createElement('td');
  const clientName = document.createElement('span');
  const clientSurname = document.createElement('span');
  const clientLastName = document.createElement('span');
  const clientCreated = document.createElement('td')
  const createDate = document.createElement('span');
  const createdTime = document.createElement('span');
  const clientChanged = document.createElement('td');
  const changedDate = document.createElement('span');
  const changedTime = document.createElement('span');
  const clientContacts = document.createElement('td');
  const clientActions = document.createElement('td');
  const clientEditBtn = document.createElement('button');
  const clientDeleteBtn = document.createElement('button');

  const spinnerforEditBtn = document.createElement('span');
  const spinnerforDeleteBtn = document.createElement('span');
  //
  clientTr.classList.add('table__row', 'client');
  clientTr.id = data.id;
  clientId.classList.add('client__id');
  clientFullName.classList.add('client__full-name');
  clientName.classList.add('client__name');
  clientSurname.classList.add('client__surname');
  clientLastName.classList.add('client__lastname');
  clientCreated.classList.add('client__created');
  createDate.classList.add('created__date');
  createdTime.classList.add('created__time');
  clientChanged.classList.add('client__changed');
  changedDate.classList.add('changed__date');
  changedTime.classList.add('changed__time');
  clientContacts.classList.add('client__contacts', 'contact');
  clientActions.classList.add('client__actions');
  clientContacts.classList.add('client__contacts');
  clientDeleteBtn.classList.add('client__delete-btn', 'btn-reset');
  clientEditBtn.classList.add('client__edit-btn', 'btn-reset');
  spinnerforEditBtn.classList.add('client__spinner');
  spinnerforDeleteBtn.classList.add('client__spinner');
  spinnerforEditBtn.innerHTML = svgEditSpinner;
  spinnerforDeleteBtn.innerHTML = svgDeleteSpinner;

  //
  function createContactLink (type, value, element, svg, item) {
    element = document.createElement('a');
    element.classList.add('contacts__link');
    element.innerHTML = svg;
    if (type === 'Email') {
        element.href = `mailto:${value.trim()}`
    } else if (type === 'Телефон') {
        element.href = `tel:${value.trim()}`;
    } else {
        element.href = value.trim();
    }
    item.append(element);
    let text = '';
    switch (type) {
      case 'Телефон':
        tippy(element, {
          content: text + value,
          animation: 'scale',
        });
        break;
      case 'Email':
        text = 'Email:';
        tippy(element, {
          content: text + value,
          animation: 'scale',
        });
        break;
        case 'Facebook':
          text = 'Facebook:' + value;
          tippy(element, {
            content: text,
            animation: 'scale',
          });
          break;
          case 'VK':
            text = 'Vk:' + value;
            tippy(element, {
              content: text,
              animation: 'scale',
            });
            break;
          case 'Twitter':
            text = 'Twitter:' + value;
            tippy(element, {
              content: text,
              animation: 'scale',
            });
            break;
            case 'Другое':
              tippy(element, {
                content: value,
                animation: 'scale',
              });
              break;
    }
  }
  function createContactType(type, value, param) {
    switch (type) {
      case 'Телефон':
        let phone;
        createContactLink(type, value, phone, svgTel, param);
        break;
      case 'Facebook':
        let fb;
        createContactLink(type, value, fb, svgFacebook, param);
        break;
      case 'VK':
        let vk;
        createContactLink(type, value, vk, svgVk, param);
        break;
      case 'Email':
        let email;
        createContactLink(type, value, email, svgEmail, param);
        break;
      case 'Другое':
        let other;
        createContactLink(type, value, other, svgOther, param);
        break;
      default:
          break;
      }
  }
  for (const contact of data.contacts) {
    createContactType(contact.type, contact.value, clientContacts);
  }
  //
  clientDeleteBtn.addEventListener('click', async(e) => {
    e.preventDefault();
    clientDeleteBtn.classList.add('action');
    const spinner = clientDeleteBtn.querySelector('.client__spinner');
    spinner.classList.add('visible');
    setTimeout(async () => {
      clientDeleteBtn.classList.remove('action');
      spinner.classList.remove('visible');
      const main = document.querySelector('.main');
      const deleteClientfunction = deleteClientModal(data.id);
      main.append(deleteClientfunction.modal);
      setTimeout(() => {
        deleteClientfunction.modalForm.classList.add('active');
      }, 300);
      await renderTable();
    }, 1000);
  });
  clientEditBtn.addEventListener('click', (e) => {
    e.preventDefault();
    clientEditBtn.classList.add('action');
    const spinner = clientEditBtn.querySelector('.client__spinner');
    spinner.classList.add('visible');
    setTimeout(() => {
      clientEditBtn.classList.remove('action');
      spinner.classList.remove('visible');
      const editClientfunction = editClientModal(data);
      const main = document.querySelector('.main');
      main.append(editClientfunction);
    }, 1000);
  });
  //
  clientId.textContent = data.id.substr(0, 6);
  clientName.textContent = data.name;
  clientSurname.textContent = data.surname;
  clientLastName.textContent = data.lastName;
  clientEditBtn.textContent = 'Изменить';
  clientDeleteBtn.textContent = 'Удалить';

  function formatDate(container, date) {
    date = new Date(date);
    let year = date.getFullYear();
    let mounth = date.getMonth() + 1;
    let day = date.getDate();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    if (day < 10) day = '0' + day;
    if (mounth < 10) mounth = '0' + mounth;
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    const tableDate = day + "." + mounth + "." + year;
    const tableTime = hours + ':' + minutes;
    const spanDate = document.createElement('span');
    const spanTime = document.createElement('span');
    spanDate.textContent = tableDate;
    spanTime.textContent = tableTime;
    container.append(spanDate, spanTime);
    return container;
  }
  formatDate(createDate, data.createdAt);
  formatDate(changedDate, data.updatedAt);
  clientFullName.append(clientSurname, clientName, clientLastName);
    clientCreated.append(createDate);
    clientChanged.append(changedDate);
    clientActions.append(clientEditBtn, clientDeleteBtn);
    clientDeleteBtn.append(spinnerforDeleteBtn);
    clientEditBtn.append(spinnerforEditBtn);
    clientTr.append(
      clientId,
      clientFullName,
      clientCreated,
      clientChanged,
      clientContacts,
      clientActions
    );
    return clientTr;
}

import { ClientsArr } from "./clienteArr.js";

let copyArray= JSON.parse(JSON.stringify(ClientsArr));
function renderTable(array) {
  let tbody = document.querySelector('.table__tbody');
  array.forEach(function(client) {
    let trRow = document.createElement('tr');

    let idTr = document.createElement('td');
    idTr.textContent = client.id;

    const nameTr = document.createElement('td');
    nameTr.textContent = client.surname + ' ' + client.name + ' ' + client.lastName;

    let createTimeTr = document.createElement('td');
    let dateCr = new Date(client.createdAt);
    let yearCr = dateCr.getFullYear();
    let mounthCr = dateCr.getMonth() + 1;
    let dayCr = dateCr.getDate();
    let hoursCr = dateCr.getHours();
    let minutesCr = dateCr.getMinutes();
    if (dayCr < 10) dayCr = '0' + dayCr;
    if (mounthCr < 10) mounthCr = '0' + mounthCr;
    if (hoursCr < 10) hoursCr = '0' + hoursCr;
    if (minutesCr < 10) minutesCr = '0' + minutesCr;
    createTimeTr.textContent = dayCr + '.' + mounthCr + '.' + yearCr + ' ' + hoursCr + ':' + minutesCr;

    let changeTimeTr = document.createElement('td');
    let dateCh = new Date(client.updatedAt);
    let yearCh = dateCh.getFullYear();
    let mounthCh = dateCh.getMonth() + 1;
    let dayCh = dateCh.getDate();
    // console.log(day)
    let hoursCh = dateCh.getHours();
    let minutesCh = dateCh.getMinutes();
    if (dayCh < 10) dayCh = '0' + dayCh;
    if (mounthCh < 10) mounthCh = '0' + mounthCh;
    if (hoursCh < 10) hoursCh = '0' + hoursCh;
    if (minutesCh < 10) minutesCh = '0' + minutesCh;
    changeTimeTr.textContent = dayCh + '.' + mounthCh + '.' + yearCh + ' ' + hoursCh + ':' + minutesCh;

    //contacts
    let contactTr = document.createElement('td');
    contactTr.classList.add('flex');
    createContactsClients(client.contacts, contactTr);
    let changeBtnTr = document.createElement('td');
    let changeBtn = document.createElement('button');
    let deleteBtn = document.createElement('button');
    changeBtn.classList.add('action__btn-change', 'btn-reset', 'flex');
    changeBtn.innerHTML = svgChange + svgLoading + 'Изменить';
    changeBtn.addEventListener('click', function() {
      modalWindow.classList.add('open');
      changeForm.classList.add('active');
      deleteForm.classList.remove('active');
      addForm.classList.remove('active');
      renderChangeForm(client);
      ChangeTypeOfInput();
    })
    deleteBtn.classList.add('action__btn-delete', 'btn-reset', 'flex');
    deleteBtn.innerHTML = svgCancel + 'Удалить';
    changeBtnTr.append(changeBtn, deleteBtn);
    trRow.append(idTr, nameTr, createTimeTr, changeTimeTr, contactTr, changeBtnTr);
    tbody.appendChild(trRow);

  })
}

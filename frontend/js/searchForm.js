import { createTableSectionClient } from "./renderTableClient.js";
import { findClients } from "./сlientApi.js";

export function createFindListClients(clients) {
  const findList = document.querySelector('.header__findlist');
  const inputSearch = document.querySelector('.header__input');
  //header__form
  clients.forEach(client => {
    const findItem = document.createElement('div');
    const findLink = document.createElement('a');
    //
    findItem.classList.add('header__findlist-item');
    findLink.classList.add('header__findlist-link');
    //
    findLink.textContent = `${client.name} ${client.surname} ${client.lastName}`;
    findLink.href = '#';
    findItem.append(findLink);
    findList.append(findItem);
  });
  async function reRenderTable(str) {
    try {
      const response = await findClients(str);
      const filteredResponse = response.filter(client =>
        `${client.name} ${client.surname} ${client.lastName}`
        .toLowerCase()
        .includes(str.toLowerCase())
      );

      setTimeout(() => {
        const tableBody = document.querySelector('.table__tbody');
        tableBody.innerHTML = '';

        filteredResponse.forEach(element => {
          tableBody.append(createTableSectionClient(element));
        });
      }, 300);
    } catch (error) {
      console.error(error);
    }
  }
  inputSearch.addEventListener('input', async () => {
    const value = inputSearch.value.trim();
    const Links = document.querySelectorAll('.header__findlist-link');
    if (value !== '') {
      await reRenderTable(value);
      Links.forEach(link => {
        if (link.innerText.toLowerCase().search(value.toLowerCase()) == -1) {
          link.classList.add('hidden');
          link.innerHTML = link.innerText;
        } else {
          link.classList.remove('hidden');
          findList.classList.remove('hidden');
        }
      });
    } else {
      Links.forEach(link => {
        const tableBody = document.querySelector('.table__tbody');
        tableBody.innerHTML = '';
        clients.forEach(client => tableBody.append(createTableSectionClient(client)));
        findItem.classList.remove('hidden');
        findList.classList.add('hidden');
        link.innerHTML = link.innerText;
      });
    }
  });
};

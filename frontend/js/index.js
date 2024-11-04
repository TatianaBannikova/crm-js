// import { createModalForm } from "./createModalForm.js";
import { addClientModal } from "./createClient.js";
import { createTableSectionClient } from "./renderTableClient.js";
import { getClients } from "./сlientApi.js";
import { createPreloader } from "./preloader.js";
import { sortingTable } from "./sortingTable.js";
import { createFindListClients } from "./searchForm.js";

const buttonAddModal = document.querySelector('.main__btn-add');
buttonAddModal.addEventListener('click', (e) => {
  e.preventDefault();
  addClientModal();
});

export async function renderTable() {
  const preloader = createPreloader();
  const tableBody = document.querySelector(".table__tbody");
  setTimeout(() => {
    preloader.classList.add('hidden');
    preloader.remove();
  }, 1500);
  try {
    const clientsArr = await getClients();
    createFindListClients(clientsArr);
    tableBody.innerHTML = '';
    clientsArr.forEach(element => {
      tableBody.append(createTableSectionClient(element));
    });
  } catch (error) {
    console.log(error);
  }
}

await renderTable();
document.addEventListener('DOMContentLoaded', () => {
  sortingTable();
});

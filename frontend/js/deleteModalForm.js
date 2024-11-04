import { deleteClient } from "./сlientApi.js";
import { svgCloseForm } from "./svgHTML.js";
export function deleteClientModal(id) {
  const modal = document.createElement('div');
  const modalForm = document.createElement('form');
  const modalTitle = document.createElement('h2');
  const modalText = document.createElement('p');
  const modalDeleteBtn = document.createElement('button');
  const modalBackBtn = document.createElement('button');
  const modalCloseBtn = document.createElement('button');
  //
  modal.classList.add('main__modal-delete', 'active', 'modal', 'modal--open');
  modalForm.classList.add('modal__form-delete');
  modalTitle.classList.add('modal__title');
  modalText.classList.add('modal__text');
  modalBackBtn.classList.add('modal__btn-back', 'btn-reset');
  modalCloseBtn.classList.add('modal__close-btn', 'btn-reset');
  modalDeleteBtn.classList.add('modal__btn-delete', 'btn-reset');
  //
  modalTitle.textContent = 'Удалить клиента';
  modalText.textContent = 'Вы действительно хотите удалить данного клиента?';
  modalDeleteBtn.textContent = 'Удалить';
  modalBackBtn.textContent = 'Отмена';
  modalCloseBtn.innerHTML = svgCloseForm;
  //
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.remove();
    }
  });
  modalDeleteBtn.addEventListener('click', async (e) => {
      await deleteClient(id);
      modal.remove();
  })
  modalCloseBtn.addEventListener('click', () => modal.remove());
  modalBackBtn.addEventListener('click', () => modal.remove());
  //
  modalForm.append(
    modalTitle,
    modalText,
    modalCloseBtn,
    modalDeleteBtn,
    modalCloseBtn,
    modalBackBtn
  );
  modal.append(modalForm);
  //
  return {
    modal,
    modalForm,
    modalDeleteBtn
  }
}

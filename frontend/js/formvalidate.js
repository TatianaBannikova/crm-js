export function ValidateForm(form) {
  const surnameContainer = form.querySelector('.form__container-surname');
  const surnameInput = surnameContainer.querySelector('.form__surname');
  const errorMessSurname = surnameContainer.querySelector('.conatiner__error');
  errorMessSurname.classList.remove('visible');
  if (surnameInput.value === '') {
    errorMessSurname.classList.add('visible');
  }
  const nameContainer = form.querySelector('.form__container-name');
  const nameInput = nameContainer.querySelector('.form__name');
  const errorMessName = nameContainer.querySelector('.conatiner__error');
  errorMessName.classList.remove('visible');
  if (nameInput.value === '') {
    errorMessName.classList.add('visible');
  }
  if (form.classList.contain('add__form')) {
    const contactArr = form.querySelectorAll('.contact');
    contactArr.forEach(function(container) {
      container.classList.remove('error');
      const typeOfContact = container.querySelector('.select');
      const inputOfContact = container.querySelector('.contact__input');
      let value = inputOfContact.value.trim();
      if (typeOfContact.value === 'Телефон' ||
        typeOfContact.value === 'Доп. телефон') {
          if(value.length !== 11) {
            alert('Введите правильный номер телефона');
            container.classList.add('error');
          }
      }
      if(typeOfContact.value === 'Email') {
        if(value.includes('@')) {
            alert('Введите правильный адрес электронной почты');
            container.classList.add('error');
        }
      }
    });
  }
};

export function validateModalForm() {
  const Name = document.getElementById('Name');
  const Surname = document.getElementById('Surname');
  const Lastname = document.getElementById('LastName');
  // const errorContainer = document.getElementById('modal_error');
  const unaccepTableLetter = document.getElementById('unaccepTableLetter');
  const writeName = document.getElementById('writeName');
  const writeSurname = document.getElementById('writeSurname');
  const writeLastname = document.getElementById('writeLastname');
  const requiredContacts = document.getElementById('requiredContacts');
  const requiredValue = document.getElementById('requiredValue');

  const validateArr = [
    unaccepTableLetter,
    writeName,
    writeSurname,
    writeLastname,
    requiredContacts,
    requiredValue
  ];
  const regexp = /[^а-яА-ЯёЁ]+$/g;
  function CheckFormValue(inputValue) {
    inputValue.addEventListener('input', () => {
      inputValue.classList.remove('error');
        for (const item of validateArr) {
            item.textContent = '';
        }
    });

    ['cut', 'copy', 'paste'].forEach(event => {
      inputValue.addEventListener(event, () => {
        inputValue.classList.remove('error');
        validateArr.forEach(item => item.textContent = '');
      });
  });

  inputValue.addEventListener('change', () => {
    inputValue.classList.remove('error');
        if (Surname.value && Name.value && Lastname.value) {
            for (const item of validateArr) {
                item.textContent = '';
            }
        }
    });
  };

CheckFormValue(Name);
CheckFormValue(Surname);
CheckFormValue(Lastname);
  function checkRequiredNameClient(input, message, name) {
    if (!input.value) {
      input.classList.add('error');
      message.textContent = `Введите ${name} клиента!`;
      return false;
    } else {
      message.textContent = '';
      return true;
    }
  }
  function checkRegexp(input, message, regexp) {
    if(regexp.test(input.value)) {
      input.classList.add('error');
      message.textContent = `Недопустимые символы!`;
      console.log('false');
      return false;
    }
    return true;
  };
  if(!checkRequiredNameClient(Name, writeName, 'Имя')) { return false };
  if(!checkRequiredNameClient(Surname, writeSurname, 'Фамилия')) { return false };
  if(!checkRequiredNameClient(Lastname, writeLastname, 'Отчество')) { return false };
  if(!checkRegexp(Name, requiredValue, regexp)) { return false };
  if(!checkRegexp(Surname, requiredValue, regexp)) { return false };
  if(!checkRegexp(Lastname, requiredValue, regexp)) { return false };
  return true;
}
export function validateContacts(contactType, contactInput) {
  const writeValue = document.getElementById('writeName');
  const onlyNumbers = /[^0-9]+$/g;
  const onlyEmailEnglish = /[^a-zA-z|@|.]+$/g;

  function checkInput(inputValue) {
    inputValue.addEventListener('input', () => {
      inputValue.classList.remove('error');
      writeValue.textContent = '';
    });

    ['cut', 'copy', 'paste'].forEach(event => {
      inputValue.addEventListener(event, () => {
        inputValue.classList.remove('error');
        writeValue.textContent = '';
      });
    });
  };
  function showErrorMessage(message, block, input) {
    block.textContent = message;
    input.classList.add('error');
  }
  checkInput(contactInput);
  if(!contactInput.value) {
    showErrorMessage('Заполните поле контакта', writeValue, contactInput);
    return false;
  }
  switch (contactType.value) {
    case 'Телефон':
      if(onlyNumbers.test(contactInput.value)) {
        showErrorMessage('Допустимы только цифры', writeValue, contactInput);
        return false;
      } else if(contactInput.value.length !== 11) {
        showErrorMessage('Номер должен состоять из 11 цифр!', writeValue, contactInput);
        return false;
      }
      return true;
    case 'Email':
      if(onlyEmailEnglish.test(contactInput.value)) {
        showErrorMessage('Неправильный Email!', writeValue, contactInput);
        return false;
      }
      return true;
    default:
      return true;
  }
  return true;
}

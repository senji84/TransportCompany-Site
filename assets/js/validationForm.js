let form = document.querySelector('.js-form'),
  formInputs = document.querySelectorAll('.js-input'),
  inputEmail = document.querySelector('.js-input-email'),
  inputPhone = document.querySelector('.js-input-phone'),
  thanksModal = document.querySelector('#thanksModal');

function validateEmail(email) {
  let re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function validatePhone(phone) {
  let re = /^[0-9\s]*$/;
  return re.test(String(phone));
}

form.addEventListener('submit', function (event) {
  let emailVal = inputEmail.value,
    phoneVal = inputPhone.value,
    emptyInputs = Array.from(formInputs).filter((input) => input.value === '');

  formInputs.forEach(function (input) {
    if (input.value === '') {
      input.classList.add('error');
    } else {
      input.classList.remove('error');
    }
  });

  if (emptyInputs.length !== 0) {
    event.preventDefault();
    return false;
  }

  if (!validatePhone(phoneVal)) {
    inputPhone.classList.add('error');
    event.preventDefault();
    return false;
  } else {
    inputPhone.classList.remove('error');
  }

  if (!validateEmail(emailVal)) {
    inputEmail.classList.add('error');
    event.preventDefault();
    return false;
  } else {
    inputEmail.classList.remove('error');
  }

  if (
    emptyInputs.length === 0 &&
    validatePhone(phoneVal) &&
    validateEmail(emailVal)
  ) {
    event.preventDefault();
    thanksModal.classList.add('show');
  }
});

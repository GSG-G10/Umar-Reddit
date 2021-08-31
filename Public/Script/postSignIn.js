const email = document.getElementById('email');
const password = document.getElementById('password');
const submit = document.getElementById('submit');
const errors = document.getElementById('errors');

submit.addEventListener('click', () => {
  const userData = {
    email: email.value,
    password: password.value,
  };

  fetch('/signInValidation', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userData),
  })
    .then((response) => {
      if (response.status === 403) {
        response.json()
          .then((data) => {
            errors.textContent = data.message;
          });
      } else if (response.status === 200) {
        if (response.redirected) {
          window.location.href = response.url;
        }
      }
    });
});

const MIN_EMAIL_LENGTH = 5;
const MIN_PASSWORD_LENGTH = 6;
const validUserEmail = 'user@gmail.com';
const validAdminEmail = 'admin@gmail.com';
const validUserPassword = 'UserPass';
const validAdminPassword = 'AdminPass';

let enteredEmail = prompt('Please enter your email.', '');

if (enteredEmail === '' || enteredEmail === null) {
  alert('Canceled.');
} else if (enteredEmail.length < MIN_EMAIL_LENGTH) {
  alert('I don\'t know any emails having name length less than 5 symbols.');
} else if (enteredEmail === validUserEmail || enteredEmail === validAdminEmail) {

  let enteredPassword = prompt('Please enter your password', '');

  if (enteredPassword === '' || enteredPassword === null) {
    alert('Canceled.');
  } else if (enteredEmail === validUserEmail && enteredPassword === validUserPassword ||
    enteredEmail === validAdminEmail && enteredPassword === validAdminPassword) {

    let changedPassword = confirm('Do you want to change your password?');

    if (changedPassword === false) {
      alert('You have failed the change.');
    } else {

      let currentPassword = prompt('Please enter your current password', '');

      if (currentPassword === '' || currentPassword === null) {
        alert('Canceled.');
      } else if (enteredPassword === currentPassword) {

        let newPassword = prompt('Please enter your new password.', '');

        if (newPassword === '' || newPassword === null) {
          alert('Canceled.');
        } else if (newPassword.length < MIN_PASSWORD_LENGTH) {
          alert('It\'s too short password. Sorry.');
        } else {

          let reenteredPassword = prompt('Please reenter your new password.', '');

          if (newPassword === reenteredPassword) {
            alert('You have successfully changed your password.')
          } else {
            alert('You wrote the wrong password.')
          }
        }
      } else {
        alert('Wrong password.');
      }
    }
  } else {
    alert('Wrong password.');
  }
} else {
  alert('I don\'t know you.');
}

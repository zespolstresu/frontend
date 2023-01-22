import * as yup from 'yup';
import YupPassword from 'yup-password';
YupPassword(yup);

export const VRegister = yup.object().shape({
  firstName: yup.string().min(2).required('Podaj imię! (min. 2 znaki)'),
  lastName: yup.string().min(2).required('Podaj nazwisko! (min. 2 znaki)'),
  username: yup.string().min(5).required('Podaj nick! (min. 5 znaków)'),
  email: yup.string().email().required('To nie jest poprawny e-mail!'),
  password: yup.
    string()
    .min(5)
    .minUppercase(1, 'Hasło musi zawierać co najmniej 1 wielką litera')
    .minNumbers(1, 'Hasło musi zawierać co najmniej jeden numer')
    .required('Za mała ilośc znaków w haśle!'),
  passwordConfirmation: yup.string().oneOf([yup.ref('password'), null], 'Hasła muszą do siebie pasować!')
});
export const prepareNavLinks = (userData: any) => userData ? ([
  { link: '/', text: 'Główna' },
  { link: '/profile', text: 'Profil' },
  { link: '/contact', text: 'Kontakt' },
]) : ([
  { link: '/login', text: 'Zaloguj' },
  { link: '/register', text: 'Zarejestruj' }
]);
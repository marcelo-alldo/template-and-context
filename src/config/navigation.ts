export interface NavigationType {
  key: string;
  label: string;
  url: string;
}

const navigation: NavigationType[] = [
  { key: 'home', label: 'Home', url: '/' },
  { key: 'contacts', label: 'Contatos', url: '/contacts' },
  { key: 'contacts-create', label: 'Criar Contato', url: '/contacts/create' },
];

export default navigation;

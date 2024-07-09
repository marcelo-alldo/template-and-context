export interface NavigationType {
  key: string;
  label: string;
  url: string;
}

const navigation: NavigationType[] = [
  { key: 'home', label: 'Home', url: '/' },
  { key: 'categories', label: 'Categorias', url: '/' },
  { key: 'products', label: 'Produtos', url: '/products' },
];

export default navigation;

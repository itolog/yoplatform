interface Items {
  id: number;
  title: string;
  path: string;
}

const navItems: Items[] = [
  {
    id: 1,
    title: 'home',
    path: '/home',
  },
  {
    id: 2,
    title: 'auth',
    path: '/auth',
  },
];

export default navItems;

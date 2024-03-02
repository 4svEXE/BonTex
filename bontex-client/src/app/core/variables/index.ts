import { SectionItem } from './../interfaces/index';
import { ILink } from './../interfaces/';

export const HeaderLinks: ILink[] = [
  { title: 'Акції', path: '/sales' },
  { title: 'Доставка та оплата', path: '/prices' },
  { title: 'Обмін та повернення', path: '/help' },
  { title: 'Про нас', path: '/help' },
  // { title: 'Update profile', path: '/update-profile' },
];

export const Sections: SectionItem[] = [
  {
    title: 'Клієнтам',
    items: [
      { label: 'Про нас', link: '/' },
      { label: 'Контакти', link: '/' },
      { label: 'Угода користувача', link: '/' },
      { label: 'Питання та відповіді', link: '/' },
      { label: 'Відгуки про магазин', link: '/' },
    ],
  },
  {
    title: 'Каталог',
    items: [
      { label: 'Всі килими', link: '/' },
      { label: "Дитячі килими Україна м'які", link: '/' },
      { label: 'Дитячі килими Україна щільні', link: '/' },
      { label: 'Дитячі килими Україна круглі', link: '/' },
      { label: 'Килими бавовняні Туреччина', link: '/' },
    ],
  },
  {
    title: 'Контакти',
    items: [
      { label: '097 328 58 54', icon: 'phone', value: 'tel:+0973285854' },
      { label: 'м.Івано-Франковськ', icon: 'location', value: '/' },
      {
        label: '0973285854',
        icon: 'whatsApp',
        value: 'https://wa.me/0973285854',
      },
      {
        label: 'bontex.com.ua@gmail.com',
        icon: 'email',
        value: 'mailto:bontex.com.ua@gmail.com',
      },
    ],
  },
];

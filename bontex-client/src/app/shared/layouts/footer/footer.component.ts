import { Component } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { SvgService } from 'src/app/shared/services/svg.service';

interface SectionItem {
  title: string;
  items: (MenuItem | ContactItem)[];
}

interface MenuItem {
  label: string;
  link: string;
  icon?: string;
  value?: string;
}

interface ContactItem {
  label: string;
  icon: string;
  value: string;
  link?: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  safeSvgCodes: { [key: string]: SafeHtml } = {};
  imgPath: string = 'assets/img/shared/layout/';

  sections: SectionItem[] = [
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

  constructor(private svgService: SvgService) {}

  ngOnInit(): void {
    this.safeSvgCodes = this.svgService.getSafeSvgCodes();
  }
}

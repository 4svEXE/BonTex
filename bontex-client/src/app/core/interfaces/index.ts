export interface ILink {
  title: string; // "Блог"
  path: string; // "/blog"
}

export interface SectionItem {
  title: string;
  items: FooterNavItem[];
}

export interface FooterNavItem {
  label: string;
  link?: string;
  icon?: string;
  value?: string;
}

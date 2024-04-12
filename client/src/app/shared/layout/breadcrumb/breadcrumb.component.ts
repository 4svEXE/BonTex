import { Component, Input } from '@angular/core';
import { NavigationEnd, ActivatedRoute, Router } from '@angular/router';

import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss'],
})
export class BreadcrumbComponent {
  @Input() urlLocalise: { [key: string]: string } = {
    catalog: 'Каталог',
    rugs: 'Килими',
  };

  @Input() currentPageTitle!: string;

  items: MenuItem[] | undefined;

  home: MenuItem | undefined;
  static ROUTE_DATA_BREADCRUMB: any;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.items = [
    //   { label: 'Каталог', routerLink: '/catalog' },
    // ];

    // Щоб коректно працювало треба робити масив з локальною назвою {info: "Інформація"}

    this.home = { icon: 'pi pi-home', routerLink: '/' };

    this.router.events
      .pipe(
        filter((event) => {
          return event instanceof NavigationEnd;
        })
      )
      .subscribe(() => {
        this.items = this.createBreadcrumbs(this.activatedRoute.root);
      });
  }

  private isLastChild = false
  private createBreadcrumbs(
    route: ActivatedRoute,
    routerLink: string = '',
    breadcrumbs: MenuItem[] = []
  ): MenuItem[] {
    const children: ActivatedRoute[] = route.children;

    if (!children.length) return breadcrumbs;

    for (const child of children) {
      child.snapshot.url.map((segment) => {
        segment.path;

        if (this.urlLocalise[segment.path]) {
          breadcrumbs.push({
            label: this.urlLocalise[segment.path],
            routerLink: '/' + segment.path,
          });
        }
      });

      this.createBreadcrumbs(child, routerLink, breadcrumbs);
    }

    if (this.currentPageTitle && !this.isLastChild) {

      breadcrumbs.push({
        label: this.currentPageTitle,
      });
      this.isLastChild = true
    }

    return breadcrumbs;
  }
}

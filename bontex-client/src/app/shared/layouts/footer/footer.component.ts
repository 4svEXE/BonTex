import { Component } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Sections } from 'src/app/core/variables';
import { SvgService } from 'src/app/shared/services/svg.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  safeSvgCodes: { [key: string]: SafeHtml } = {};
  imgPath: string = 'assets/img/shared/layout/';
  sections = Sections;

  constructor(private svgService: SvgService) {}

  ngOnInit(): void {
    this.safeSvgCodes = this.svgService.getSafeSvgCodes();
  }

  navBars = [{active: false},{active: false},{active: false},]
  toggleActiveNavBox(id:number){
    this.navBars[id].active = !this.navBars[id].active

    console.log(this.navBars[id].active, id)
  }
}

import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SafeSvg } from 'src/app/core/interfaces';
import { SvgService } from 'src/app/core/services/svg.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  safeSvgCodes: SafeSvg = this.svgService.getSafeSvgCodes();

  formGroup = new FormGroup({
    search: new FormControl(''),
  });

  constructor(
    private svgService: SvgService,
    private router: Router
  ) {}

  search(){
    console.log(this.formGroup.value.search);

    this.router.navigate(['/catalog/search/', this.formGroup.value.search])
  }
}

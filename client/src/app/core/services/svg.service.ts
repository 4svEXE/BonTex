// svg.service.ts
import { Injectable } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { svgImages } from 'src/app/shared/svg';
import { SafeSvg } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class SvgService {
  constructor(private sanitizer: DomSanitizer) {}

  getSafeSvgCodes(): SafeSvg {
    const safeSvgCodes: SafeSvg = {};

    Object.keys(svgImages).forEach((key) => {
      safeSvgCodes[key] = this.sanitizer.bypassSecurityTrustHtml(
        svgImages[key]
      );
    });

    return safeSvgCodes;
  }
}

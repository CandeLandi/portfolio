import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'page-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrl: './contact-me.component.scss'
})
export class ContactMeComponent {
  emailTo : string = 'Landicandela01@gmail.com';
  cvUrl!: string;

  constructor(private translate: TranslateService) {
    this.setCvUrl();
    this.translate.onLangChange.subscribe(() => {
      this.setCvUrl();
    });
  }

  setCvUrl() {
    const currentLang = this.translate.currentLang || this.translate.getDefaultLang();
    this.cvUrl = currentLang === 'en' ? 'assets/Candela-Landi-ENG.pdf' : 'assets/landi-candela.cv.pdf';
  }
}

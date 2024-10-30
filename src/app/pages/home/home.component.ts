import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  cvUrl!: string;

  constructor(private translate: TranslateService) {
    this.setCvUrl();

    this.translate.onLangChange.subscribe(() => {
      this.setCvUrl();
    });
  }

  setCvUrl() {
    const currentLang = this.translate.currentLang || this.translate.getDefaultLang();
    this.cvUrl = currentLang === 'en' ? 'assets/Candela-Landi-ENG.pdf' : 'assets/Candela-Landi-ES.pdf';

  }
}

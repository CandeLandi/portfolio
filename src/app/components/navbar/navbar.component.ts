import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  active: string = '#home';
  menuOpen: boolean = false;
  isMobile: boolean = false;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('es');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }

  ngOnInit() {
    this.checkScreenWidth();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    const wasMobile = this.isMobile;
    this.isMobile = window.innerWidth <= 600;

    // Si cambia de móvil a desktop, cerrar el menú
    if (wasMobile && !this.isMobile) {
      this.menuOpen = false;
    }
  }

  setActiveNav(url: string) {
    this.active = url;
    this.menuOpen = false; // Cerrar el menú después de hacer clic en un enlace
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}

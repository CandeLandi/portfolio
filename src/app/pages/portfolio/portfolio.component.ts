import { Component } from '@angular/core';


@Component({
  selector: 'page-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  items = [
    {
      name: 'Map App 1',
      src: './assets/projects-img/maps-1.png',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'Css', src: './assets/icons/css-3.svg' },
        { name: 'JavaScript', src: './assets/icons/js.svg' },
        { name: 'Angular', src: './assets/icons/angular.png' },
      ],
      link: 'https://angular-mapas-app-mapbox.netlify.app/',
      github: 'https://github.com/CandeLandi/mapas-app'
    },
    {
      name: 'Map App 2',
      src: './assets/projects-img/maps-2.png',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'Css', src: './assets/icons/css-3.svg' },
        { name: 'JavaScript', src: './assets/icons/js.svg' },
        { name: 'Angular', src: './assets/icons/angular.png' },
      ],
      link: 'https://angular-mapp-app.netlify.app',
      github: 'https://github.com/CandeLandi/map-app-2'
    },
    {
      name: 'CRUD Heroes App',
      src: './assets/projects-img/heroes.png',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'Css', src: './assets/icons/css-3.svg' },
        { name: 'JavaScript', src: './assets/icons/js.svg' },
        { name: 'Angular', src: './assets/icons/angular.png' },
      ],
      link: 'https://angular-heroes-crud-app.netlify.app',
      github: 'https://github.com/CandeLandi/heroes-app'
    },
    {
      name: 'Search Gifs App',
      src: './assets/projects-img/gifs.png',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'Css', src: './assets/icons/css-3.svg' },
        { name: 'JavaScript', src: './assets/icons/js.svg' },
        { name: 'Angular', src: './assets/icons/angular.png' },
      ],
      link: 'https://angular-search-gifs-app.netlify.app',
      github: 'https://github.com/CandeLandi/gifs-app'
    },

    {
      name: 'Login/Register',
      src: './assets/projects-img/login.png',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'Css', src: './assets/icons/css-3.svg' },
        { name: 'JavaScript', src: './assets/icons/js.svg' },
        { name: 'Angular', src: './assets/icons/angular.png' },
        { name: 'Nest Js', src: './assets/icons/nest.svg' },
      ],
      link: 'https://login-cl.netlify.app/#/auth/login',
      github: 'https://github.com/CandeLandi/auth-app',
    },
    {
      name: 'Formularios en Angular',
      src: './assets/projects-img/formularios.png',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'Css', src: './assets/icons/css-3.svg' },
        { name: 'JavaScript', src: './assets/icons/js.svg' },
        { name: 'Angular', src: './assets/icons/angular.png' },
      ],
      link: 'https://angular-forms-r.netlify.app',
      github: 'https://github.com/CandeLandi/forms-app'
    },
    {
      name: 'Pipes en Angular',
      src: './assets/projects-img/pipes.png',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'Css', src: './assets/icons/css-3.svg' },
        { name: 'JavaScript', src: './assets/icons/js.svg' },
        { name: 'Angular', src: './assets/icons/angular.png' },

      ],
      link: 'https://pipes-in-angular.netlify.app',
      github: 'https://github.com/CandeLandi/pipes-app'
    },
/*     {
      name: 'Countries',
      src: './assets/projects-img/countries.png',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'Css', src: './assets/icons/css-3.svg' },
        { name: 'JavaScript', src: './assets/icons/js.svg' },
        { name: 'Angular', src: './assets/icons/angular.png' },
      ],
      link: 'https://angular-restcountries-app.netlify.app',
      github: 'https://github.com/CandeLandi/country-app'
    }, */
    {
      name: 'Películas',
      src: './assets/projects-img/peliculas.png',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'Css', src: './assets/icons/css-3.svg' },
        { name: 'JavaScript', src: './assets/icons/js.svg' },
      ],
      link: 'https://candelandi.github.io/Peliculas/',
      github: 'https://github.com/CandeLandi/Peliculas'
    },
    {
      name: 'Galería',
      src: './assets/projects-img/galeria.png',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'Css', src: './assets/icons/css-3.svg' },
        { name: 'JavaScript', src: './assets/icons/js.svg' },
      ],
      link: 'https://candelandi.github.io/Galeria/',
      github: ''
    },
    {
      name: 'Formulario por pasos',
      src: './assets/projects-img/formulario.png',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'Css', src: './assets/icons/css-3.svg' },
        { name: 'JavaScript', src: './assets/icons/js.svg' },

      ],
      link: 'https://candelandi.github.io/Formulario/',
      github: 'https://github.com/CandeLandi/Formulario'
    },
    {
      name: 'Estilo Pet',
      src: './assets/projects-img/estilopet.png',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'Css', src: './assets/icons/css-3.svg' },

      ],
      link: 'https://candelandi.github.io/entrega-coder/index.html',
      github: 'https://github.com/CandeLandi/entrega-coder'
    },
    {
      name: 'Card',
      src: './assets/projects-img/card.png',
      tecnology: [
        { name: 'HTML', src: './assets/icons/html.svg' },
        { name: 'Css', src: './assets/icons/css-3.svg' },

      ],
      link: 'https://candelandi.github.io/card-component',
      github: 'https://github.com/CandeLandi/card-component'
    },
  ]
}

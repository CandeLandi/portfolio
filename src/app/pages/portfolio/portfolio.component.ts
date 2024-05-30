import { Component } from '@angular/core';


@Component({
  selector: 'page-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  items = [
    {
      name: 'Login',
      src: './assets/projects-img/estilopet.png',
      tecnology: [
        { name: 'JavaScript', src: './assets/js.svg' },
        { name: 'HTML', src: './assets/html.svg' },
        { name: 'Css', src: './assets/css-3.svg' },
        { name: 'Angular', src: './assets/angular.png' },
        { name: 'Nest Js', src: './assets/nest.svg' },
      ],
      link: 'https://login-cl.netlify.app/#/auth/login',
      github: 'https://github.com/CandeLandi/auth-app',
      description: '"Login" hecho con Angular, Backend en NestJS y desplegado en Netlify',
    },
    {
      name: 'Maps App',
      src: './assets/projects-img/formulario.png',
      tecnology: [
        { name: 'JavaScript', src: './assets/js.svg' },
        { name: 'HTML', src: './assets/html.svg' },
        { name: 'Css', src: './assets/css-3.svg' },
        { name: 'Angular', src: './assets/angular.png' },
      ],
      link: 'https://login-cl.netlify.app/#/auth/login',
      github: 'https://github.com/CandeLandi/mapas-app'
    },
    {
      name: 'Forms Angular',
      src: './assets/projects-img/estilopet.png',
      tecnology: [
        { name: 'JavaScript', src: './assets/js.svg' },
        { name: 'HTML', src: './assets/html.svg' },
        { name: 'Css', src: './assets/css-3.svg' },
        { name: 'Angular', src: './assets/angular.png' },
      ],
      link: 'https://login-cl.netlify.app/#/auth/login',
      github: 'https://github.com/CandeLandi/forms-app'
    },
    {
      name: 'Pipes',
      src: './assets/projects-img/galeria.png',
      tecnology: [
        { name: 'JavaScript', src: './assets/js.svg' },
        { name: 'HTML', src: './assets/html.svg' },
        { name: 'Css', src: './assets/css-3.svg' },
        { name: 'Angular', src: './assets/angular.png' },

      ],
      link: 'https://login-cl.netlify.app/#/auth/login',
      github: 'https://github.com/CandeLandi/pipes-app'
    },
    {
      name: 'Gifs App',
      src: './assets/projects-img/galeria.png',
      tecnology: [
        { name: 'JavaScript', src: './assets/js.svg' },
        { name: 'HTML', src: './assets/html.svg' },
        { name: 'Css', src: './assets/css-3.svg' },
        { name: 'Angular', src: './assets/angular.png' },
      ],
      link: 'https://login-cl.netlify.app/#/auth/login',
      github: 'https://github.com/CandeLandi/gifs-app'
    },
    {
      name: 'Moovies App',
      src: './assets/projects-img/peliculas.png',
      tecnology: [
        { name: 'JavaScript', src: './assets/js.svg' },
        { name: 'HTML', src: './assets/html.svg' },
        { name: 'Css', src: './assets/css-3.svg' },
      ],
      link: 'https://candelandi.github.io/Peliculas/',
      github: 'https://github.com/CandeLandi/Peliculas'
    },
    {
      name: 'Galería',
      src: './assets/projects-img/galeria.png',
      tecnology: [
        { name: 'JavaScript', src: './assets/js.svg' },
        { name: 'HTML', src: './assets/html.svg' },
        { name: 'Css', src: './assets/css-3.svg' },
      ],
      link: 'https://candelandi.github.io/Galeria/',
      github: ''
    },
    {
      name: 'Formulario paso por paso',
      src: './assets/projects-img/formulario.png',
      tecnology: [
        { name: 'JavaScript', src: './assets/js.svg' },
        { name: 'HTML', src: './assets/html.svg' },
        { name: 'Css', src: './assets/css-3.svg' },

      ],
      link: 'https://candelandi.github.io/Formulario/',
      github: 'https://github.com/CandeLandi/Formulario'
    },
    {
      name: 'Estilo Pet',
      src: './assets/projects-img/estilopet.png',
      tecnology: [
        { name: 'HTML', src: './assets/html.svg' },
        { name: 'Css', src: './assets/css-3.svg' },

      ],
      link: 'https://candelandi.github.io/entrega-coder/index.html',
      github: 'https://github.com/CandeLandi/entrega-coder'
    },
  ]
}

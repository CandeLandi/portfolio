import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  items = [
    {
      name: 'Login',
      src: '../../../',
      tecnology: [
        { name: 'Bootstrap', src: './assets/bootstrap.svg' },
        { name: 'JavaScript', src: './assets/js.svg' },
        { name: 'HTML', src: './assets/html.svg' },
        { name: 'Css', src: './assets/css-3.svg' },
        { name: 'Angular', src: './assets/angular.png' },
      ],
      link: 'https://login-cl.netlify.app/#/auth/login'
    },
    {
      name: 'Maps App',
      src: '../../../',
      tecnology: [
        { name: 'Bootstrap', src: './assets/bootstrap.svg' },
        { name: 'JavaScript', src: './assets/js.svg' },
        { name: 'HTML', src: './assets/html.svg' },
        { name: 'Css', src: './assets/css-3.svg' },
        { name: 'Node Js', src: './assets/node.svg' },
        { name: 'GitHub', src: './assets/github.svg' },
        { name: 'Angular', src: './assets/angular.png' },
      ],
      link: 'https://login-cl.netlify.app/#/auth/login'
    },
    {
      name: 'Pipes',
      src: '../../../',
      tecnology: [
        { name: 'Bootstrap', src: './assets/bootstrap.svg' },
        { name: 'JavaScript', src: './assets/js.svg' },
        { name: 'HTML', src: './assets/html.svg' },
        { name: 'Css', src: './assets/css-3.svg' },
        { name: 'Nest Js', src: './assets/nest.svg' },
        { name: 'Node Js', src: './assets/node.svg' },
        { name: 'GitHub', src: './assets/github.svg' },
        { name: 'Angular', src: './assets/angular.png' },
        { name: 'Angular Material', src: './assets/angular-material.svg' },
      ],
      link: 'https://login-cl.netlify.app/#/auth/login'
    },
    {
      name: 'Gifs App',
      src: '../../../',
      tecnology: [
        { name: 'Bootstrap', src: './assets/bootstrap.svg' },
        { name: 'JavaScript', src: './assets/js.svg' },
        { name: 'HTML', src: './assets/html.svg' },
        { name: 'Css', src: './assets/css-3.svg' },
        { name: 'Nest Js', src: './assets/nest.svg' },
        { name: 'Node Js', src: './assets/node.svg' },
        { name: 'GitHub', src: './assets/github.svg' },
        { name: 'Angular', src: './assets/angular.png' },
        { name: 'Angular Material', src: './assets/angular-material.svg' },
      ],
      link: 'https://login-cl.netlify.app/#/auth/login'
    },
    {
      name: 'Moovies App',
      src: '../../../',
      tecnology: [
        { name: 'Bootstrap', src: './assets/bootstrap.svg' },
        { name: 'JavaScript', src: './assets/js.svg' },
        { name: 'HTML', src: './assets/html.svg' },
        { name: 'Css', src: './assets/css-3.svg' },
        { name: 'Nest Js', src: './assets/nest.svg' },
        { name: 'Node Js', src: './assets/node.svg' },
        { name: 'GitHub', src: './assets/github.svg' },
        { name: 'Angular', src: './assets/angular.png' },
        { name: 'Angular Material', src: './assets/angular-material.svg' },
      ],
      link: 'https://candelandi.github.io/Peliculas/'
    },
    {
      name: 'Galería',
      src: '../../../',
      tecnology: [
        { name: 'Bootstrap', src: './assets/bootstrap.svg' },
        { name: 'JavaScript', src: './assets/js.svg' },
        { name: 'HTML', src: './assets/html.svg' },
        { name: 'Css', src: './assets/css-3.svg' },
        { name: 'Nest Js', src: './assets/nest.svg' },
        { name: 'Node Js', src: './assets/node.svg' },
        { name: 'GitHub', src: './assets/github.svg' },
        { name: 'Angular', src: './assets/angular.png' },
        { name: 'Angular Material', src: './assets/angular-material.svg' },
      ],
      link: 'https://candelandi.github.io/Galeria/'
    },
    {
      name: 'Formulario paso por paso',
      src: '../../../',
      tecnology: [
        { name: 'Bootstrap', src: './assets/bootstrap.svg' },
        { name: 'JavaScript', src: './assets/js.svg' },
        { name: 'HTML', src: './assets/html.svg' },
        { name: 'Css', src: './assets/css-3.svg' },
        { name: 'Nest Js', src: './assets/nest.svg' },
        { name: 'Node Js', src: './assets/node.svg' },
        { name: 'GitHub', src: './assets/github.svg' },
        { name: 'Angular', src: './assets/angular.png' },
        { name: 'Angular Material', src: './assets/angular-material.svg' },
      ],
      link: 'https://candelandi.github.io/Formulario/'
    },
  ]
}

import { Component } from '@angular/core';

@Component({
  selector: 'page-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  items = [
    {
      name: 'Game of the year - Frontend & Backend',
      src: 'assets/projects-img/goty.png',
      tecnology: [
        { name: 'HTML', src: 'assets/icons/html5.svg' },
        { name: 'CSS', src: 'assets/icons/css3.svg' },
        { name: 'JavaScript', src: 'assets/icons/javascript.svg' },
        { name: 'Angular', src: 'assets/icons/angular.svg' },
        { name: 'Firebase', src: 'assets/icons/firebase.svg' },
        { name: 'ExpressJS', src: 'assets/icons/express.svg' }
      ],
      link: 'https://firestore-chart-67176.web.app',
      github: 'https://github.com/CandeLandi/goty'
    },
    {
      name: 'Admin Pro - Frontend & Backend',
      src: 'assets/projects-img/crud-hospitals.png',
      tecnology: [
        { name: 'HTML', src: 'assets/icons/html5.svg' },
        { name: 'CSS', src: 'assets/icons/css3.svg' },
        { name: 'JavaScript', src: 'assets/icons/javascript.svg' },
        { name: 'Angular', src: 'assets/icons/angular.svg' },
        { name: 'ExpressJS', src: 'assets/icons/express.svg' }
      ],
      link: 'https://adminpro-backend1-993bf28005ef.herokuapp.com',
      github: 'https://github.com/CandeLandi/admin-pro'
    },
    {
      name: 'Ingresos Egresos App',
      src: 'assets/projects-img/IncomeOutcome.png',
      tecnology: [
        { name: 'HTML', src: 'assets/icons/html5.svg' },
        { name: 'CSS', src: 'assets/icons/css3.svg' },
        { name: 'JavaScript', src: 'assets/icons/javascript.svg' },
        { name: 'Angular', src: 'assets/icons/angular.svg' },
        { name: 'Redux', src: 'assets/icons/ngrx.svg' },
        { name: 'Firebase', src: 'assets/icons/firebase.svg' }
      ],
      link: 'https://income-exit-adf5b.web.app/login',
      github: 'https://github.com/CandeLandi/income-outcome-app'
    },
    {
      name: 'Effects con Ngrx',
      src: 'assets/projects-img/http-effects.png',
      tecnology: [
        { name: 'HTML', src: 'assets/icons/html5.svg' },
        { name: 'CSS', src: 'assets/icons/css3.svg' },
        { name: 'JavaScript', src: 'assets/icons/javascript.svg' },
        { name: 'Angular', src: 'assets/icons/angular.svg' },
        { name: 'Redux', src: 'assets/icons/ngrx.svg' },
        { name: 'Firebase', src: 'assets/icons/firebase.svg' }
      ],
      link: 'https://effects-redux-ngrx.netlify.app',
      github: 'https://github.com/CandeLandi/http-effects'
    },
    {
      name: 'Todo App',
      src: 'assets/projects-img/todos.png',
      tecnology: [
        { name: 'HTML', src: 'assets/icons/html5.svg' },
        { name: 'CSS', src: 'assets/icons/css3.svg' },
        { name: 'JavaScript', src: 'assets/icons/javascript.svg' },
        { name: 'Angular', src: 'assets/icons/angular.svg' },
        { name: 'Redux', src: 'assets/icons/ngrx.svg' }
      ],
      link: 'https://redux-angular-todo-app.netlify.app',
      github: 'https://github.com/CandeLandi/todo-app'
    },
    {
      name: 'Map App 1',
      src: 'assets/projects-img/maps-1.png',
      tecnology: [
        { name: 'HTML', src: 'assets/icons/html5.svg' },
        { name: 'CSS', src: 'assets/icons/css3.svg' },
        { name: 'JavaScript', src: 'assets/icons/javascript.svg' },
        { name: 'Angular', src: 'assets/icons/angular.svg' }
      ],
      link: 'https://angular-mapas-app-mapbox.netlify.app',
      github: 'https://github.com/CandeLandi/mapas-app'
    },
    {
      name: 'Map App 2',
      src: 'assets/projects-img/maps-2.png',
      tecnology: [
        { name: 'HTML', src: 'assets/icons/html5.svg' },
        { name: 'CSS', src: 'assets/icons/css3.svg' },
        { name: 'JavaScript', src: 'assets/icons/javascript.svg' },
        { name: 'Angular', src: 'assets/icons/angular.svg' }
      ],
      link: 'https://angular-mapp-app.netlify.app',
      github: 'https://github.com/CandeLandi/map-app-2'
    },
    {
      name: 'CRUD Heroes App',
      src: 'assets/projects-img/heroes.png',
      tecnology: [
        { name: 'HTML', src: 'assets/icons/html5.svg' },
        { name: 'CSS', src: 'assets/icons/css3.svg' },
        { name: 'JavaScript', src: 'assets/icons/javascript.svg' },
        { name: 'Angular', src: 'assets/icons/angular.svg' },
        { name: 'NestJS', src: 'assets/icons/nestjs.svg' },
        { name: 'MongoDB', src: 'assets/icons/mongodb.svg' }
      ],
      link: 'https://angular-heroes-crud-app.netlify.app',
      github: 'https://github.com/CandeLandi/heroes-app'
    },
    {
      name: 'Login/Register',
      src: 'assets/projects-img/login.png',
      tecnology: [
        { name: 'HTML', src: 'assets/icons/html5.svg' },
        { name: 'CSS', src: 'assets/icons/css3.svg' },
        { name: 'JavaScript', src: 'assets/icons/javascript.svg' },
        { name: 'Angular', src: 'assets/icons/angular.svg' },
        { name: 'NestJS', src: 'assets/icons/nestjs.svg' },
        { name: 'MongoDB', src: 'assets/icons/mongodb.svg' }
      ],
      link: 'https://login-cl.netlify.app/#/auth/login',
      github: 'https://github.com/CandeLandi/auth-app'
    },
    {
      name: 'Search Gifs App',
      src: 'assets/projects-img/gifs.png',
      tecnology: [
        { name: 'HTML', src: 'assets/icons/html5.svg' },
        { name: 'CSS', src: 'assets/icons/css3.svg' },
        { name: 'JavaScript', src: 'assets/icons/javascript.svg' },
        { name: 'Angular', src: 'assets/icons/angular.svg' }
      ],
      link: 'https://angular-search-gifs-app.netlify.app',
      github: 'https://github.com/CandeLandi/gifs-app'
    },
    {
      name: 'Formularios en Angular',
      src: 'assets/projects-img/formularios.png',
      tecnology: [
        { name: 'HTML', src: 'assets/icons/html5.svg' },
        { name: 'CSS', src: 'assets/icons/css3.svg' },
        { name: 'JavaScript', src: 'assets/icons/javascript.svg' },
        { name: 'Angular', src: 'assets/icons/angular.svg' }
      ],
      link: 'https://angular-forms-r.netlify.app',
      github: 'https://github.com/CandeLandi/forms-app'
    },
    {
      name: 'Pipes en Angular',
      src: 'assets/projects-img/pipes.png',
      tecnology: [
        { name: 'HTML', src: 'assets/icons/html5.svg' },
        { name: 'CSS', src: 'assets/icons/css3.svg' },
        { name: 'JavaScript', src: 'assets/icons/javascript.svg' },
        { name: 'Angular', src: 'assets/icons/angular.svg' }
      ],
      link: 'https://pipes-in-angular.netlify.app',
      github: 'https://github.com/CandeLandi/pipes-app'
    },
    {
      name: 'Películas',
      src: 'assets/projects-img/peliculas.png',
      tecnology: [
        { name: 'HTML', src: 'assets/icons/html5.svg' },
        { name: 'CSS', src: 'assets/icons/css3.svg' },
        { name: 'JavaScript', src: 'assets/icons/javascript.svg' }
      ],
      link: 'https://candelandi.github.io/Peliculas',
      github: 'https://github.com/CandeLandi/Peliculas'
    },
    {
      name: 'Galería',
      src: 'assets/projects-img/galeria.png',
      tecnology: [
        { name: 'HTML', src: 'assets/icons/html5.svg' },
        { name: 'CSS', src: 'assets/icons/css3.svg' },
        { name: 'JavaScript', src: 'assets/icons/javascript.svg' }
      ],
      link: 'https://candelandi.github.io/Galeria',
      github: ''
    },
    {
      name: 'Formulario por pasos',
      src: 'assets/projects-img/formulario.png',
      tecnology: [
        { name: 'HTML', src: 'assets/icons/html5.svg' },
        { name: 'CSS', src: 'assets/icons/css3.svg' },
        { name: 'JavaScript', src: 'assets/icons/javascript.svg' }
      ],
      link: 'https://candelandi.github.io/Formulario',
      github: 'https://github.com/CandeLandi/Formulario'
    },
    {
      name: 'Estilo Pet',
      src: 'assets/projects-img/estilopet.png',
      tecnology: [
        { name: 'HTML', src: 'assets/icons/html5.svg' },
        { name: 'CSS', src: 'assets/icons/css3.svg' }
      ],
      link: 'https://candelandi.github.io/entrega-coder/index.html',
      github: 'https://github.com/CandeLandi/entrega-coder'
    },
    {
      name: 'Card',
      src: 'assets/projects-img/card.png',
      tecnology: [
        { name: 'HTML', src: 'assets/icons/html5.svg' },
        { name: 'CSS', src: 'assets/icons/css3.svg' }
      ],
      link: 'https://candelandi.github.io/card-component',
      github: 'https://github.com/CandeLandi/card-component'
    }
  ];
}

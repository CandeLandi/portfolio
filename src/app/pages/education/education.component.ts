import { Component } from '@angular/core';

@Component({
  selector: 'page-education',
  templateUrl: './education.component.html',
  styleUrl: './education.component.scss'
})
export class EducationComponent {

items = [
  {
    name: 'Escuela de Educación Técnica N°3',
    description: `Graduado en la especialización de "Técnico en Comunicación Multimedial". Durante este tiempo, adquirí un
    amplio conjunto de habilidades en el manejo de diversas herramientas y software, incluyendo edición de video,
    diseño gráfico, animación, comunicación, guionización y desarrollo web`,
    timeline: 'Período 2012-2018'
  },
  {
    name: 'CoderHouse - Desarrollo web',
    description: `Curso enfocado en los fundamentos del desarrollo web, abarcando HTML, CSS, NodeJs, Git, Github, Sass, SEO,
    servidores, animaciones y frameworks como Bootstrap.`,
    duration: 'Duración: 38 horas en 10 semanas.',
    timeline: '22/6/2023 - 24/8/2023'
  },
  {
    name: '',
    description: '',
    timeline: ''
  },
  {
    name: '',
    description: '',
    timeline: ''
  },
  {
    name: '',
    description: '',
    timeline: ''
  },
  {
    name: '',
    description: '',
    timeline: ''
  },
]



}

import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  skills = [
    { name: 'HTML', icon: 'assets/icons/html5.svg' },
    { name: 'CSS', icon: 'assets/icons/css3.svg' },
    { name: 'JavaScript', icon: 'assets/icons/javascript.svg' },
    { name: 'Angular', icon: 'assets/icons/angular.svg' },
    { name: 'Redux', icon: 'assets/icons/ngrx.svg' },
    { name: 'Git', icon: 'assets/icons/git.svg' },
    { name: 'GitHub', icon: 'assets/icons/github.svg' },
    { name: 'Node.js', icon: 'assets/icons/nodedotjs.svg' },
    { name: 'MongoDB', icon: 'assets/icons/mongodb.svg' },
    { name: 'Docker', icon: 'assets/icons/docker.svg' },
    { name: 'NestJS', icon: 'assets/icons/nestjs.svg' },
    { name: 'ExpressJS', icon: 'assets/icons/express.svg' },
    { name: 'Postman', icon: 'assets/icons/postman.svg' },
    { name: 'Firebase', icon: 'assets/icons/firebase.svg' },
    { name: 'Google Cloud', icon: 'assets/icons/googlecloud.svg' },
    { name: 'Bootstrap', icon: 'assets/icons/bootstrap.svg' },
    { name: 'Tailwind', icon: 'assets/icons/tailwindcss.svg' },
    { name: 'SASS', icon: 'assets/icons/sass.svg' },
    { name: 'Jest', icon: 'assets/icons/jest.svg' },
    { name: 'React', icon: 'assets/icons/react.svg' },

  ];

}

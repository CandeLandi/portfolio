import { Component } from '@angular/core';

interface FeaturedProject {
  id: number;
  title: string;
  description: string;
  images: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent {
  projects: FeaturedProject[] = [
    {
      id: 2,
      title: 'Kamak Desarrollos',
      description: 'Sitio institucional desarrollado para una empresa de construcción. El sistema incluye una plataforma de gestión interna con login y autenticación mediante JWT, donde los administradores acceden a un dashboard privado para cargar, editar y eliminar proyectos (CRUD). El panel permite filtrar, buscar por nombre, gestionar información interna, imágenes y videos. Los proyectos se visualizan en un mapa interactivo integrado con Google Maps, utilizando las APIs de Google Places y Geolocation.',
      images: [
        'assets/projects-img/kamak-web/FireShot Capture 023 - Kamak Desarrollos - [localhost].png',
        'assets/projects-img/kamak-web/FireShot Capture 025 - Kamak Desarrollos - [localhost].png',
        'assets/projects-img/kamak-web/FireShot Capture 026 - Kamak Desarrollos - [localhost].png',
        'assets/projects-img/kamak-web/FireShot Capture 027 - Kamak Desarrollos - [localhost].png',
        'assets/projects-img/kamak-web/FireShot Capture 029 - Kamak Desarrollos - [localhost].png',
        'assets/projects-img/kamak-web/FireShot Capture 030 - Kamak Desarrollos - [localhost].png',
        'assets/projects-img/kamak-web/FireShot Capture 031 - Kamak Desarrollos - [localhost].png',
        'assets/projects-img/kamak-web/FireShot Capture 032 - Kamak Desarrollos - [localhost].png',
                'assets/projects-img/kamak-web/agregada.png',
        'assets/projects-img/kamak-web/FireShot Capture 033 - Kamak Desarrollos - [localhost].png',
        'assets/projects-img/kamak-web/FireShot Capture 034 - Kamak Desarrollos - [localhost].png',
        'assets/projects-img/kamak-web/FireShot Capture 039 - Kamak Desarrollos - [localhost].png',
        'assets/projects-img/kamak-web/FireShot Capture 040 - Kamak Desarrollos - [localhost].png',
        'assets/projects-img/kamak-web/FireShot Capture 041 - Kamak Desarrollos - [localhost].png',

      ],
      technologies: ['Angular', 'Tailwind', 'Angular Material', 'NestJS', 'Google Maps'],
      liveUrl: 'https://kamak.com.ar',
      githubUrl: ''
    },
    {
      id: 1,
      title: 'JC Cosmetology',
      description: 'Landing page diseñada para una profesional de estética. Presenta sus servicios de forma clara y elegante, con secciones para destacar sus servicios y facilitar el contacto.',
      images: [
        'assets/projects-img/jc-cosmetology/FireShot Capture 022 - JC Cosmetología - Estética Profesional y Tratamientos Personalizado_ - [jc-cosmetology.com].png',
        'assets/projects-img/jc-cosmetology/FireShot Capture 017 - JC Cosmetología - Estética Profesional y Tratamientos Personalizado_ - [jc-cosmetology.com].png',
        'assets/projects-img/jc-cosmetology/FireShot Capture 018 - JC Cosmetología - Estética Profesional y Tratamientos Personalizado_ - [jc-cosmetology.com].png',
        'assets/projects-img/jc-cosmetology/FireShot Capture 019 - JC Cosmetología - Estética Profesional y Tratamientos Personalizado_ - [jc-cosmetology.com].png',
/*         'assets/projects-img/jc-cosmetology/FireShot Capture 020 - JC Cosmetología - Estética Profesional y Tratamientos Personalizado_ - [jc-cosmetology.com].png',
 */        'assets/projects-img/jc-cosmetology/FireShot Capture 021 - JC Cosmetología - Estética Profesional y Tratamientos Personalizado_ - [jc-cosmetology.com].png',
      ],
      technologies: ['HTML', 'CSS', 'Angular', 'Tailwind'],
      liveUrl: 'https://www.jc-cosmetology.com',
    },
  ];

  currentImageIndex: { [key: number]: number } = {};

  prevImage(projectId: number, imagesLength: number) {
    const current = this.currentImageIndex[projectId] || 0;
    this.currentImageIndex[projectId] = (current - 1 + imagesLength) % imagesLength;
  }

  nextImage(projectId: number, imagesLength: number) {
    const current = this.currentImageIndex[projectId] || 0;
    this.currentImageIndex[projectId] = (current + 1) % imagesLength;
  }

  goToImage(projectId: number, index: number) {
    this.currentImageIndex[projectId] = index;
  }
}

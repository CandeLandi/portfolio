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
      id: 3,
      title: 'ONG Valores para la Familia',
      description: 'Sitio web desarrollado para una organización no gubernamental dedicada a la prevención del abuso sexual infantil. El proyecto incluye un diseño moderno y responsivo con enfoque en la accesibilidad y la facilidad de navegación. La plataforma presenta información educativa, recursos de prevención y canales de contacto para familias y profesionales que trabajan con niños.',
      images: [
        'assets/projects-img/ong-valoresparalafamilia/FireShot Capture 047 - ONG Valores para la Familia - Prevención de Abuso Sexual Infantil -_ - [valoresparalafamilia.com].png',
        'assets/projects-img/ong-valoresparalafamilia/Screenshot 2025-07-31 180603.png'
      ],
      technologies: ['Angular', 'Tailwind CSS', 'TypeScript', 'HTML5', 'CSS3'],
      liveUrl: 'https://valoresparalafamilia.com/',
      githubUrl: ''
    },
    {
      id: 2,
      title: 'Kamak Desarrollos',
      description: 'Sitio institucional desarrollado para una empresa de construcción. El sistema incluye una plataforma de gestión interna con login y autenticación mediante JWT, donde los administradores acceden a un dashboard privado para cargar, editar y eliminar proyectos (CRUD). El panel permite filtrar, buscar por nombre, gestionar información interna, imágenes y videos. Los proyectos se visualizan en un mapa interactivo integrado con Google Maps, utilizando las APIs de Google Places y Geolocation.',
      images: [
        'assets/projects-img/kamak-web/FireShot Capture 063 - Kamak Desarrollos - [kamak.com.ar].png',
        'assets/projects-img/kamak-web/FireShot Capture 062 - Kamak Desarrollos - [kamak.com.ar].png',
        'assets/projects-img/kamak-web/FireShot Capture 061 - Kamak Desarrollos - [kamak.com.ar].png',
        'assets/projects-img/kamak-web/FireShot Capture 060 - Kamak Desarrollos - [kamak.com.ar].png',
        'assets/projects-img/kamak-web/FireShot Capture 059 - Kamak Desarrollos - [kamak.com.ar].png',
        'assets/projects-img/kamak-web/FireShot Capture 058 - Kamak Desarrollos - [kamak.com.ar].png',
        'assets/projects-img/kamak-web/FireShot Capture 055 - Kamak Desarrollos - [kamak.com.ar].png',
        'assets/projects-img/kamak-web/FireShot Capture 054 - Kamak Desarrollos - [kamak.com.ar].png',
        'assets/projects-img/kamak-web/FireShot Capture 053 - Kamak Desarrollos - [kamak.com.ar].png',
        'assets/projects-img/kamak-web/FireShot Capture 028 - Kamak Desarrollos - [localhost].png',
        'assets/projects-img/kamak-web/FireShot Capture 023 - Kamak Desarrollos - [localhost].png'
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

import { Injectable } from '@angular/core';

export interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  technologies: string[];
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor() {}

  getProjects(): Project[] {
    return [
      {
        title: 'Portfolio Angular',
        description: 'Un site personnel pour montrer mes projets.',
        image: 'assets/Angular.png',
        github: 'https://github.com/Asmoune56',
        demo: 'https://monportfolio.netlify.app',
        technologies: ['Angular', 'TypeScript', 'HTML', 'CSS']
      },
      {
        title: 'App de tâches',
        description: 'Une app de gestion de tâches simple et efficace.',
        image: 'assets/Angular.png',
        github: 'https://github.com/Asmoune56',
        demo: 'https://todotest.netlify.app',
        technologies: ['Angular', 'Firebase']
      }
    ];
  }
}

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
        image: 'assets/portfolio.png',
        github: 'https://github.com/Asmoune56/MyPortfolio/tree/main/node_modules',
        demo: 'https://monportfolio.netlify.app',
        technologies: ['Angular', 'TypeScript', 'HTML', 'CSS']
      },
      {
        title: 'Construction',
        description: 'Une app de gestion de tâches simple et efficace.',
        image: 'assets/jry.png',
        github: 'https://github.com/Asmoune56/Construction',
        demo: 'https://todotest.netlify.app',
        technologies: ['jee', 'html','bootstrap']
      },

      {
        title: 'Sport_Flow-',
        description: 'SportFlow : Plateforme de Gestion des Clubs et Entraîneurs.',
        image: 'assets/sport\.webp',
        github: 'https://github.com/Asmoune56/Sport_Flow-',
        demo: 'https://todotest.netlify.app',
        technologies: ['java','HTML', 'CSS']
      },
      {
        title: 'EduManage',
        description: 'concevoir et développer une application web interne permettant aux établissements scolaires de gérer efficacement les informations des étudiants et des cours..',
        image: 'assets/eudmanage.png',
        github: 'https://github.com/Th3You7/eduManage',
        demo: 'https://todotest.netlify.app',
        technologies: ['java', 'HTML', 'CSS',"bootstrap"]
      },
      {
        title: 'METEO',
        description: 'Une app de gestion de tâches simple et efficace.',
        image: 'assets/meteo.jpg',
        github: 'https://github.com/Asmoune56/METEO',
        demo: 'https://todotest.netlify.app',
        technologies: ['api', 'bootstrap']
      },
      {
        title: 'Films-App',
        description: 'Une app de gestion de tâches simple et efficace.',
        image: 'assets/film.png',
        github: 'https://github.com/Asmoune56/Films-App',
        demo: 'https://todotest.netlify.app',
        technologies: ['html', 'css',"js"]
      }
      
    ];
  }
}

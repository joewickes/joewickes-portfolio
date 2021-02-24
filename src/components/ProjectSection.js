// Dependencies
import {Component} from 'react';

// Styles
import './../styles/ProjectSection.css'

// Components 
import Project from './Project';

export default class ProjectSection extends Component {
  state = {
    projectArr: [
      {
        screenshot: './images/SS1.png',
        title: 'Date Ideas',
        liveLink: 'https://date-ideas.vercel.app/',
        description: 'Date ideas is an app that generates random date ideas in the categories: Activities, meals, and desserts',
        techUsed: ['React', 'Express', 'Knex', 'PostgreSQL'],
        frontEndRepo: 'https://github.com/joewickes/date-ideas',
        backEndRepo: 'https://github.com/joewickes/date-ideas-api',
      },
      {
        screenshot: './images/SS2.png',
        title: 'MovieRec',
        liveLink: 'https://movierec-frontend.vercel.app/',
        description: 'MovieRec is an app that lets you recommend movies to family, friends, or strangers',
        techUsed: ['React', 'Express', 'Knex', 'PostgreSQL'],
        frontEndRepo: 'https://github.com/joewickes/movierec-frontend',
        backEndRepo: 'https://github.com/joewickes/movierec-backend',
      },
      {
        screenshot: './images/SS3.png',
        title: 'Movie Quote Quiz',
        liveLink: 'https://joewickes.github.io/movie-quote-quiz-app/',
        description: 'A quiz that tests your movie quote knowledge',
        techUsed: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
        frontEndRepo: 'https://github.com/joewickes/movie-quote-quiz-app',
        backEndRepo: null,
      }
    ]
  }
  
  render() {
    return (
      <section className="ProjectSection">
        <h2>Projects</h2>
        <ul className="project-list">
          {this.state.projectArr.map(project => {
            return (<Project 
              screenshot={project.screenshot} 
              title={project.title} 
              liveLink={project.liveLink} 
              description={project.description} 
              techUsed={project.techUsed} 
              frontEndRepo={project.frontEndRepo} 
              backEndRepo={project.backEndRepo} 
            />);
          })}
          
        </ul>
      </section>
    );
  }
}
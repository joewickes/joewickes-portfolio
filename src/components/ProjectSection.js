// Dependencies
import {Component} from 'react';

// Styles
import './../styles/ProjectSection.css'

// Components 
import Project from './Project';

// Images
import SS1 from './../images/SS1.gif';
import SS2 from './../images/SS2.gif';
import SS3 from './../images/SS3.gif';

export default class ProjectSection extends Component {
  state = {
    projectArr: [
      {
        screenshot: SS1,
        title: 'Date Ideas',
        liveLink: 'https://date-ideas.vercel.app/',
        description: 'A full stack project to showcase skills gained during the Thinkful program where you can get random date ideas in the categories: Activities, meals, and desserts',
        techUsed: ['React', 'Express', 'Knex', 'PostgreSQL'],
        frontEndRepo: 'https://github.com/joewickes/date-ideas',
        backEndRepo: 'https://github.com/joewickes/date-ideas-api',
      },
      {
        screenshot: SS2,
        title: 'MovieRec',
        liveLink: 'https://movierec-frontend.vercel.app/',
        description: 'A full stack project to showcase skills gained during the Thinkful program where you can recommend movies to family, friends, or strangers',
        techUsed: ['React', 'Express', 'Knex', 'PostgreSQL'],
        frontEndRepo: 'https://github.com/joewickes/movierec-frontend',
        backEndRepo: 'https://github.com/joewickes/movierec-backend',
      },
      {
        screenshot: SS3,
        title: 'Movie Quote Quiz',
        liveLink: 'https://joewickes.github.io/movie-quote-quiz-app/',
        description: 'A jQuery project built to simulate "React-ful" rendering for the Thinkful program, testing your movie quote knowledge',
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
              key={project.title}
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
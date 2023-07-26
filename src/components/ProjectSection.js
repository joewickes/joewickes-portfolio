// Dependencies
import { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';

// Styles
import './../styles/ProjectSection.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader

// Components
import Project from './Project';

// Images
import SS1 from './../images/di-home.png';
import SS2 from './../images/dk-home.png';
// import SS3 from './../images/SS3.gif';
// import SS4 from './../images/SS4.gif';

export default class ProjectSection extends Component {
  state = {
    projectArr: [
      // {
      //   screenshot: SS4,
      //   title: "Jobspark Add Inventory Page",
      //   liveLink: null,
      //   description:
      //     "The Add Inventory Page for a job tracking software, tracking different part types, users, needed quantities, and current inventories",
      //   techUsed: ["JavaScript", "React", "SASS", "Express"],
      //   frontEndRepo: null,
      //   backEndRepo: null,
      // },
      {
        screenshot: SS1,
        title: 'Date Ideas',
        liveLink: 'https://date-ideas.vercel.app/',
        description:
          'Originally created to showcase React, Express, and Postgres skills at the end of my Thinkful software engineering program in 2021. Recently refactored to use Next.js, SCSS, and Sequelize.',
        techUsed: ['Next.js', 'Express', 'PostgreSQL', 'Sequelize', 'Knex'],
        frontEndRepo: 'https://github.com/joewickes/date-ideas',
        backEndRepo: 'https://github.com/joewickes/date-ideas-api',
      },
      {
        screenshot: SS2,
        title: 'DairyKastle',
        liveLink: 'https://www.dairykastle.com/',
        description:
          'A professional project, rebuilt from scratch using Next.js',
        techUsed: ['Next.js', 'SCSS'],
        // frontEndRepo: 'https://github.com/joewickes/movierec-frontend',
        // backEndRepo: 'https://github.com/joewickes/movierec-backend',
      },
      // {
      //   screenshot: SS3,
      //   title: 'Movie Quote Quiz',
      //   liveLink: 'https://joewickes.github.io/movie-quote-quiz-app/',
      //   description:
      //     'A jQuery project built to simulate "React-ful" rendering for the Thinkful program, testing your movie quote knowledge',
      //   techUsed: ['HTML', 'CSS', 'JavaScript', 'jQuery'],
      //   frontEndRepo: 'https://github.com/joewickes/movie-quote-quiz-app',
      //   backEndRepo: null,
      // },
    ],
  };

  render() {
    return (
      <section className='ProjectSection'>
        <h2>Projects</h2>
        <Carousel autoPlay>
          {/* <ul className='project-list'> */}
          {this.state.projectArr.map((project) => {
            return (
              <Project
                key={project.title}
                screenshot={project.screenshot}
                title={project.title}
                liveLink={project.liveLink}
                description={project.description}
                techUsed={project.techUsed}
                frontEndRepo={project.frontEndRepo}
                backEndRepo={project.backEndRepo}
              />
            );
          })}
          {/* </ul> */}
        </Carousel>
      </section>
    );
  }
}

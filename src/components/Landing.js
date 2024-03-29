// Dependencies
import { Component } from 'react';

// Styles
import './../styles/Landing.css';

// Components
import Header from './Header';

// Icons
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { IoDocumentText } from 'react-icons/io5';

// Resume
import Resume from './../images/Resume.pdf';

export default class Landing extends Component {
  render() {
    return (
      <>
        <Header />
        <section className='Landing'>
          <div className='l-container'>
            <div>
              <div className='l-name-container'>
                <h2>JOE WICKES</h2>
              </div>
              <div className='l-blurb-container'>
                <p>
                  Full Stack Web Developer focused on React and Express
                  ecosystems.
                </p>
              </div>
            </div>
            <div className='l-icons-container'>
              <div>
                <a
                  href='https://github.com/joewickes'
                  rel='noreferrer'
                  target='_blank'
                >
                  <FaGithubSquare className='faGithubsquare' />
                </a>
              </div>
              <div>
                <a
                  href='https://www.linkedin.com/in/joe-wickes/'
                  rel='noreferrer'
                  target='_blank'
                >
                  <FaLinkedin className='faLinkedin' />
                </a>
              </div>
              <div>
                <a href={Resume} rel='noreferrer' target='_blank'>
                  <IoDocumentText className='faListalt' />
                </a>
              </div>
              {/* Icons */}
            </div>
          </div>
        </section>
      </>
    );
  }
}

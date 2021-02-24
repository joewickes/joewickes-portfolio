// Dependencies
import {Component} from 'react';

// Styles
import './../styles/Landing.css'

// Components
import Header from './Header';

// Icons
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaListAlt } from 'react-icons/fa';

export default class Landing extends Component {
  render() {
    return (
      <>
        <Header />
        <section className="Landing">
          <div className="l-container">
            <div>
              <div className="l-name-container">
                <h2>JOE WICKES</h2>
              </div>
              <div className="l-blurb-container">
                <p>Full Stack Web Developer focused on React, Express, and PostgreSQL</p>
              </div>
            </div>
            <div className="l-icons-container">
              <div>
                <a href="https://github.com/joewickes" target="_blank"><FaGithubSquare className="faGithubsquare" /></a>
              </div>
              <div>
                <a href="https://www.linkedin.com/in/joe-wickes/" target="_blank"><FaLinkedin className="faLinkedin" /></a>
              </div>
              <div>
                <a href="" target="_blank"><FaListAlt className="faListalt" /></a>
              </div>
              {/* Icons */}
            </div>
          </div>
        </section>
      </>
    );
  }
}
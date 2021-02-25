// Dependencies
import {Component} from 'react';

// Styles
import './../styles/Contact.css'

// Icons
import { FaGithubSquare } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

export default class Contact extends Component {
  render() {
    return (
      <section className="Contact">
        <h2>Contact Me</h2>
        <div className="c-bottom">
          <div>
            <p>Email me at <a href="mailto:joe.c.wickes@gmail.com">joe.c.wickes@gmail.com</a></p>
          </div>
          <div className="c-icons-container">
            <div>
              <a href="https://github.com/joewickes" rel="noreferrer" target="_blank"><FaGithubSquare className="faGithubsquare" /></a>
            </div>
            <div>
              <a href="https://www.linkedin.com/in/joe-wickes/" rel="noreferrer" target="_blank"><FaLinkedin className="faLinkedin" /></a>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
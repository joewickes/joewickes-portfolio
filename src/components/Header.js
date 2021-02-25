// Dependencies
import {Component} from 'react';

// Styles
import './../styles/Header.css'

export default class Header extends Component {
  render() {

    const goToProjects = (e) => {
      e.preventDefault();
      document.querySelector('.ProjectSection').scrollIntoView({ 
        behavior: 'smooth' 
      });
    }

    const goToAboutMe = (e) => {
      e.preventDefault();
      document.querySelector('.AboutMe').scrollIntoView({ 
        behavior: 'smooth' 
      });
    }

    const goToContact = (e) => {
      e.preventDefault();
      document.querySelector('.Contact').scrollIntoView({ 
        behavior: 'smooth' 
      });
    }

    return (
      <header className="l-header">
          <nav>
            <div>
              <p onClick={(e) => goToProjects(e)}>Projects</p>
            </div>
            <div>
              <p onClick={(e) => goToAboutMe(e)}>About</p>
            </div>
            <div>
              <p onClick={(e) => goToContact(e)}>Contact</p>
            </div>
          </nav>
        </header>
    );
  }
}
// Dependencies
import {Component} from 'react';

// Styles
import './../styles/Header.css'

export default class Header extends Component {
  render() {
    return (
      <header className="l-header">
          <nav>
            <div>
              <a href="#">Projects</a>
            </div>
            <div>
              <a href="#">About</a>
            </div>
            <div>
              <a href="#">Contact</a>
            </div>
          </nav>
        </header>
    );
  }
}
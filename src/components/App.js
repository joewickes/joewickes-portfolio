// Dependencies
import {Component} from 'react';

// Styles
import './../styles/App.css'

// Components
import Header from './Header';
import Landing from './Landing';
import Contact from './Contact';
import ProjectSection from './ProjectSection';
import AboutMe from './AboutMe';
import Footer from './Footer';

export default class App extends Component {

  render() {
    return (
      <>
      {/* <Header /> */}
        <main className="App">
          <Landing />
          <ProjectSection />
          <AboutMe />
          <Contact />
        </main>
      <Footer />
      </>
    );
  }
}
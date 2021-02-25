// Dependencies
import {Component} from 'react';

// Styles
import './../styles/AboutMe.css'

// Images
import profile from './../images/cropped-profile-suit.png'

export default class AboutMe extends Component {
  render() {
    return (
      <section className="AboutMe">
        
        <div className="am-bottom">
          <div className="am-left">
            <img src={profile} alt="Joe Wickes" />
          </div>
          <br />
          <div className="am-right">
            <div>
              <h2>About Me</h2>
            </div>
            <br />
            <div>
              <p>No other time in history has had such an interconnected world available at its fingertips. I think the web is incredible because it provides a platform from which people can imagine, build, and refine things together. In my opinion, there is no better place to do that from than as a Full Stack Web Developer.</p>
            </div>
            <br />
            <div>
              <p>Since the internet is built on interconnectivity, it makes a lot of sense that the teams that work on it should do the same. I look forward to the chance to collaborate with other developers in both brainstorming ideas and troubleshooting issues.</p>
            </div>
            <br />
            <div>
              <p>Outside of developing, I love to spend time with my growing family. I am also really into movies, coffee (pour over recently), video games, and spending time outdoors. Since I live in Tampa, I like to go to the beach when I can.</p>
            </div>
          </div>
        </div>
       
      </section>
    );
  }
}
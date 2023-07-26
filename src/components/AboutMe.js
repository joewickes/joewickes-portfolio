// Dependencies
import { Component } from 'react';

// Styles
import './../styles/AboutMe.css';

// Images
import profile from './../images/cropped-profile-suit.png';

export default class AboutMe extends Component {
  render() {
    return (
      <section className='AboutMe'>
        <div className='am-bottom'>
          <div className='am-left'>
            <img src={profile} alt='Joe Wickes' />
          </div>
          <br />
          <div className='am-right'>
            <div>
              <h2>About Me</h2>
            </div>

            <br />

            <div>
              <p>
                No other time in history has had such an interconnected world at
                its fingertips. Through the internet we all have a platform from
                which we can imagine, create, and cultivate ideas together. I am
                excited to be a part of that effort and culture through full
                stack web development.
              </p>
              <p></p>
            </div>

            <br />

            <div>
              <p>
                Outside of developing, I love to spend time with my growing
                family. I am also into pour over coffee, good movies, and video
                games. Since I live in Tampa, I like to go to the beach when I
                can.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

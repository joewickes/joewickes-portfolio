// Dependencies
import {Component} from 'react';

// Styles
import './../styles/Project.css'

export default class Project extends Component {
  render() {

    const makeTechString = (array) => {
      let finStr = '';

      for (let i = 0; i < array.length; i++) {
        if (i === array.length - 1) {
          finStr += array[i];
        } else {
          finStr += `${array[i]} | `;
        }
      }

      return finStr;
    }

    return (
      <li className="Project">
        <div className="proj-left">
          <h3>{this.props.title}</h3>
          <p className="description"><b>Description: </b>{this.props.description}</p>
          <p><b>Tech Stack Used:</b> {makeTechString(this.props.techUsed)}</p>
          <button><a href={this.props.liveLink} rel="noreferrer" target="_blank">See it in Action</a></button>
          <a href={this.props.frontEndRepo} rel="noreferrer" target="_blank">Client Side Repo</a>
          {this.props.backEndRepo ? (<a href={this.props.backEndRepo} rel="noreferrer" target="_blank">Server Side Repo</a>) : null}
        </div>
        <div className="proj-img">
          <img src={this.props.screenshot} alt={this.props.title} />
        </div>
      </li>
    );
  }
}
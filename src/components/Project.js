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
          <p className="description">{this.props.description}</p>
          <p><b>Tech Stack Used:</b> {makeTechString(this.props.techUsed)}</p>
          <a href={this.props.liveLink} target="_blank"><button>See it in Action</button></a>
          <a href={this.props.frontEndRepo} target="_blank">Client Side Repo</a>
          {this.props.backEndRepo ? (<a href={this.props.backEndRepo} target="_blank">Server Side Repo</a>) : null}
        </div>
        <div className="proj-img">
          <img src={this.props.screenshot} />
        </div>
      </li>
    );
  }
}
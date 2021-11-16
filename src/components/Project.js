// Dependencies
import React from "react";

// Styles
import "./../styles/Project.css";

const Project = (props) => {
  const makeTechString = (array) => {
    let finStr = "";

    for (let i = 0; i < array.length; i++) {
      if (i === array.length - 1) {
        finStr += array[i];
      } else {
        finStr += `${array[i]} | `;
      }
    }

    return finStr;
  };

  return (
    <li className="Project">
      <div className="proj-left">
        {!!props.title ? <h3>{props.title}</h3> : null}
        {!!props.description ? (
          <p className="description">
            <b>Description: </b>
            {props.description}
          </p>
        ) : null}
        {!!props.techUsed ? (
          <p>
            <b>Tech Stack Used:</b> {makeTechString(props.techUsed)}
          </p>
        ) : null}
        {!!props.liveLink ? (
          <button>
            <a href={props.liveLink} rel="noreferrer" target="_blank">
              See it in Action
            </a>
          </button>
        ) : null}
        {!!props.frontEndRepo ? (
          <a href={props.frontEndRepo} rel="noreferrer" target="_blank">
            Client Side Repo
          </a>
        ) : null}
        {props.backEndRepo ? (
          <a href={props.backEndRepo} rel="noreferrer" target="_blank">
            Server Side Repo
          </a>
        ) : null}
      </div>
      {!!props.screenshot && !!props.title ? (
        <div className="proj-img">
          <img src={props.screenshot} alt={props.title} />
        </div>
      ) : null}
    </li>
  );
};

export default Project;

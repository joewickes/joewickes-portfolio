// Dependencies
import React from 'react';

// Styles
import './../styles/Project.css';

const Project = (props) => {
  return (
    <a href={props.liveLink} rel='noreferrer' target='_blank'>
      <div className='project-slide-container'>
        <div className='project-slide' style={{}}>
          <div>
            <div style={{ width: '100%', height: '100%' }}>
              <img
                style={{
                  maxWidth: '100%',
                  objectFit: 'contain',
                  maxHeight: '100%',
                }}
                src={props.screenshot}
              />
            </div>
          </div>

          <p className='legend'>
            <b>{props.title}</b> -{' '}
            {props.techUsed.map((tech) => tech).join(' | ')}
          </p>
        </div>
      </div>
    </a>
    // <li className='Project'>
    //   <div className='proj-left'>
    //     {!!props.title ? <h3>{props.title}</h3> : null}
    //     {!!props.description ? (
    //       <p className='description'>
    //         <b>Description: </b>
    //         {props.description}
    //       </p>
    //     ) : null}
    //     {!!props.techUsed ? (
    //       <p>
    //         <b>Tech Stack:</b> {makeTechString(props.techUsed)}
    //       </p>
    //     ) : null}
    //     {!!props.liveLink ? (
    //       <button>
    //         <a href={props.liveLink} rel='noreferrer' target='_blank'>
    //           See it in Action
    //         </a>
    //       </button>
    //     ) : null}
    //     {!!props.frontEndRepo ? (
    //       <a href={props.frontEndRepo} rel='noreferrer' target='_blank'>
    //         Client Side Repo
    //       </a>
    //     ) : null}
    //     {props.backEndRepo ? (
    //       <a href={props.backEndRepo} rel='noreferrer' target='_blank'>
    //         Server Side Repo
    //       </a>
    //     ) : null}
    //   </div>
    //   {!!props.screenshot && !!props.title ? (
    //     <div className='proj-img'>
    //       <img src={props.screenshot} alt={props.title} />
    //     </div>
    //   ) : null}
    // </li>
  );
};

export default Project;

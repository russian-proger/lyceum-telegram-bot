require('./LoadButton.sass');

import React from 'react';

/**
 * 
 * @param {{
 *  onClick:   function,
 *  className: string,
 *  beside:    boolean
 * }} props
 */
export default function LoadButton(props) {
  
  const [state, setState] = React.useState({
    active: false
  });

  function onClick() {
    if (!props.onClick) return null;

    let promise = props.onClick();
    if (promise instanceof Promise) {
      promise.then(() => setState({ active: false }));
      setState({ active: true });
    }
  }
  
  const spinner = state.active && (
    <div className={`ms-2 spinner-grow spinner-grow-sm ${props.beside ? "text-primary" : ""}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );

  return (
    <React.Fragment>
      <button type="button"
        className={`btn btn-primary ${props.className}`}
        disabled={ state.active }
        onClick={ onClick }
        > { props.children }
        {!props.beside && spinner}
      </button>
      {props.beside && spinner}
    </React.Fragment>
  );
}
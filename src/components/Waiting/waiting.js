import React from 'react';

import '../../scss/main.scss';

function Waiting(props) {
  return (
    <section className='Waiting'>
      <p className='Waiting-timer'>
        0:
        {props.seconds < 10 ? `0${props.seconds}` : props.seconds}
      </p>
      <div className='Waiting-text-wrapper'>
        <p className='Waiting-title'>Ptvrzení požadavku</p>
        <p className='Waiting-text'>
          <span className='Waiting-link-span'>
            <a className='Waiting-link' href='#' onClick={props.click}>
              Odeslat SMS
            </a>
          </span>
          <span className='Waiting-text-span'>s potvrzovacím kódem.</span>
        </p>
      </div>
    </section>
  );
}

export default Waiting;

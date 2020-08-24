import React from 'react';

function Waiting(props) {
  return (
    <section className='waiting'>
      <p className='waiting__timer'>
        0:
        {props.seconds < 10 ? `0${props.seconds}` : props.seconds}
      </p>
      <div className='waiting__text-wrapper'>
        <p className='waiting__title'>Ptvrzení požadavku</p>
        <p className='waiting__text'>
          <span className='waiting__link-span'>
            <a className='waiting__link' href='#' onClick={props.click}>
              Odeslat SMS
            </a>
          </span>
          <span className='waiting__text-span'>s potvrzovacím kódem.</span>
        </p>
      </div>
    </section>
  );
}

export default Waiting;

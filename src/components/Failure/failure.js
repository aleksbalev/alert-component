import React from 'react';

import '../../scss/main.scss';

function Failure(props) {
  return (
    <section className='Failure'>
      <div className='Failure-times-wrapper'>
        <svg className='Failure-circle' viewBox='0 0 512 512'>
          <path d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z' />
        </svg>
        <svg className='Failure-times' viewBox='0 0 320 512'>
          <path d='M193.94 256L296.5 153.44l21.15-21.15c3.12-3.12 3.12-8.19 0-11.31l-22.63-22.63c-3.12-3.12-8.19-3.12-11.31 0L160 222.06 36.29 98.34c-3.12-3.12-8.19-3.12-11.31 0L2.34 120.97c-3.12 3.12-3.12 8.19 0 11.31L126.06 256 2.34 379.71c-3.12 3.12-3.12 8.19 0 11.31l22.63 22.63c3.12 3.12 8.19 3.12 11.31 0L160 289.94 262.56 392.5l21.15 21.15c3.12 3.12 8.19 3.12 11.31 0l22.63-22.63c3.12-3.12 3.12-8.19 0-11.31L193.94 256z' />
        </svg>
      </div>
      <div className='Failure-text-wrapper'>
        <p className='Failure-title'>Požadavek nebyl potvrzen.</p>
        <div className='Failure-try-again-wrapper'>
          <svg className='Failure-again-icon' viewBox='0 0 512 512'>
            <path d='M483.515 28.485L431.35 80.65C386.475 35.767 324.485 8 256 8 123.228 8 14.824 112.338 8.31 243.493 7.971 250.311 13.475 256 20.301 256h28.045c6.353 0 11.613-4.952 11.973-11.294C66.161 141.649 151.453 60 256 60c54.163 0 103.157 21.923 138.614 57.386l-54.128 54.129c-7.56 7.56-2.206 20.485 8.485 20.485H492c6.627 0 12-5.373 12-12V36.971c0-10.691-12.926-16.045-20.485-8.486zM491.699 256h-28.045c-6.353 0-11.613 4.952-11.973 11.294C445.839 370.351 360.547 452 256 452c-54.163 0-103.157-21.923-138.614-57.386l54.128-54.129c7.56-7.56 2.206-20.485-8.485-20.485H20c-6.627 0-12 5.373-12 12v143.029c0 10.691 12.926 16.045 20.485 8.485L80.65 431.35C125.525 476.233 187.516 504 256 504c132.773 0 241.176-104.338 247.69-235.493.339-6.818-5.165-12.507-11.991-12.507z' />
          </svg>
          <span>
            <a className='Failure-link' onClick={props.click}>
              Zkusit znovu
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}

export default Failure;

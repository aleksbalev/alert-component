import React from 'react';

import '../../scss/main.scss';

function Success() {
  return (
    <section className='Success'>
      <div className='Success-checkmark-wrapper'>
        <svg className='Success-circle' viewBox='0 0 512 512'>
          <path d='M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z' />
        </svg>
        <svg className='Success-checkmark' viewBox='0 0 512 512'>
          <path d='M435.848 83.466L172.804 346.51l-96.652-96.652c-4.686-4.686-12.284-4.686-16.971 0l-28.284 28.284c-4.686 4.686-4.686 12.284 0 16.971l133.421 133.421c4.686 4.686 12.284 4.686 16.971 0l299.813-299.813c4.686-4.686 4.686-12.284 0-16.971l-28.284-28.284c-4.686-4.686-12.284-4.686-16.97 0z' />
        </svg>
      </div>
      <p className='Success-title'>Požadavek byl potvrzen.</p>
    </section>
  );
}

export default Success;

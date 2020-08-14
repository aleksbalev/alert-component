import React, {useEffect, useState} from 'react';

import Success from './Success/success';
import Faulire from './Failure/failure';
import Waiting from './Waiting/waiting';

import '../../styles/scss/main.scss';

function AlertComponent() {
  const [seconds, setSeconds] = useState(5);
  const [sended, setSended] = useState(false);

  const setInitialState = (evt) => {
    evt.preventDefault();
    setSeconds(5);
    setSended(false);
  };

  const handleClickSend = () => {
    setSended(!sended);
  };

  useEffect(() => {
    const myInterval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }
    }, 1000);

    return () => {
      clearInterval(myInterval);
    };
  });

  return (
    <div className='Alert'>
      {sended ? (
        <Success click={setInitialState} />
      ) : seconds === 0 && sended === false ? (
        <Faulire click={setInitialState} />
      ) : (
        <Waiting seconds={seconds} click={handleClickSend} />
      )}
    </div>
  );
}

export default AlertComponent;

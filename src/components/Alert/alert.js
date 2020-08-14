import React, {useEffect, useState} from 'react';

import Success from '../Success/success';
import Faulire from '../Failure/failure';
import Waiting from '../Waiting/waiting';

function Alert() {
  const [seconds, setSeconds] = useState(5);
  const [sended, setSended] = useState(false);

  const setInitialState = (evt) => {
    evt.preventDefault();
    setSeconds(5);
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
        <Success />
      ) : seconds === 0 && sended === false ? (
        <Faulire click={setInitialState} />
      ) : (
        <Waiting seconds={seconds} click={handleClickSend} />
      )}
    </div>
  );
}

export default Alert;

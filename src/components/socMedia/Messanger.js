import React from 'react';
import messengerIcon from '../../assets/icons/messenger.svg';
export const Messenger= () => {
  const userName = 'Gurami Tchumburidze '

  const initialMessage = 'Hallo, ich möchte mit dir sprechen!'; // Hier deine Nachricht eintragen

  const messengerUrl = `https://m.me/${userName}?send=${encodeURIComponent(initialMessage)}`;

 
  return (
    <a className='messenger-container' href={messengerUrl} target="_blank" rel="noopener noreferrer">
      <img src={messengerIcon} alt="image Icon"/>
    </a>
  );
};
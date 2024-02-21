import React from 'react';
import messengerIcon from '../../assets/icons/messenger.svg';
export const Messenger= () => {
  const userName = 'CleaningTools • ქიმწმენდის აპარატის გაქირავება'



  const messengerUrl = `https://www.facebook.com/Cleaningtoolstbilisi?mibextid=eQY6cl`;

 
  return (
    <a className='messenger-container' href={messengerUrl} target="_blank" rel="noopener noreferrer">
      <img src={messengerIcon} alt="image Icon"/>
    </a>
  );
};
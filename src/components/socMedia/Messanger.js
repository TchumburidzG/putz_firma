
import messengerIcon from '../../assets/icons/messenger.svg';
export const Messenger= ({messengerUrl}) => {
  return (
    <a className='messenger-container padding' href={messengerUrl} target="_blank" rel="noopener noreferrer">
      <img src={messengerIcon} alt="image Icon"/>
    </a>
  );
};
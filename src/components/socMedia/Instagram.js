import instagramIcon from '../../assets/icons/instagram.svg';

export const Instagram = () => {
  const instagramUrl = 'https://www.instagram.com/cleaning.tools.ge/';
  return (
    <a className='messenger-container padding' href={instagramUrl} target="_blank" rel="noopener noreferrer">
      <img src={instagramIcon} alt="image Icon"/>
    </a>
  );
};

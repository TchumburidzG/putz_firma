import instagramIcon from '../../assets/icons/instagram.svg';

export const Instagram = () => {
  const username = 'lzosiashvili';
  const instagramUrl = `https://www.instagram.com/${username}/`;

  return (
    <a className='messenger-container' href={instagramUrl} target="_blank" rel="noopener noreferrer">
      <img src={instagramIcon} alt="image Icon"/>
    </a>
  );
};

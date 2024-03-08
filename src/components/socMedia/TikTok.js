import tiktokIcon from '../../assets/icons/tiktok.svg';

export const TikTok = () => {
  const username = 'worldfactstv100';
  const tiktokUrl = `https://www.tiktok.com/@cleaningtools7`;

  return (
    <a className='messenger-container padding' href={tiktokUrl} target="_blank" rel="noopener noreferrer">
      <img className='draging' src={tiktokIcon} alt="image Icon"/>
    </a>
  );
};

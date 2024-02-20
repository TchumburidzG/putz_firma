import tiktokIcon from '../../assets/icons/tiktok.svg';

export const TikTok = () => {
  const username = 'worldfactstv100';
  const tiktokUrl = `https://www.tiktok.com/@${username}`;

  return (
    <a className='messenger-container' href={tiktokUrl} target="_blank" rel="noopener noreferrer">
      <img src={tiktokIcon} alt="image Icon"/>
    </a>
  );
};

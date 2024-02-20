import whatsAppIcon from '../../assets/icons/whatsapp.svg';
export const WhatsApp = () => {
  const phoneNumber = +4917682195726
  const message = 'გამარჯობა'
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a className='whatsapp-container' href={whatsappUrl} target="_blank" rel="noopener noreferrer">
      <img src={whatsAppIcon} alt="image Icon"/>
    </a>
  );
};

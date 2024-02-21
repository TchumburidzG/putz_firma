import { WhatsApp } from '../socMedia/Whatsapp';
import { Messenger } from '../socMedia/Messanger';
import { Instagram } from '../socMedia/Instagram';
import { TikTok } from '../socMedia/TikTok';
function Contact() {
  return (
    <div>
      <div className="contact-info">
        <p>ტელეფონი: 0761 / 61 29 17 39 </p>
        <p>მაილი: infocleaningtools@gmail.com</p>
        <p>

        </p>
        <WhatsApp />
        <Messenger />
        <Instagram />
        <TikTok />
      </div>

      <div className="google-maps">
        <div className="name-maps">
          <a href="https://maps.app.goo.gl/4La83NfXsCmuoJLy5" target='_blank' rel='noopener noreferrer'>
            გვიპოვე გუგლის რუკაზე
          </a>
        </div>
        <iframe
          className="besika"
          allowFullScreen={true}
          loading="async"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4966.388503017338!2d7.892806100651802!3d47.981225572516465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47911d25c5127fbf%3A0xdb0509407fcafccb!2sOuzeria!5e1!3m2!1ska!2sde!4v1702056973203!5m2!1ska!2sde"
        >
        </iframe>

      </div>
    </div>
  )
};
export default Contact;
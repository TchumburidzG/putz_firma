import "./footer.css"
import Impresum from "../Impresum/Impresum";
import Link from "../link";

function Footer() {
  return (
    <div className="footer-container">
      <div className="line"></div>
      <div className="categories-container">
        <div className="contact">
          <h4 className="footer-titles">
          <Link key={Impresum} to={'/contact'} >
              {'Kontakt'}
            </Link>
          </h4>
          <div className="contact-info">
            <p>Telefon: 0761 / 61 29 17 39 </p>
            <p>E-Mail: info@ouzeria-freiburg.de</p>
              <p>Adresse: Lindenmattenstraße 4 79117 Freiburg </p>
              <p>
                <a href="https://maps.app.goo.gl/4La83NfXsCmuoJLy5" target='_blank' rel='noopener noreferrer'>
                  So finden Sie uns (Google-Link)
                </a>
              </p>
          </div>
        </div>
        <div className="about-us">
          <h4 className="footer-titles">Über uns</h4>
        </div>
        <div className="impresum">
          <h4 className="footer-titles">
            <Link key={Impresum} to={'/impresum'} >
              {'Impresum'}
            </Link>
          </h4>
        </div>
      </div>
    </div>
  )
};

export default Footer;
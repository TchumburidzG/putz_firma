import './services.css'
import { Messenger } from '../socMedia/Messanger';
import auto from '../../assets/pics/auto.jpg';
import present from '../../assets/pics/present.avif';
import instruction from '../../assets/pics/instruction.avif';
import floor from '../../assets/pics/floor.jpg';
import afterRepair from '../../assets/pics/afterrepair.jpg';
import general from '../../assets/pics/general.jpg';
import furniture from '../../assets/pics/furniture.jpeg';
const messengerUrl = 'https://www.facebook.com/cleanservicegeo';


function Services(){
  return (
    <div className="services-container">
      <div className="services-title">
        ჩვენი სერვისები
      </div>
      <ul className='list-services'>
        <li>
          <img src={auto} className='services-icon' />
          <div className='service-offers'>
            აპარატის თქვენთან მოტანა და წაღება <a>უფასოდ</a>
          </div>
        </li>
        <li>
          <img src={present} className='services-icon' />
          <div className='service-offers'>
            სპეციალური ანტიალერგიული საწმენდი ხსნარი <a>საჩუქრად</a>
          </div>
        </li>
        <li>
          <img src={instruction} className='services-icon' />
          <div className='service-offers'>
            მოხმარების ინსტრუქტაჟი, <a>საუკეთესო შედეგი</a>სთვის
          </div>
        </li>
      </ul>

      <div className='other-services'>
        <div className='services-title'>
          ჩვენ ასევე გთავაზობთ
        </div>
        <ul className='list-services'>
          <li>
            <div className='service-offers'>
              გენერალურ დალაგებას
            </div>
            <img src={general} className='services-icon' />
          </li>
          <li>
            <div className='service-offers'>
              რემონტის შემდგომ დალაგებას
            </div>
            <img src={afterRepair} className='services-icon' />
          </li>
          <li>
            <div className='service-offers'>
              რბილი და მყარი იატიკის წმენდას
            </div>
            <img src={floor} className='services-icon' />
          </li>
          <li>
            <div className='service-offers'>
              ავეჯის ქიმწმენდას
            </div>
            <img src={furniture} className='services-icon' />
          </li>
        </ul>
        <div className='contact-us'>
          გვნახე ფეისბუქზე
          <div className='my-messenger'>
            <Messenger messengerUrl={messengerUrl} />
            <a href='https://www.facebook.com/cleanservicegeo' >
              cleanservice.ge
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Services;
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import dd from '../../assets/pics/puzzi81.jpg';
import bb from '../../assets/pics/puzzi82.jpg';
import aa from '../../assets/pics/puzzi83.jpg';
import cc from '../../assets/pics/puzzi84.jpg';
import next from '../../assets/icons/next.svg';
import back from '../../assets/icons/back.svg';
import closeIcon from '../../assets/icons/close.svg';
import { Modal } from '../Modal/Modal';

const allPics = {
  dd,
  bb,
  aa,
  cc,
};


export default function MobilSlider({ showMore, setShowMore }) {

  const closeModal = () => {
    setShowMore(false);
  };

  const CustomPrevArrow = ({ onClick }) => (
    <button className="custom-prev-arrow arrows" onClick={onClick}>
      <img src={back} alt="Previous" />
    </button>
  );

  const CustomNextArrow = ({ onClick }) => (
    <button className="custom-next-arrow arrows" onClick={onClick}>
      <img src={next} alt="Next" />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    centerMode: true,
    centerPadding: '0',
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
  };

  const morePics = () => {
    return Object.values(allPics).map((singlePic, index) => (
      <div key={index} className='slider-pics'>
        <img src={singlePic} alt={`Image ${index + 1}`} />
        <p className="legend">აპარატის აღწერილობა ან რამე დამატებითი ინფორმაცია</p>
      </div>
    ));
  };

  return (
    <div className='modal-and-slider-container'>
      <Modal onClose={setShowMore}>
        <div className='close-modal' >
          <div className='close-icon'>
            <img src={closeIcon} onClick={closeModal}/>
          </div>
        </div>
        <Slider {...settings}>

          {morePics()}</Slider>
      </Modal>
    </div>
  );
}

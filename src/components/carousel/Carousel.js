import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';
import puzzi81 from '../../assets/pics/puzzi81.jpg';
import puzzi82 from '../../assets/pics/puzzi82.jpg';
import puzzi83 from '../../assets/pics/puzzi83.jpg';
import puzzi103 from '../../assets/pics/puzzi103.jpg';
import puzzi10 from '../../assets/pics/puzzi10.jpg';
import puzzi101 from '../../assets/pics/puzzi101.jpg';
import puzzi8 from '../../assets/pics/puzzi8.jpg';
import text from '../../assets/pics/text.jpg';
import next from '../../assets/icons/next.svg';
import back from '../../assets/icons/back.svg';

const allPics = {
  puzzi8: {
    puzzi8,
    text,
    puzzi81,
    puzzi82,
    puzzi83,
  },
  puzzi10: {
    puzzi10,
    text,
    puzzi101,
    puzzi103,
  }
};


export default function MobilSlider({ dispayedItem, item }) {

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
    return Object.values(allPics[item.name]).map((singlePic, index) => (
      <div key={index} className='slider-pics'>
        <div className='img-container'><img src={singlePic} alt={`Image ${index + 1}`} /></div>
        <div className="card__content">
    
          <div className="prices">
            <a>3 სთ- {item.price1}₾</a>
            <a className='distance'>24 სთ- {item.price2}₾</a>
          </div>
          <div className="card__text">
            {item.purpose}
          </div>
        </div>
      </div>
    ));
  };

  return (

    <div className="modal-content" >
      <Slider {...settings}>
        {morePics()}
      </Slider>
    </div>
  );
}

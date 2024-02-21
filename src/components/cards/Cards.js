import React, { useEffect, useState } from 'react';
import './cards.css';
import { readCSV } from '../../Untils/utils';
import puzzi8 from '../../assets/pics/puzzi8.jpg';
import puzzi10 from '../../assets/pics/puzzi10.jpg';
import MobilSlider from '../carousel/Carousel'
export default function Cards({ setShowMore, setDispeyedItem, dispayedItem }) {
  const handleClick = (itemName) => {
    setShowMore(true);
    setDispeyedItem(itemName)
  }
  const [csvData, setCsvData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        setCsvData(await readCSV())
      } catch (error) {
        console.error('Error fetching CSV data:', error);
      }
    };
    fetchData();
  }, [setCsvData]); // Empty dependency array ensures useEffect runs only once on component mount
  const getImg = (name) => {
    if (name === 'puzzi8') {
      return puzzi8
    } else {
      return puzzi10
    }
  }
  const besika = () => {
    if (csvData) {
      return csvData.map((item, index) => (
        <li className="cards__item" key={index} onClick={() => { handleClick(item.name) }} >
          {/* <div className="card"> */}
          <MobilSlider dispayedItem={dispayedItem} />
            {
            /* <div className="card__image ">
              <img src={getImg(item.name)} />
            </div>
            <div className="card__content">
              <div className="model-name">ქიმწმენდი აპარატის გაქირავება </div>
              <div className="prices">
             
                  <a>3 სთ- {item.price1}₾</a> 
                  <a className='distance'>24 საათი {item.price2}₾</a>
             
                </div>
              <div className="card__text">
                {item.purpose}
              </div>
              <div className='see-more'> მეტის სანახავად გახსენი ფოტო</div>
            </div> */
            }
          {/* </div> */}
        </li>
      ));
    }
  };
  return <ul className="cards">{besika()}</ul>;
}

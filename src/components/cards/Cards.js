import React, { useEffect, useState } from 'react';
import './cards.css';
import { readCSV } from '../../Untils/utils';
import puzzi80 from '../../assets/pics/puzzi80.jpg'
    //<img src={puzzi80} />*/
export default function Cards({ showMore, setShowMore }) {
  const handleClick = () => {
    setShowMore(true);
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
  const besika = () => {
    if (csvData) {
      return csvData.map((item, index) => (
        <li className="cards__item" key={index} onClick={handleClick}>
          <div className="card">
            <div className="card__image card__image--fence">
          
            </div>
            <div className="card__content">
              <div className="card__title"> {item.name} </div>
              <div className="">მოდელი: {item.model} </div>
              <div className="">
                <div>3 საათი 50₾</div>
                <div>24 საათი 80₾</div> 
                </div>
              <div className="card__text">
                {item.purpose} წაიკითხე მეტი...
              </div>
            </div>
          </div>
        </li>
      ));
    }
  };
  return <ul className="cards">{besika()}</ul>;
}

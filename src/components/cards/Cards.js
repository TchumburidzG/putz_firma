import React, { useEffect, useState } from 'react';
import './cards.css';
import { readCSV } from '../../Untils/utils';
import MobilSlider from '../carousel/Carousel'
import Services from '../services/Services';
export default function Cards({ dispayedItem }) {
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
  const cards = () => {
    if (csvData) {
      return csvData.map((item, index) => (
        <li className="cards__item" key={index}  >
          <MobilSlider dispayedItem={dispayedItem} item={item} />
        </li>
      ));
    }
  };
  return (
    <div className='body-container'>
      <ul className="cards">{cards()}</ul>
      <Services />
    </div>);
}

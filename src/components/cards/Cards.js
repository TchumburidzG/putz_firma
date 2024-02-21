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
        <li className="cards__item" key={index}  >
          <MobilSlider dispayedItem={dispayedItem} item={item} />
        </li>
      ));
    }
  };
  return <ul className="cards">{besika()}</ul>;
}

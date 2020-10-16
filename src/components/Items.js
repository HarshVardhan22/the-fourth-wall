import React from 'react';
import ReactDOM from 'react-dom';

import InfiniteCarousel from 'react-leaf-carousel';

import item1 from "./images/item1.png";
import item2 from "./images/item2.png";
import item3 from "./images/item3.png";
import item4 from "./images/item4.png";
import item5 from "./images/item5.png";
import item6 from "./images/item6.png";
import item7 from "./images/item7.png";
import item8 from "./images/item8.png";

const Items = () => {
    return(

  <InfiniteCarousel
    breakpoints={[
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ]}
    dots={true}
    showSides={true}
    sidesOpacity={0.5}
    sideSize={0.1}
    slidesToScroll={4}
    slidesToShow={4}
    scrollOnDevice={true}
  >
    <div>
      <img
        alt=""
        src={item1}
      />
    </div>
    <div>
      <img
        alt=""
        src={item2}
      />
    </div>
    <div>
      <img
        alt=""
        src={item3}
      />
    </div>
    <div>
      <img
        alt=""
        src={item4}
      />
    </div>
    <div>
      <img
        alt=""
        src={item5}
      />
    </div>
    <div>
      <img
        alt=""
        src={item6}
      />
    </div>
    <div>
      <img
        alt=""
        src={item7}
      />
    </div>
    <div>
      <img
        alt=""
        src={item8}
      />
    </div>
    document.getElementById('root'))
  </InfiniteCarousel>,
}

export default Items;
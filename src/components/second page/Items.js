import React from 'react';


import InfiniteCarousel from 'react-leaf-carousel';

import "../../App.css";

import item1 from "../images/item1.png";
import item2 from "../images/item2.png";
import item3 from "../images/item3.png";
import item4 from "../images/item4.png";
import item5 from "../images/item5.png";
import item6 from "../images/item6.png";
import item7 from "../images/item7.png";
import item8 from "../images/item8.png";

const Items = () => {
    return (
        <div className="container">
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
            showSides={false}
            sidesOpacity={1}
            sideSize={0.1}
            slidesToScroll={1}
            slidesToShow={4}
            scrollOnDevice={true}
            autoCycle={true}
            slidesSpacing={10}
          >
            <div>
              <img alt="" src={item1} height="230px" width="auto" />
            </div>
            <div>
              <img alt="" src={item2} height="230px" width="auto" />
            </div>
            <div>
              <img alt="" src={item3} height="230px" width="auto" />
            </div>
            <div>
              <img alt="" src={item4} height="230px" width="auto" />
            </div>
            <div>
              <img alt="" src={item5} height="230px" width="auto" />
            </div>
            <div>
              <img alt="" src={item6} height="230px" width="auto" />
            </div>
            <div>
              <img alt="" src={item7} height="230px" width="auto" />
            </div>
            <div>
              <img alt="" src={item8} height="230px" width="auto" />
            </div>
            
          </InfiniteCarousel>
        </div>
    );};

export default Items;
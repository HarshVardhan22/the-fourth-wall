import React from "react";
import "./thirdPage.css";
import { ImEarth } from "react-icons/im";
import { AiFillTags } from "react-icons/ai";
import { AiOutlineFileDone } from "react-icons/ai";
import {RiSecurePaymentFill} from "react-icons/ri"

const ThirdPage = () =>{
    return (
      <div className=" bg">
        <div className="heading">
          <h1>Create The Look</h1>
          <div className="baseLine"></div>
        </div>

        <div className="main">
          <div className="subContainer">
            <h3>Limited Time Offer</h3>
            <h1>Special Edition</h1>
            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat
              id nobis in inventore porro impedit neque quia praesentium animi
              fugiat error, labore velit recusandae pariatur, rerum dolore
              architecto consequuntur quibusdam.
            </h5>
            <br />
            <h4>Buy this at 20% discount, use Harsh20 as coupon code</h4>

            {/* *******user should be able to upload the image or link***** */}

            <button>Upload Image</button>
          </div>
        </div>

        <div className="below">
          <div className="icons">
            <i>
              <ImEarth size={100} />
            </i>
            <h3>Worlwide Shipping</h3>
            <h5>
              Rest assured, we will deliver your wish right at your doorstep!!{" "}
            </h5>
          </div>
          <div className="icons">
            <i>
              <RiSecurePaymentFill size={100} />
            </i>
            <h3>Best Quality</h3>
            <h5>
              Placeat, ea sunt autem adipisci aliquid facere laboriosam
              voluptatibus.
            </h5>
          </div>
          <div className="icons">
            <i>
              <AiFillTags size={100} />
            </i>
            <h3>Best Offers</h3>
            <h5>
              Lorem ipsum dolor sit amet consectetur, adipisicing elids sjsh
              cjksjobaj{" "}
            </h5>
          </div>
          <div className="icons">
            <i>
              <AiOutlineFileDone size={100} />
            </i>
            <h3>Secure Payments</h3>
            <h5>
              Placeat, ea sunt autem adipisci aliquid facere laboriosam
              voluptatibus.
            </h5>
          </div>
        </div>
      </div>
    );
}

export default ThirdPage;
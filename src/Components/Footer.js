import React from "react";
import { MdAgriculture, MdStoreMallDirectory } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineCar, AiOutlineApple } from "react-icons/ai";
import {IoMdNotificationsOutline} from 'react-icons/io'


const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <MdStoreMallDirectory size={30} />
          <h1>Search Store</h1>
        </div>
        <div>
          <MdAgriculture size={30} />
          <h1>Farmers' Market</h1>
        </div>
        <div>
          <AiOutlineCar size={30} />
          <h1>Book Logistics</h1>
        </div>
        <div>
          <BsCart2 size={30} />
          <h1>My Cart</h1>
        </div>
        <div>
          <IoMdNotificationsOutline size={30} />
          <h1>Notification</h1>
        </div>
      </div>
      <div>
        <div>Download FarmyApp App here</div>
        <div>
            <AiOutlineApple size={30} />
          <h1>Available on App Store</h1>
        </div>
        <div>
          <h1>Get it on Google Store</h1>
        </div>
      </div>
      <div>
        <div>
          <h1>
            For more information contact talktous@farmyapp.com +2348110175635,
            +2348110175793, +2348110175727
          </h1>
        </div>
        <div>
          <h1>
            NEW TO FarmyApp? Subscribe to our newsletter to get updates on our
            latest offers!
          </h1>
          <form>
            <input value="" placeholder="Enter your Email here" />
            <button>Enter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;

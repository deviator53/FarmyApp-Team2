import React from "react";
import { MdAgriculture, MdStoreMallDirectory } from "react-icons/md";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineCar, AiOutlineApple } from "react-icons/ai";
import {IoMdNotificationsOutline} from 'react-icons/io';

import '../styles/footer.css'


const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_items">
        <div className="footer_item">
          <MdStoreMallDirectory size={30} />
          <div className="footer-item-div">Search Store</div>
        </div>
        <div className="footer_item">
          <MdAgriculture size={30} />
          <div className="footer-item-div">Farmers' Market</div>
        </div>
        <div className="footer_item">
          <AiOutlineCar size={30} />
          <div className="footer-item-div">Book Logistics</div>
        </div>
        <div className="footer_item">
          <BsCart2 size={30} />
          <div className="footer-item-div">My Cart</div>
        </div>
        <div className="footer_item">
          <IoMdNotificationsOutline size={30} />
          <div className="footer-item-div">Notification</div>
        </div>
      </div>
      <div className="footer_items">
        <div>Download FarmyApp App here</div>
        <div className="footer_item footer_apple">
            <AiOutlineApple size={30}/>
          <div><span className="footer_span1">Available on</span>  <span className="footer_span2">App Store</span></div>
        </div>
        <div className="footer_item footer_google">
          <div>Get it on Google Store</div>
        </div>
      </div>
      <div className="footer_items">
        <div className="footer_info">
          <div>
            For more information contact talktous@farmyapp.com 
          </div>
          <div>+2348110175635,
            +2348110175793, +2348110175727</div>
        </div>
        <div className="footer_info">
          <div className="footer_info">
            NEW TO FarmyApp? Subscribe to our newsletter to get updates on our
            latest offers!
          </div>
          <form >
            <input value="" placeholder="Enter your Email here..." className="footer_input" />
            <button className="footer_btn">Enter</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Footer;

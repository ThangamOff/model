import React from "react";
import "./Profile.css";
import { LuWallet } from "react-icons/lu";
import { PiCompass } from "react-icons/pi";
import { FiFileText } from "react-icons/fi";
import { IoWalletOutline } from "react-icons/io5";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { FaFile } from "react-icons/fa6";
import { RxExit } from "react-icons/rx";
import logo from "../../Assets/Images/logo1.jpg";

import { FaRegEdit } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { MdCurrencyRupee } from "react-icons/md";
import { FiUsers } from "react-icons/fi";
import { LuFileType2 } from "react-icons/lu";


const Profile = () => {
  const [add, setadd] = useState(false);

  return (
    <>
      <div className="container">
        <div className="left_container">
          <div className="left_container_img">
           <img src={logo} alt="" />
           <h1>HireIn5</h1>
          </div>
          <div className="left_top">
            <div className="top_content">
              <p>Divya Gupta</p>
              <p>Apple Inc.</p>
            </div>
            <div className="top_content1">
              <p>DG</p>
            </div>
          </div>

          <div className="left_center">
            <div className="left_list">
              <p>
                <PiCompass />
              </p>
              <p>Discover</p>
            </div>
            <div className="left_list">
              <p>
                <FiUsers />
              </p>
              <p>Interviews</p>
            </div>
            <div className="left_list">
              <p>
                <FiFileText />
              </p>
              <p>Contracts</p>
            </div>
            <div className="left_list">
              <p>
                <FaFile />
              </p>
              <p>Billing</p>
            </div>
            <div className="left_list">
              <p>
                <IoWalletOutline />
              </p>
              <p>Wallet</p>
            </div>
            <div className="left_list">
              <p>
                <IoIosHelpCircleOutline />
              </p>
              <p>Help & FAQs</p>
            </div>
          </div>

          <div className="left_bottom">
            <div className="top_content3">
              <p><LuWallet /></p>
            </div>
            <div className="top_content4">
              <p>H5 Cash</p>
              <div className="top_content4_rupe">
                <MdCurrencyRupee className="rupe" />
                <h2>5000</h2>
              </div>
            </div>
          </div>
          <div className="left_out">
            <p><RxExit /></p>
            <p>Log out</p>
          </div>
        </div>
        <div className="right">
        <div className="right_container">
          <div className="right_header">
            <div className="heading">
              <h1>Billing</h1>
              <p>Some caption which sets more context for this page</p>
            </div>
            <div className="heading1">
              <p><span>$</span>150</p>
              <div className="low">
                <p>Low Balance</p>
              </div>
            </div>
          </div>
          <div className="add_credit" onClick={() => setadd(true)}>
            <p>Add Credit <span>+</span></p>
          </div>
          <div className="detail_boxs">
            <div className="box1">
              <h2>Details</h2>
              <div className="box2_content1">
                <p>Billing cycle</p>
                <div className="box1_icon">
                  <p>Monthly</p>
                  <p>
                    <FaRegEdit className="edit" />
                  </p>
                </div>
              </div>
              <div className="box2_content1">
                <p>Payment method</p>
                <div className="box1_icon">
                  <p>Mastercard ending in 0076</p>
                  <p>
                    <FaRegEdit className="edit" />
                  </p>
                </div>
              </div>
              <div className="box2_content1">
                <p>Billing email</p>
                <div className="box1_icon">
                  <p>divyagupta@gmail.com</p>
                  <p>
                    <FaRegEdit className="edit" />
                  </p>
                </div>
              </div>
            </div>
            <div className="box2">
              <div className="box2_content">
                <h2>Current plan</h2>
                <p>Upgrade plan</p>
              </div>
              <div className="box2_content1">
                <p>Type</p>
                <p>starter</p>
              </div>
              <div className="box2_content1">
                <p>Amount</p>
                  <div className="top_content4_rupe">
                    <MdCurrencyRupee className="rupe1" />
                    <h2>24999/month</h2>
                  </div>
              </div>
              <div className="box2_content1">
                <p>Next billing</p>
                <p>24/12/23</p>
              </div>
            </div>
          </div>
          <h2 className="invoice">Invoices</h2>
          <div className="right_btm_box">
            <div className="left_check">
              <h2>NAME</h2>
              <div className="left_check1">
                <div className="left_check12">
                  <p><LuFileType2 /></p>
                </div>
                <p>Invoice_no.123456</p>
              </div>
              <div className="left_check1">
                <div className="left_check12">
                  <p><LuFileType2 /></p>
                </div>
                <p>Invoice_no.123456</p>
              </div>
              <div className="left_check1">
                <div className="left_check12">
                  <p><LuFileType2 /></p>
                </div>
                <p>Invoice_no.123456</p>
              </div>
            </div>

            <div className="right_check">
              <div className="right_check1">
                <h2>INVOICE DATE</h2>
                <p>24/12/23</p>
                <p>24/12/23</p>
                <p>24/12/23</p>
              </div>
              <div className="right_check2">
                <h2>AMOUNT</h2>
                  <div className="top_content4_rupe1">
                    <MdCurrencyRupee className="rupe2" />
                    <p>24,999</p>
                  </div>
                  <div className="top_content4_rupe1">
                    <MdCurrencyRupee className="rupe1" />
                    <p>24,999</p>
                  </div>
                  <div className="top_content4_rupe1">
                    <MdCurrencyRupee className="rupe1" />
                    <p>24,999</p>
                  </div>
              </div>
              <div  className="right_check3">
                <h2>STATUS </h2>
                <button className="paid">Paid</button>
                <button className="paid">Paid</button>
                <button className="paid">Paid</button>
              </div>
              <div  className="right_check4">
                <h2 className="op"><span>AAAAA</span></h2>
                <button className="download">Download</button>
                <button className="download">Download</button>
                <button className="download">Download</button>
                
              </div>
            </div>

          </div>
        </div>
        </div>
      </div>

      <div className={add ? "add_cart_container" : "add_cart_container1"} onClick={() => setadd(false)}>
        <div className="add_cart" onClick={(e) => e.stopPropagation()}>
          <div className="add_cart_head">
            <p>Add Credit to Your Wallet</p>
            <div className="close" onClick={() => setadd(false)}>
              <IoClose />
            </div>
          </div>
          <div className="add_cart_balance_con">
            <div className="add_cart_current">
              <h1><span>$</span>150</h1>
              <p>Current Balance</p>
            </div>
            <input type="text" className="balance_box" />
            <div className="balance_box1">
              <button>$500</button>
              <button>$1000</button>
              <button>$1500</button>
            </div>
            <button className="cart_crt_btn1">Add Credit</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;

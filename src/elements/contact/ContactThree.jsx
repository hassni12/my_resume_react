import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { toast } from "react-toastify";
import { toast } from "react-toastify";
import { submitDataApi } from "../../component/slice/submitEmail";

import emailjs from "@emailjs/browser";

const ContactThree = (props) => {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_e4bkmjr",
        "template_xv7swrb",
        e.target,
        "eFAxgwFuir-1_bjfF"
      )
      .then(
        (result) => {
          toast.success(`🦄 email sended result ${result.text}`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(result.text);
        },
        (error) => {
          toast.danger(`🦄 email error result ${error.text}`, {
            position: "top-right",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          console.log(error.text);
        }
      );
    e.target.reset();
    // }
  }

  return (
    <div className="contact-form--1">
      <div className="container">
        <div className="row row--35 align-items-start">
          <div className="col-lg-6 order-2 order-lg-1">
            <div className="section-title text-left mb--50">
              <h2 className="title">{props.contactTitle}</h2>
              <p className="description">
                I am available for freelance work. Contact with me via{" "}
                <div>
                  phone : <a href="tel:+923033728311">+923033728311</a>
                </div>{" "}
                <div>
                  whatsapp :{" "}
                  <a href="https://wa.me/03033723811">Send Message</a>
                </div>
                <div>
                  Email :
                  <a href="mailto:hassnainmuhammad647@gmail.com">
                    {" "}
                    hassnainmuhammad647@gmail.com
                  </a>
                </div>{" "}
              </p>
            </div>
            <div className="form-wrapper">
              <form onSubmit={sendEmail}>
                <label htmlFor="item01">
                  <input type="text" placeholder="Name" name="name" />
                </label>

                <label htmlFor="item02">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    required
                  />
                </label>

                <label htmlFor="item03">
                  <input
                    type="text"
                    placeholder="Subject"
                    name="subject"
                    required
                  />
                </label>
                <label htmlFor="item04">
                  <textarea
                  type="text"
                    placeholder="Your message"
                    name="message"
                    required
                  ></textarea>
                </label>

                <button
                  className="rn-button-style--2 btn-solid"
                  type="submit"
                  value="submit"
                  name="submit"
                  id="mc-embedded-subscribe"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2">
            <div className="thumbnail mb_md--30 mb_sm--30">
              <img src={`${props.contactImages}`} alt="trydo" />
            </div>
          </div>
        </div>
      </div>
      {/* <ToastContainer/> */}
    </div>
  );
};

export default ContactThree;

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { toast } from "react-toastify";
import { toast } from "react-toastify";

import { submitDataApi } from "../../component/slice/submitEmail";
// useSelector
// submitDataApi
// toast
const ContactThree = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  // console.log(name,email,subject)
  const submitHandler = (e) => {
    if (!name || !email || !subject || !message) {
      toast.warn("fill the filled" ,{
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      e.preventDefault();
      dispatch(submitDataApi({ name, email, subject, message }));
      toast.success("🦄 email sended", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      }
        );
      setName("");
      setEmail("");
      setMessage("");
      setSubject("");
    }
  };
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
              <form onSubmit={(e) => submitHandler(e)}>
                <label htmlFor="item01">
                  <input
                    type="text"
                    name="name"
                    id="item01"
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                    }}
                    placeholder="Your Name *"
                  />
                </label>

                <label htmlFor="item02">
                  <input
                    type="text"
                    name="email"
                    id="item02"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    placeholder="Your email *"
                  />
                </label>

                <label htmlFor="item03">
                  <input
                    type="text"
                    name="subject"
                    id="item03"
                    value={subject}
                    onChange={(e) => {
                      setSubject(e.target.value);
                    }}
                    placeholder="Write a Subject"
                  />
                </label>
                <label htmlFor="item04">
                  <textarea
                    type="text"
                    id="item04"
                    name="message"
                    value={message}
                    onChange={(e) => {
                      setMessage(e.target.value);
                    }}
                    placeholder="Your Message"
                  />
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

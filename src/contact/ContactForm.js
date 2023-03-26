import React, { useEffect, useRef, useState } from "react";
import "./ContactForm.css";
import "../components/PrimaryBtn.css";
import "../page/shared/Shared.css";
import { motion, useAnimation } from "framer-motion";
import { MdSend } from "react-icons/md";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { useInView } from "react-intersection-observer";
import { headingAnimation, contactAnimation } from "../hooks/useAnimation";

const ContactForm = () => {
  const form = useRef();
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: true });
  const [viewDiv, setViewDiv] = useState(false);
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      setViewDiv(true);
    } else {
      setViewDiv(false);
    }
  }, [inView, animation]);

  const handleSend = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_q6idbvb',
        'template_s46350d',
        form.current,
        'ZdfwUEGhfQ3wp-nAK'
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            iconColor: "195fa9",
            title: "Your Message has been sent",
            showConfirmButton: false,
            timer: 1500,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <div className="parent py-20">
      <motion.div
        initial="hidden"
        animate={viewDiv && "visible"}
        variants={headingAnimation}
      >
        {/* <BottomLine /> */}
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <motion.div
          className=""
          ref={ref}
          initial="hidden"
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
            <form ref={form} onSubmit={handleSend}>
              <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-6">
                <input
                  className="input-field"
                  type="text"
                  name="user_name"
                  id="name"
                  placeholder="Name"
                  required
                />
                <input
                  className="input-field"
                  type="email"
                  name="user_email"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>
              <textarea
                className="input-field"
                name="message"
                id="message"
                cols="30"
                rows="5"
                placeholder="Message"
                required
              ></textarea>
              <button
                type="submit"
                value="Send Message"
                className="primary-button"
              >
                <span>Send</span>
                <span><MdSend /></span>
              </button>
            </form>
        </motion.div>
        <motion.div
          className=""
          initial={{ y: 50, opacity: 0 }}
          animate={viewDiv && "visible"}
          variants={contactAnimation}
        >
        </motion.div>
      </div>
    </div>
  );
};

export default ContactForm;
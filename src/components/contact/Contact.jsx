import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsWhatsapp } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";


const Contact = () => {
  return (
    <div className="w-full min-h-screen  flex justify-center items-center p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-[1200px] w-full  rounded-lg shadow-lg overflow-hidden">
        {/* Left Side */}
        <div className="p-8 text-white flex flex-col justify-center">
          <h2 className="text-5xl font-bold text-[orangered] mb-4 uppercase">
            Contact me
          </h2>
          <h1 className="text-5xl font-extrabold mb-8">Let's work together!</h1>
          <hr className=" my-4" />
          <div className="space-y-4">
            <div className="flex items-center">
              <span className="w-[40px] h-[40px] flex justify-center items-center bg-[orangered] rounded-full">
                <CiLocationOn size={20} className="text-white" />
              </span>
              <p className="ml-4 text-lg">Rangpur,Bangladesh</p>
            </div>
            <div className="flex items-center">
              <span className="w-[40px] h-[40px] flex justify-center items-center bg-[orangered] rounded-full">
                <AiOutlineMail size={20} className="text-white" />
              </span>
              <p className="ml-4 text-lg">harishankarbarman50@gmail.com</p>
            </div>
            <div className="flex items-center">
              <span className="w-[40px] h-[40px] flex justify-center items-center bg-[orangered] rounded-full">
                <BsWhatsapp size={20} className="text-white" />
              </span>
              <p className="ml-4 text-lg">+88 01878250186</p>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 flex flex-col justify-center">
          <form
            method="POST"
            action="https://getform.io/f/azyyjgnb"
            className="flex flex-col space-y-6"
          >
            <input
              className="p-4 rounded-lg bg-gradient-to-br from-[#1a0033] via-[#4b007d] to-[#240a2f] text-white focus:outline-none focus:ring-2 focus:ring-[orangered]"
              type="text"
              placeholder="Your name"
              name="name"
              required
            />
            <input
              className="p-4 rounded-lg bg-gradient-to-br from-[#1a0033] via-[#4b007d] to-[#240a2f] text-white focus:outline-none focus:ring-2 focus:ring-[orangered]"
              type="email"
              placeholder="Your email"
              name="email"
              required
            />
            <textarea
              className="p-4 rounded-lg bg-gradient-to-br from-[#1a0033] via-[#4b007d] to-[#240a2f] text-white focus:outline-none focus:ring-2 focus:ring-[orangered]"
              placeholder="Your message"
              name="message"
              rows="6"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-gradient-to-r from-[orangered] to-[yellow] text-white font-bold py-3 rounded-lg hover:opacity-90 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;

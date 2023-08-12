import React from "react";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { MdMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import Timer from "./Timer";

function Footer({ appTitle, footerBio }) {
  return (
    <>
       <div id="contact" className="bg-[#2699fb] w-full">
      <div className="max-w-[1000px] p-2 mx-auto  md:grid grid-cols-3">
        <div className="flex flex-col justify-between col-span-1 gap-2">
          <h1 className="text-2xl font-bold my-2">{appTitle}</h1>
          <p className="my-2 text-white md:text-sm text-lg ">{footerBio}</p>
          <div className="flex justify-between text-white w-[100%] md:w-[80%] ">
            {/* mailto:sshahidmalik97@gmail.com */}
            <Link
              className="p-1 rounded-md hover:shadow-xl"
              to={"https://mail.google.com/mail/?view=cm&fs=1&to="}
            >
              <SiGmail className="text-2xl " />
            </Link>
            <Link
              className="p-1 hover:shadow-xl"
              to={"https://www.linkedin.com/in/shahidshowkatmalik"}
            >
              <FaLinkedinIn className="text-2xl" />
            </Link>
            <Link
              className="p-1 hover:shadow-xl"
              to={"https://github.com/SShahid97"}
            >
              <FaGithubSquare className="text-2xl" />
            </Link>
          </div>
          <div >
          <Timer/>
          </div>
        </div>
        <div className="col-span-2 mt-2 p-3 flex flex-row justify-between bg-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26459.341515432658!2d74.89967787143274!3d34.0074879330803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18a2cb32af1d9%3A0x99f57d4d76c70b66!2sPampore%20192121!5e0!3m2!1sen!2sin!4v1691673408886!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="mylocation"
          ></iframe>
        </div>
      </div>
    </div>
    <div className="flex justify-center items-center text-gray-700 text-sm">
      <Link 
        className="flex justify-center items-center"
        to={"https://mail.google.com/mail/?view=cm&fs=1&to="}
        >
        <MdMailOutline size={20}/>  <span style={{marginLeft:"7px"}}>  sshahidmalik97@gmail.com</span>
      </Link>
    </div>
    </>
   
  );
}

export default Footer;

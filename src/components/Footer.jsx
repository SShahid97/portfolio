import React from "react";
import { FaGithubSquare, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { Link } from "react-router-dom";

function Footer({ appTitle, footerBio }) {
  return (
    <div id="contact" className="bg-[#2699fb] w-full">
      <div className="max-w-[1000px] p-2 mx-auto  md:grid grid-cols-3">
        <div className="col-span-1 py-5">
          <h1 className="text-2xl font-bold my-2">{appTitle}</h1>
          <p className="my-2 text-white md:text-sm text-lg ">{footerBio}</p>
          <div className="flex justify-between text-white w-[100%] md:w-[80%] mt-8">
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
        </div>
        <div className="col-span-2 p-3 flex flex-row justify-between bg-white">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26459.341515432658!2d74.89967787143274!3d34.0074879330803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e18a2cb32af1d9%3A0x99f57d4d76c70b66!2sPampore%20192121!5e0!3m2!1sen!2sin!4v1691673408886!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            title="mylocation"
          ></iframe>
          {/* <div>
                        <h2 className='fond-bold px-2'>Solutions</h2>
                        <ul className={`w-full text-white`}>
                            <li className='p-2'>
                                Analytics
                            </li>
                            <li className='p-2'>
                                Marketing
                            </li>
                            <li className='p-2'>
                                Commerce
                            </li>
                            <li className='p-2'>
                                Insights
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='fond-bold px-2'>Support</h2>
                        <ul className={`w-full text-white`}>
                            <li className='p-2'>
                                Pricing
                            </li>
                            <li className='p-2'>
                                Documentation
                            </li>
                            <li className='p-2'>
                                Guides
                            </li>
                            <li className='p-2'>
                                API Status
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className='fond-bold px-2'>Company</h2>
                        <ul className={`w-full text-white`}>
                            <li className='p-2'>
                                About
                            </li>
                            <li className='p-2'>
                                Blog
                            </li>
                            <li className='p-2'>
                                Jobs
                            </li>
                            <li className='p-2'>
                                Careers
                            </li>
                        </ul>
                    </div> */}
        </div>
      </div>
    </div>
  );
}

export default Footer;

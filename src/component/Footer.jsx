import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
    <div
      className="flex flex-col sm:grid sm:grid-cols-[3fr_1fr_1fr] my-10 gap-14 mt-40 text-sm"
    >
      <div>
        <img className="mb-5 w-32" src={assets.logo} alt="" />
        <p className="w-full md:w-2/3 text-gray-600 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui amet
       pisicing elit. Eveniet consectetur quibusdam ab in.
        </p>
      </div>
      <div>
        <p className="text-xl font-medium mb-5 ">Company</p>
        <ul className="flex flex-col gap gap-1 text-gray-600">
          <li>Home</li>
          <li>About</li>
          <li>Delivery</li>
          <li>PrivacyPolicy</li>
        </ul>
      </div>
      <div>
        <p className="text-xl font-medium mb-5 ">Get in touch</p>
        <ul>
          <li>+91 9369125602</li>
          <li>ziaofficia4@gmail.com</li>
        </ul>
      </div>
    </div>
      <div>
        <hr /> <p className="py-5 text-sm text-center">copyright@Abdullah</p>
      </div>
    </div>
  );
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

function HeaderLink({ onClick, title }) {
  return (
    <li className="flex flex-col items-center px-2 py-4 ">
      <Link
        href="#"
        onClick={onClick}
        className="border-b-2 border-b-primary hover:border-b-white"
      >
        {title}
      </Link>
    </li>
  );
}

export function MobileHeaderLink({ onClick, title }) {
  return (
    <li className="border-b-white border-b">
      <Link
        className="block w-full p-4"
        href="#"
        onClick={onClick}
      >
        {title}
      </Link>
    </li>
  );
}

export default HeaderLink;

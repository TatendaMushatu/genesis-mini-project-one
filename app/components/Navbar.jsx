"use client"
import { useState } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faUserCircle } from "@fortawesome/free-regular-svg-icons";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <Link
              className="text-xl  leading-relaxed inline-block mr-4 py-2 whitespace-nowrap "
              href="/"
            >
              LOGO
            </Link>
            <button
              className="text-gray cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
                <FontAwesomeIcon icon={faBars}/>
            </button>
          </div>
          <div
            className={
              "flex-col lg:flex lg:flex-row flex-grow items-start lg:items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
          >
            <ul className="flex flex-col lg:flex-row list-none lg:mx-auto">
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center      hover:opacity-75"
                  href="/listings?category=for-sale"
                >
                  For Sale
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center      hover:opacity-75"
                  href="/listings?category=to-rent"
                >
                  To Rent
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center      hover:opacity-75"
                  href="#"
                >
                  New Developments
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center      hover:opacity-75"
                  href="#"
                >
                  Showdays
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center      hover:opacity-75"
                  href="#"
                >
                  Agencies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="px-3 py-2 flex items-center      hover:opacity-75"
                  href="#"
                >
                  Blog
                </Link>
              </li>
            </ul>
            <button className="btn border-2 rounded-full px-4 py-2 text-md">
                Login
                <FontAwesomeIcon icon={faUserCircle} className="ml-2"/>
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}

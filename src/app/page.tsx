"use client";
import Link from "next/link";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <nav>
          <div className="container px-4 flex justify-between items-center  bg-slate-100">
            <div className="bg-blue-800 text-white rounded-md px-6 py-2">
              <span>All Cities</span>
            </div>
            <div className="navbar-nav hidden lg:flex items-center">
              <Link href={"/"} className="navbar-nav-item px-6 py-2 ">
                Home
              </Link>
              <Link href={"/service"} className="navbar-nav-item px-6 py-2  ">
                Service
              </Link>
              <Link href={"/brands"} className="navbar-nav-item px-6 py-2  ">
                Brands
              </Link>
              <Link
                href={"/brandstollfreenumber"}
                className="navbar-nav-item px-6 py-2  "
              >
                Brands Toll Free Number
              </Link>
              <Link href={"/blogs"} className="navbar-nav-item px-6 py-2  ">
                Blogs
              </Link>
              <Link href={"/contact"} className="navbar-nav-item px-6 py-2  ">
                Contact
              </Link>
            </div>
            <div className="contact-now hidden lg:flex bg-blue-700 px-4 py-4">
              <div className="text-white px-2">1800 309 7939</div>
              <div className="bg-white rounded-md text-blue-800 px-2">
                <b> Call Now </b>
              </div>
            </div>
            <div className="lg:hidden">
              <button onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
          {isOpen && (
            <div className="navbar-nav">
              <Link href={"/"} className="navbar-nav-item px-6 py-2 ">
                Home
              </Link>
              <Link href={"/service"} className="navbar-nav-item px-6 py-2  ">
                Service
              </Link>
              <Link href={"/brands"} className="navbar-nav-item px-6 py-2  ">
                Brands
              </Link>
              <Link
                href={"/brandstollfreenumber"}
                className="navbar-nav-item px-6 py-2  "
              >
                Brands Toll Free Number
              </Link>
              <Link href={"/blogs"} className="navbar-nav-item px-6 py-2  ">
                Blogs
              </Link>
              <Link href={"/contact"} className="navbar-nav-item px-6 py-2  ">
                Contact
              </Link>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

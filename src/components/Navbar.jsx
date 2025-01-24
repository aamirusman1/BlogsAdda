import React from "react";
import { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="w-full h-16 md:h-20 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
          <Image src="/logo.png" alt="Blog Logo" w={32} h={32} />

          <span>Blog Adda</span>
        </Link>
        {/* MOBILE MENU */}
        <div className="md:hidden">
          {/* MOBILE BUTTON */}
          <div
            className="cursor-pointer text-4xl"
            onClick={() => setOpen((prev) => !prev)}
          >
            {/* Change Hamburger Icon */}
            {open ? "X" : "☰"}
          </div>
          {/* MOBILE LINK LIST */}
          <div
            className={`w-full h-screen bg-[#e6e6ff] flex flex-col items-center justify-center gap-8 font-medium text-lg absolute top-16 transition-all ease-in-out ${
              open ? "-right-0" : "-right-[100%]"
            }`}
          >
            <Link to="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link to="/posts?sort=trending" onClick={() => setOpen(false)}>
              Trending
            </Link>
            <Link to="/posts?sort=popular" onClick={() => setOpen(false)}>
              Most Popular
            </Link>
            <Link to="/" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link to="/login" onClick={() => setOpen(false)}>
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                Login 👋
              </button>
            </Link>
          </div>
        </div>
        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
          <Link to="/">Home</Link>
          <Link to="/posts?sort=trending">Trending</Link>
          <Link to="/posts?sort=popular">Most Popular</Link>
          <Link to="/">About</Link>

          {/* <Link to="/login">
            <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
              Login 👋
            </button>
          </Link> */}
          <SignedOut>
            {/* <SignInButton /> */}
            <Link to="/login">
              <button className="py-2 px-4 rounded-3xl bg-blue-800 text-white">
                Login 👋
              </button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </>
  );
};

export default Navbar;

//Note:
// When the screen width reaches md (768px) or larger, the md:flex class overrides hidden,
// making the desktop menu visible

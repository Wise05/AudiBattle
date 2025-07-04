import React from "react";
import RecentRuns from "./RecentRuns";
import ChartWigit from "./ChartWigit";
import Typewriter from "../SpecialEffects/Typewriter"
import { Link } from "react-router-dom";
import sword from "../../assets/images/sword_icon.png"
import shovel from "../../assets/images/shovel_pixel.png"
import heart from "../../assets/images/heart_pixel.png"
import head from "../../assets/images/mystery_pixel.png"
import book from "../../assets/images/book_pixel.png"
import profile from "../../assets/images/profile.png"

function Home() {
  return (
    <div className="bg-neutral-800 text-amber-100 h-full p-6 font-mono relative">
      <div className="flex gap-4">
        <div>
          <h1 className="text-7xl font-pixel font-normal text-orange-400">Democrado</h1>
          <div className="bg-green-600 h-2 w-150 mu-3 mb-5"></div>
          <div className="border-amber-100 border-1 p-3 h-18.5">
            <Typewriter text="Welcome to Democrado, the game where the winner is decided by democracy, but improvization is king.
" />
          </div>
        </div>
        <div className="border-amber-100 border-1 w-full h-43.5">
          Shared work
          <RecentRuns />
        </div>
        <Link to="/login" className="border-amber-100 border-1 w-full h-43.5 overflow-hidden">
          <div className="w-full h-full font-pixel text-3xl flex justify-center items-center no-underline transition delay-100 duration-200 ease-in-out hover:bg-yellow-600 hover:scale-110 relative group">
            <h2 className="mx-auto">Login</h2>
            <img className="w-5 scale-x-[-1] absolute left-20 invisible transition delay-100 duration-200 ease-in group-hover:visible group-hover:-translate-x-4" src={profile} alt="profile" />
            <img className="w-5 absolute right-20 invisible transition delay-100 duration-200 ease-in group-hover:visible group-hover:translate-x-4" src={profile} alt="profile" />

          </div>
        </Link>
      </div>
      <div className="flex gap-4 my-4">
        <Link
          to="/waitroom"
          className="border-amber-100 border-1 w-120 h-50 overflow-hidden"
        >
          <div className="w-full h-full font-pixel text-3xl flex justify-center items-center no-underline transition delay-100 duration-200 ease-in-out hover:bg-green-600 hover:scale-110 relative group">
            <h2>Multiplayer</h2>
            <img className="w-5 scale-x-[-1] absolute left-15 invisible transition delay-100 duration-200 ease-in group-hover:visible group-hover:-translate-x-4" src={sword} alt="sword" />
            <img className="w-5 absolute right-15 invisible transition delay-100 duration-200 ease-in group-hover:visible group-hover:translate-x-4" src={sword} alt="sword" />
          </div>
        </Link>
        <Link
          to="/"
          className="border-amber-100 border-1 w-120 h-50 overflow-hidden"
        >
          <div className="w-full h-full font-pixel text-3xl flex justify-center items-center no-underline transition delay-100 duration-200 ease-in hover:bg-orange-400 hover:scale-110  relative group">
            <h2>Sandbox</h2>
            <img className="w-5 scale-x-[-1] absolute left-25 invisible transition delay-100 duration-200 ease-in group-hover:visible group-hover:-translate-x-4" src={shovel} alt="shovel" />
            <img className="w-5 absolute right-25 invisible transition delay-100 duration-200 ease-in group-hover:visible group-hover:translate-x-4" src={shovel} alt="shovel" />
          </div>
        </Link>
        <Link
          to="/"
          className="border-amber-100 border-1 w-120 h-50 overflow-hidden"
        >
          <div className="w-full h-full font-pixel text-3xl flex justify-center items-center no-underline transition delay-100 duration-200 ease-in-out hover:bg-purple-600 hover:scale-110 relative group">
            <h2>Tutorial</h2>
            <img className="w-5 scale-x-[-1] absolute left-25 invisible transition delay-100 duration-200 ease-in group-hover:visible group-hover:-translate-x-4" src={book} alt="book" />
            <img className="w-5 absolute right-25 invisible transition delay-100 duration-200 ease-in group-hover:visible group-hover:translate-x-4" src={book} alt="book" />
          </div>
        </Link>
      </div>
      <div className="flex gap-4 justify-center">
        <div className="border-amber-100 border-1 w-full h-50 font-pixel text-3xl flex justify-center items-center no-underline">
          Games in session
          <ChartWigit />
        </div>
        <div>
          <Link to="/" className="border-amber-100 mb-4 border-1 w-120 h-23 flex justify-center items-center overflow-hidden">
            <div className="w-full h-full font-pixel text-3xl flex jutify-center items-center transition delay-100 duration-200 ease-in-out hover:bg-red-600 hover:scale-110 relative group">
              <h2 className="mx-auto">About</h2>
              <img className="w-5 absolute left-35 invisible transition delay-100 duration-200 ease-in group-hover:visible group-hover:-translate-x-4" src={head} alt="head" />
              <img className="w-5 absolute right-35 invisible transition delay-100 duration-200 ease-in group-hover:visible group-hover:translate-x-4" src={head} alt="head" />
            </div>
          </Link>
          <Link to="/" className="border-amber-100 border-1 w-120 h-23 flex justify-center items-center overflow-hidden">
            <div className="w-full h-full font-pixel text-3xl flex jutify-center items-center transition delay-100 duration-200 ease-in-out hover:bg-teal-600 hover:scale-110 relative group">
              <h2 className="mx-auto">Donate</h2>
              <img className="w-5 scale-x-[-1] absolute left-35 invisible transition delay-100 duration-200 ease-in group-hover:visible group-hover:-translate-x-4" src={heart} alt="heart" />
              <img className="w-5 absolute right-35 invisible transition delay-100 duration-200 ease-in group-hover:visible group-hover:translate-x-4" src={heart} alt="heart" />
            </div>
          </Link>
        </div>
      </div>
    </div >
  );
}

export default Home;

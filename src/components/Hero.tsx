import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import profilePic from "../../public/profil.png";

const items = new Array(10).fill(null);

export default function Hero() {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="h-dvh bg-gradient-to-b from-slate-950 to-slate-900 text-white flex flex-col justify-center items-center px-4"
      id="home"
    >
      <div className="mt-16 flex items-center justify-center gap-8 flex-col h-4/5 flex-grow sm:flex-row sm:mt-0">
        <div className="h-full flex justify-center sm:w-1/3 sm:items-center sm:justify-end">
          <div className="w-1/2 rounded-full overflow-hidden justify-center items-center">
            <Image src={profilePic} alt="Ryan&#39;s profil pic" />
          </div>
        </div>
        <div className="h-full flex flex-col gap-4 justify-center items-start sm:w-1/2 sm:items-start">
          <h1 className="text-4xl font-bold sm:text-5xl">
            <ReactTyped
              strings={[
                "Your web designer",
                "Your web developer",
                "Your web deployer",
              ]}
              typeSpeed={100}
              backSpeed={50}
              loop
            />
          </h1>
          <h2 className="text-gray-300">
            Hi, I&#39;m Ryan, a web developer based in Bekasi, Indonesia. <br />
            I like to craft safe and scalable web products with great user
            experiences.
          </h2>
          <div className="flex gap-4 mt-4">
            <a
              href="#case-studies"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
            >
              View My Work
            </a>
            <a
              href="#get-in-touch"
              className="bg-transparent border-2 border-green-600 hover:bg-green-600 hover:text-white text-green-500 font-semibold py-2 px-4 rounded"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
      <div
        className="mt-4 h-1/5 flex flex-col gap-8 items-center w-full sm:mt-0"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="text-center">
          {hovered ? (
            <h2>I haven&#39;t worked with anyone yet, want to be my first?</h2>
          ) : (
            <h2>Worked with</h2>
          )}
        </div>
        <div className="flex gap-10">
          <div
            className={`flex flex-row gap-10 w-max animate-slide-items relative ${
              hovered ? "pause" : ""
            }`}
          >
            {[...items, ...items].map((_, index) => (
              <div
                key={index}
                className="h-14 w-40 bg-slate-700 rounded animate-pulse flex items-center justify-center"
              >
                {hovered ? (
                  <h2>
                    <p>Your Brand</p>
                  </h2>
                ) : (
                  <h2></h2>
                )}
              </div>
            ))}
          </div>
          <div
            className={`flex flex-row gap-10 w-max animate-slide-items relative pb-8 ${
              hovered ? "pause" : ""
            }`}
          >
            {[...items, ...items].map((_, index) => (
              <div
                key={index}
                className="h-14 w-40 bg-slate-700 rounded animate-pulse flex items-center justify-center"
              >
                {hovered ? (
                  <h2>
                    <p className="animate-none">Your Brand</p>
                  </h2>
                ) : (
                  <h2></h2>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

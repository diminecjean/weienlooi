import React from "react";
import { useState } from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Carousel from "../components/flickity-carousel/flickity";
import LIProfileCard from "../components/LIProfileCard";
import LIWorkCard from "../components/LIWorkCard";
import LIExperienceCard from "../components/LIExperienceCard";

interface HomePageProps {}

function Intro() {
  return (
    <div className="flex flex-col items-center justify-center h-2/3 bg-gray-100 border-b border-gray-600 dark:bg-gray-800">
      <div className="flex md:flex-row flex-col items-center sm:space-x-16 space-y-2 sm:m-6 mx-2 py-12">
        <div className="justify-start text-left md:w-1/2 w-full text-wrap md:px-10 px-5">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
            Hi there, <br />
            I'm Looi Wei En
          </h1>
          <p className="text-md text-gray-600 dark:text-gray-300 py-4">
            I am an aspiring Software Engineering Student from University Sains
            Malaysia, currently pursuing my goals to be a fullstack developer
            and starting my journey from frontend development.
          </p>
        </div>
        <div className="justify-start text-left md:w-1/2 w-full">
          {/* Card */}
          <div className="hidden sm:flex sm:m-0 m-6 lg:max-w-lg sm:max-w-md max-w-sm bg-white border border-gray-700 rounded-lg dark:bg-gray-800 dark:border-gray-700">
            <div className="flex sm:flex-row flex-col items-center justify-center ">
              <div className="flex-1">
                <div className="p-2 sm:p-6">
                  <a href="https://www.linkedin.com/in/looi-wei-en/">
                    <h5 className="mb-4 text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                      Looi Wei En <br />
                      雷玮恩
                    </h5>
                  </a>
                  <p className="font-normal text-gray-700 dark:text-gray-400">
                    Penang, Malaysia
                  </p>
                  <a
                    href="mailto:looi.weien02@gmail.com"
                    className="font-normal text-gray-700 dark:text-gray-400"
                  >
                    looi.weien02@gmail.com
                    <br />
                  </a>
                  <a
                    href="tel:+60135883813"
                    className="font-normal text-gray-700 dark:text-gray-400"
                  >
                    +6013-5883813
                  </a>
                  {/* <a href="#" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                              Read more
                              <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                              </svg>
                            </a> */}
                </div>
              </div>
              <div className="flex-1">
                <a href="https://www.linkedin.com/in/looi-wei-en/">
                  <img
                    className="w-full h-full object-cover rounded-r-lg"
                    src="https://placehold.co/900x850/png"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
const Home: React.FunctionComponent<HomePageProps> = (props) => {
  return (
    <>
      <Navbar />
      <div className="mt-8 mx-2 sm:mx-10 grid md:grid-cols-7 gap-6 grid-cols-1">
        <div className="col-span-5 my-8 flex flex-col gap-4">
          <LIProfileCard />
          <div className="w-full relative rounded-lg bg-white dark:bg-sky-800 flex flex-col gap-0 overflow-hidden border-2 border-gray-200 shadow-sm">
            <div className="relative isolate flex flex-col justify-end rounded-2xl px-8 py-6 w-full text-left">
              <h2 className="font-semibold text-xl ">About</h2>
              <p className="font-normal text-sm py-2">
                A third-year Computer Science student, majoring in Software
                Engineering. Currently fixated on being a full stack developer
                while exploring my fields of passion.
              </p>
            </div>
          </div>
          <LIWorkCard />
          <LIExperienceCard />
        </div>
        <div className="my-8 md:col-span-2 md:block hidden relative">
          <div className="rounded-lg border-gray-200 shadow-sm bg-white sticky top-16">
            <div className="h-69 w-full p-8">hello</div>
          </div>
        </div>
        {/* <Intro />
        <Involvements /> */}
      </div>
    </>
  );
};

export default Home;

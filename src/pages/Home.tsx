import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import LIProfileCard from "../components/LIProfileCard";
import LIWorkCard from "../components/LIWorkCard";
import LIExperienceCard from "../components/LIExperienceCard";

interface HomePageProps {}

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

import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import LIProfileCard from "../components/LIProfileCard";
import LIWorkCard from "../components/LIWorkCard";
import LIExperienceCard from "../components/LIExperienceCard";

import { ListGroup, ListGroupItem } from "flowbite-react";
import {
  HiUserCircle,
  HiQuestionMarkCircle,
  HiBriefcase,
  HiPuzzle,
  HiSparkles,
} from "react-icons/hi";

interface HomePageProps {}

const Home: React.FunctionComponent<HomePageProps> = (props) => {
  const [activeTab, setActiveTab] = React.useState<number>(0);

  const checkActive = (tab: number) => {
    if (activeTab === tab) return true;
    else return false;
  };

  return (
    <>
      <Navbar />
      <div className="relative bg-[url(https://images.unsplash.com/photo-1629317337201-2e7189bbdfac?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] bg-cover bg-fixed pt-8 px-2 sm:px-10 grid md:grid-cols-7 gap-6 grid-cols-1">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <div className="col-span-5 my-8 flex flex-col gap-4">
          <section id="profile" className="pt-14 -mt-14">
            <LIProfileCard />
          </section>
          <section id="about" className="pt-14 -mt-14">
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
          </section>
          <section id="work" className="pt-14 -mt-14">
            <LIWorkCard />
          </section>
          <section id="experiences" className="pt-14 -mt-14">
            <LIExperienceCard />
          </section>
        </div>
        <div className="my-8 md:col-span-2 md:block hidden relative">
          <div className="flex justify-center border-gray-200 shadow-sm sticky top-16">
            <ListGroup className="w-full">
              <ListGroupItem
                icon={HiUserCircle}
                href="/weienlooi#profile"
                onClick={() => setActiveTab(0)}
                active={checkActive(0)}
              >
                Profile
              </ListGroupItem>
              <ListGroupItem
                icon={HiQuestionMarkCircle}
                onClick={() => setActiveTab(1)}
                active={checkActive(1)}
                href="/weienlooi#about"
              >
                About
              </ListGroupItem>
              <ListGroupItem
                href="/weienlooi#work"
                icon={HiBriefcase}
                onClick={() => setActiveTab(2)}
                active={checkActive(2)}
              >
                {" "}
                Work
              </ListGroupItem>
              <ListGroupItem
                href="/weienlooi#experiences"
                icon={HiPuzzle}
                onClick={() => setActiveTab(3)}
                active={checkActive(3)}
              >
                {" "}
                Experiences
              </ListGroupItem>
              <ListGroupItem
                href="#"
                icon={HiSparkles}
                onClick={() => setActiveTab(4)}
                active={checkActive(4)}
              >
                Interests
              </ListGroupItem>
            </ListGroup>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

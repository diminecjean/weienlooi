import React from "react";
import { useState } from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Carousel from "../components/flickity-carousel/flickity";

interface HomePageProps {}

const ContactModal = ({
  openModal,
  closeModal,
}: {
  openModal: boolean;
  closeModal: () => void;
}) => {
  return (
    <div
      className={`${
        openModal ? "block" : "hidden"
      } fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-center items-center`}
    >
      <div className="bg-white dark:bg-gray-800 rounded-lg p-8">
        <h1 className="text-2xl font-semibold">Contact Information</h1>
        <p className="text-gray-500">Email:</p>
        <p className="text-gray-500">Phone:</p>
        <button
          onClick={closeModal}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
};

function LIProfileCard() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const modalController = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div className="w-full relative rounded-lg bg-white dark:bg-sky-800 flex flex-col gap-0 overflow-hidden border-2 border-gray-200 shadow-sm">
        <div className="relative isolate flex flex-col justify-end rounded-2xl px-8 pb-12 pt-36 w-full">
          <img
            className="absolute z-40 rounded-full top-20 left-8 h-40 w-40 object-cover border-white border-4"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <img
            className="absolute rounded-t-lg inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
        <div className="flex flex-row justify-end gap-4 px-6 py-4">
          <a
            href="https://www.linkedin.com/in/looi-wei-en/"
            className="bg-white text-gray-800 dark:text-white dark:bg-gray-800 rounded-lg"
          >
            <img
              src="https://w7.pngwing.com/pngs/276/472/png-transparent-linkedin-computer-icons-blog-logo-watercolor-butterfly-angle-text-rectangle.png"
              className="object-cover h-6 w-6"
            />
          </a>
          <a
            href="https://github.com/diminecjean/"
            className="bg-white text-gray-800 dark:text-white dark:bg-gray-800 rounded-lg"
          >
            <img
              src="https://static-00.iconduck.com/assets.00/github-square-icon-511x512-080fj8cx.png"
              className="object-cover h-6 w-6"
            />
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2 pb-6">
          <div className="col-span-2">
            <div className="text-left bg-white px-8">
              <h2 className="font-semibold text-2xl">Looi Wei En</h2>
              <h2 className="font-normal text-gray-800 text-md">
                Mobile Core Intern @ MoneyLion | 3rd Year Software Engineering
                Major from USM
              </h2>
              <p className="pt-2 font-normal text-gray-500 text-sm">
                Penang, Malaysia ·{" "}
                <span
                  itemType="button"
                  onClick={modalController}
                  className="cursor-pointer font-semibold text-[#0485CE] hover:underline"
                >
                  Contact info
                </span>
              </p>
            </div>
          </div>
          <div className="col-span-1 px-8 md:px-0">
            <OrgIntroList orgData={orgData} />
          </div>
        </div>
      </div>
      <ContactModal openModal={openModal} closeModal={modalController} />
    </>
  );
}

const OrgIntroList = ({
  orgData,
}: {
  orgData: { orgName: string; orgImgSrc: string }[];
}) => {
  return (
    <div className="flex flex-col gap-2">
      {orgData.map((org) => (
        <OrgIntroRow orgName={org.orgName} orgImgSrc={org.orgImgSrc} />
      ))}
    </div>
  );
};

const orgData = [
  {
    orgName: "MoneyLion",
    orgImgSrc:
      "https://play-lh.googleusercontent.com/ppj2HTbcx_wGpaxTV0iSrZ2eP36tn0QOEqWC4mXDKngroTiVZGT1cJjQXc1qnS7WEaM=w600-h300-pc0xffffff-pd",
  },
  {
    orgName: "GDG Cloud KL",
    orgImgSrc:
      "https://cdn.icon-icons.com/icons2/2642/PNG/512/google_cloud_logo_icon_159333.png",
  },
];

const OrgIntroRow = ({
  orgName,
  orgImgSrc,
}: {
  orgName: string;
  orgImgSrc: string;
}) => {
  return (
    <div className="flex flex-row gap-2 justify-left align-middle items-center h-wrap">
      <div className="flex">
        <img
          src={orgImgSrc}
          className="h-8 w-8 object-cover"
          alt={`${orgName} logo`}
        />
      </div>
      <div className="flex align-middle">
        <h2 className="font-semibold  text-gray-800 text-sm">{orgName}</h2>
      </div>
    </div>
  );
};

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

// TODO: fetch data (from linkedin??) and display
function Involvements() {
  return (
    <Carousel
      title="Breathe Better"
      description="Description"
      image="https://picsum.photos/id/237/200/300"
    />
  );
}

const Home: React.FunctionComponent<HomePageProps> = (props) => {
  return (
    <>
      <Navbar />
      <div className="mt-12 mx-8 grid md:grid-cols-7 gap-6 grid-cols-1">
        <div className="col-span-5 my-8 flex flex-col gap-4">
          <LIProfileCard />
          <LIProfileCard />
          <LIProfileCard />
          <LIProfileCard />
        </div>
        <div className="my-8 md:col-span-2 md:block hidden relative">
          <div className="rounded-lg border-gray-200 shadow-sm bg-white sticky top-20">
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

import React from "react";
import "./Home.css";
import ThemeSwitcher from "../components/ThemeSwitcher";
import Carousel from "../components/flickity-carousel/flickity";


interface HomePageProps {
        
}

function NavigationBar() {
  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 shadow-md">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-4 p-4">
            <svg className="md:hidden w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-linecap="round" stroke-width="2" d="M5 7h14M5 12h14M5 17h14"/>
            </svg>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                <a href="#" className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-[#0485CE] md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">About Me</a>
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0485CE] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Involvements</a>
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0485CE] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Projects</a>
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0485CE] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Interests</a>
                </li>
                <li>
                <a href="#" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#0485CE] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact Me</a>
                </li>
            </ul>
            </div>
            <ThemeSwitcher />
        </div>
        </nav>
  );
}

function Intro(){
    return (
        <div className="flex flex-col items-center justify-center h-2/3 bg-gray-100 border-b border-gray-600 dark:bg-gray-800">
            <div className="flex md:flex-row flex-col items-center sm:space-x-16 space-y-2 sm:m-6 mx-2 py-12">
                <div className="justify-start text-left md:w-1/2 w-full text-wrap md:px-10 px-5">
                    <h1 className="text-5xl font-bold text-gray-900 dark:text-white">
                        Hi there, <br/> 
                        I'm Looi Wei En 
                    </h1>
                    <p className="text-md text-gray-600 dark:text-gray-300 py-4">
                        I am an aspiring Software Engineering Student from University Sains Malaysia, currently pursuing my goals to be a fullstack developer and starting my journey from frontend development.
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
                            <p className="font-normal text-gray-700 dark:text-gray-400">Penang, Malaysia</p>
                            <a href="mailto:looi.weien02@gmail.com" className="font-normal text-gray-700 dark:text-gray-400">looi.weien02@gmail.com<br/></a>                          
                            <a href="tel:+60135883813" className="font-normal text-gray-700 dark:text-gray-400">+6013-5883813</a>
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
                            <img className="w-full h-full object-cover rounded-r-lg" src="https://placehold.co/900x850/png" alt="" />
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
    <Carousel title="Breathe Better" description="Description" image="https://picsum.photos/id/237/200/300"/>
  )
}

const Home: React.FunctionComponent<HomePageProps> = (props) => {
    return (
        <>
            <NavigationBar />
            <Intro />
            <Involvements />
        </>
    );
}

export default Home;


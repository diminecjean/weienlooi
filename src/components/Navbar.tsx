import { useEffect, useState } from "react";
import ThemeSwitcher from "../components/ThemeSwitcher";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<string>("");

  useEffect(() => {
    setActiveTab(window.location.pathname);
  }, []);

  const tabs = [
    {
      link: "/weienlooi",
      name: "Looi Wei En",
    },
    {
      link: "/weienlooi/projects",
      name: "Projects",
    },
    {
      link: "/weienlooi/gallery",
      name: "Gallery",
    },
    {
      link: "/weienlooi/links",
      name: "Contact Me",
    },
  ];

  return (
    <nav className="fixed w-full z-50 top-0 bg-[rgba(255,255,255,0)] border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-4 p-3">
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-width="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
        <div
          className={`w-1/2 top-8 md:w-auto absolute md:relative md:top-0 ${
            isOpen ? "block" : "hidden"
          } md:flex`}
          id="navbar-default"
        >
          <ul className="font-medium text-xs flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {tabs.map((tab) => (
              <li key={tab.link}>
                <a
                  href={tab.link}
                  className={`block py-2 px-3 md:hover:bg-transparent md:border-0 md:hover:text-[#7fd6fc] md:hover:shadow-[0_2px_0px_0_rgb(127,206,252,0.8)] md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent ${tab.link === activeTab ? "text-[#7fcefc] shadow-[0_2px_0px_0_rgb(127,206,252,0.8)]" : "text-white "}`}
                >
                  <p className="drop-shadow-md text-semibold">{tab.name}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* <ThemeSwitcher /> */}
      </div>
    </nav>
  );
}

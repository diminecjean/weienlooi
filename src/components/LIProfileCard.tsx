import { useState } from "react";
import { orgData } from "../providers/OrgData";

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
      <div className="relative text-left bg-white dark:bg-gray-800 w-64 rounded-lg py-4 px-8">
        <h1 className="text-xl font-semibold pb-4">Find me @</h1>
        <p className="text-gray-500">Email:</p>
        <p className="text-gray-500">Phone:</p>
        <button
          onClick={closeModal}
          className="absolute top-4 right-4 hover:cursor-pointer"
        >
          <svg
            className="w-5 h-5 text-gray-500 hover:text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m15 9-6 6m0-6 6 6m6-3a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

const ImageModal = ({
  openImage,
  closeImage,
}: {
  openImage: boolean;
  closeImage: () => void;
}) => {
  return (
    <div
      className={`${
        openImage ? "fixed" : "hidden"
      } inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center`}
      onClick={closeImage}
    >
      <img
        className="max-w-xl max-h-80 md:max-w-3xl md:max-h-96 rounded-full shadow-2xl"
        src="https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/361335771_2060895927621943_5044660452564970401_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=t_UMT6mXSxEAb5KjTlv&_nc_ht=scontent.fkul15-1.fna&oh=00_AfAM6dX4ip1FnmPWg20CnU6KUmUjFOEbmyea5aOw80DfbA&oe=66207149"
        alt="Profile"
      />
    </div>
  );
};

export default function LIProfileCard() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openImage, setOpenImage] = useState<boolean>(false);
  const modalController = () => {
    setOpenModal(!openModal);
  };

  return (
    <>
      <div className="w-full relative rounded-lg bg-white dark:bg-sky-800 flex flex-col gap-0 overflow-hidden shadow-lg hover:shadow-cyan-300/50 hover:ring-2 hover:ring-cyan-300">
        <div className="relative isolate flex flex-col justify-end rounded-2xl px-8 pb-12 pt-36 w-full">
          <img
            onClick={() => setOpenImage(true)}
            className="hover:cursor-pointer absolute z-40 rounded-full top-20 left-8 h-40 w-40 object-cover border-white border-4"
            src="https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/361335771_2060895927621943_5044660452564970401_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=t_UMT6mXSxEAb5KjTlv&_nc_ht=scontent.fkul15-1.fna&oh=00_AfAM6dX4ip1FnmPWg20CnU6KUmUjFOEbmyea5aOw80DfbA&oe=66207149"
            alt="Profile"
          />
          <img
            className="absolute rounded-t-lg inset-0 h-full w-full object-cover"
            src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Banner"
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
              alt="LinkedIn logo"
            />
          </a>
          <a
            href="https://github.com/diminecjean/"
            className="bg-white text-gray-800 dark:text-white dark:bg-gray-800 rounded-lg"
          >
            <img
              src="https://static-00.iconduck.com/assets.00/github-square-icon-511x512-080fj8cx.png"
              className="object-cover h-6 w-6"
              alt="GitHub logo"
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
                Penang, Malaysia ·
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
      <ImageModal
        openImage={openImage}
        closeImage={() => setOpenImage(false)}
      />
    </>
  );
}

const OrgIntroList = ({
  orgData,
}: {
  orgData: { type: string; orgName: string; orgImgSrc: string }[];
}) => {
  return (
    <div className="flex flex-col gap-2">
      {orgData.map(
        (org) =>
          org.type === "Profile" && (
            <OrgIntroRow orgName={org.orgName} orgImgSrc={org.orgImgSrc} />
          )
      )}
    </div>
  );
};

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

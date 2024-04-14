import React from "react";
interface LinkProps {}

const Links: React.FunctionComponent<LinkProps> = (props) => {
  return (
    <div className="relative flex flex-col h-screen w-screen justify-center align-middle bg-fixed bg-[url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover">
      <div className="absolute inset-0 bg-gray-100 bg-opacity-85"></div>
      <a
        href="/weienlooi"
        className="absolute z-20 top-4 right-4 cursor-pointer p-3 rounded-full bg-white hover:bg-opacity-70 text-sm"
      >
        <svg
          className="w-4 h-4 text-gray-800 dark:text-white"
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
            d="M20 12H8m12 0-4 4m4-4-4-4M9 4H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h2"
          />
        </svg>
      </a>
      <div className="absolute z-10 inset-0 w-screen flex flex-col  justify-center align-middle items-center">
        <div className="flex flex-col max-w-108 min-w-92 p-8 items-center">
          <img
            src="https://ugc.production.linktr.ee/ddc804dd-1aaf-4112-ac50-9befe32ddc85_Screenshot-2024-04-04-09-26-57-02-99c04817c0de5652397fc8b56c3b3817.jpeg?io=true&size=avatar-v3_0"
            className="rounded-full bg-cover h-28 w-28 shadow-lg m-2"
          />
          <h2 className="pt-2 text-gray-900 font-bold text-xl">Looi Wei En</h2>
          <h2 className="text-gray-900 font-normal text-lg italic">
            @diminecjean
          </h2>
          {/* soc med icons */}
          <div className="my-4 px-16 md:px-20 grid grid-cols-5 w-full mx-auto items-center justify-center gap-4">
            {/*facebook*/}
            <div className="col-span-1">
              <a href="https://www.facebook.com/weien.looi">
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <path d="M23,12A11,11,0,1,0,10.279,22.865h0a11.08,11.08,0,0,0,3.436,0h0A10.952,10.952,0,0,0,23,12ZM10.859,21.935v-6.9a.5.5,0,0,0-.5-.5H8.193V12.5h2.166a.5.5,0,0,0,.5-.5V9.686c0-2.278,1.264-3.585,3.459-3.585a15.392,15.392,0,0,1,1.858.137V7.89h-.824l-.019,0a2,2,0,0,0-2.181,1.735,1.8,1.8,0,0,0-.011.4V12a.5.5,0,0,0,.5.5H15.97l-.312,2.035H13.641a.5.5,0,0,0-.5.5v6.9A10.124,10.124,0,0,1,10.859,21.935Zm3.282-.166V15.535h1.946a.5.5,0,0,0,.5-.425l.465-3.035a.5.5,0,0,0-.494-.575H14.141V10.016a1.267,1.267,0,0,1,.308-.821,1.218,1.218,0,0,1,.9-.3h1.324a.5.5,0,0,0,.5-.5V5.806a.5.5,0,0,0-.42-.494A16.661,16.661,0,0,0,14.325,5.1c-2.754,0-4.466,1.757-4.466,4.585V11.5H7.693a.5.5,0,0,0-.5.5v3.035a.5.5,0,0,0,.5.5H9.859v6.234a10,10,0,1,1,4.282,0Z"></path>
                </svg>
              </a>
            </div>
            {/*email*/}
            <div className="col-span-1">
              <a href="mailto:looi.weien02@gmail.com">
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <title data-testid="svgTitle" id="title_0.6199260049709951">
                    Email
                  </title>
                  <path d="M18.821,20.5H5.179A3.683,3.683,0,0,1,1.5,16.821V7.179A3.683,3.683,0,0,1,5.179,3.5H18.821A3.683,3.683,0,0,1,22.5,7.179v9.642A3.683,3.683,0,0,1,18.821,20.5ZM5.179,4.5A2.682,2.682,0,0,0,2.5,7.179v9.642A2.682,2.682,0,0,0,5.179,19.5H18.821A2.682,2.682,0,0,0,21.5,16.821V7.179A2.682,2.682,0,0,0,18.821,4.5Z"></path>
                  <path d="M12,14.209a.5.5,0,0,1-.346-.138L4.286,7.028a.5.5,0,0,1,.691-.723L12,13.018l7.023-6.713a.5.5,0,1,1,.691.723l-7.368,7.043A.5.5,0,0,1,12,14.209Z"></path>
                  <path d="M4.7,17.833a.5.5,0,0,1-.347-.86l5.54-5.31a.5.5,0,0,1,.692.722L5.048,17.694A.5.5,0,0,1,4.7,17.833Z"></path>
                  <path d="M19.3,17.832a.5.5,0,0,1-.346-.139l-5.538-5.308a.5.5,0,0,1,.692-.722l5.538,5.308a.5.5,0,0,1-.346.861Z"></path>
                </svg>
              </a>
            </div>
            {/*instagram*/}
            <div className="col-span-1">
              <a href="https://instagram.com/diminecjean2002">
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <title data-testid="svgTitle" id="title_0.7333420262385255">
                    Instagram
                  </title>
                  <path d="M21.938,7.71a7.329,7.329,0,0,0-.456-2.394,4.615,4.615,0,0,0-1.1-1.694,4.61,4.61,0,0,0-1.7-1.1,7.318,7.318,0,0,0-2.393-.456C15.185,2.012,14.817,2,12,2s-3.185.012-4.29.062a7.329,7.329,0,0,0-2.394.456,4.615,4.615,0,0,0-1.694,1.1,4.61,4.61,0,0,0-1.1,1.7A7.318,7.318,0,0,0,2.062,7.71C2.012,8.814,2,9.182,2,12s.012,3.186.062,4.29a7.329,7.329,0,0,0,.456,2.394,4.615,4.615,0,0,0,1.1,1.694,4.61,4.61,0,0,0,1.7,1.1,7.318,7.318,0,0,0,2.393.456c1.1.05,1.472.062,4.29.062s3.186-.012,4.29-.062a7.329,7.329,0,0,0,2.394-.456,4.9,4.9,0,0,0,2.8-2.8,7.318,7.318,0,0,0,.456-2.393c.05-1.1.062-1.472.062-4.29S21.988,8.814,21.938,7.71Zm-1,8.534a6.351,6.351,0,0,1-.388,2.077,3.9,3.9,0,0,1-2.228,2.229,6.363,6.363,0,0,1-2.078.388C15.159,20.988,14.8,21,12,21s-3.159-.012-4.244-.062a6.351,6.351,0,0,1-2.077-.388,3.627,3.627,0,0,1-1.35-.879,3.631,3.631,0,0,1-.879-1.349,6.363,6.363,0,0,1-.388-2.078C3.012,15.159,3,14.8,3,12s.012-3.159.062-4.244A6.351,6.351,0,0,1,3.45,5.679a3.627,3.627,0,0,1,.879-1.35A3.631,3.631,0,0,1,5.678,3.45a6.363,6.363,0,0,1,2.078-.388C8.842,3.012,9.205,3,12,3s3.158.012,4.244.062a6.351,6.351,0,0,1,2.077.388,3.627,3.627,0,0,1,1.35.879,3.631,3.631,0,0,1,.879,1.349,6.363,6.363,0,0,1,.388,2.078C20.988,8.841,21,9.2,21,12S20.988,15.159,20.938,16.244Z"></path>
                  <path d="M17.581,5.467a.953.953,0,1,0,.952.952A.954.954,0,0,0,17.581,5.467Z"></path>
                  <path d="M12,7.073A4.927,4.927,0,1,0,16.927,12,4.932,4.932,0,0,0,12,7.073Zm0,8.854A3.927,3.927,0,1,1,15.927,12,3.932,3.932,0,0,1,12,15.927Z"></path>
                </svg>
              </a>
            </div>
            {/*github*/}
            <div className="col-span-1">
              <a href="https://github.com/diminecjean">
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <title data-testid="svgTitle" id="title_0.11974885857667905">
                    GitHub
                  </title>
                  <path d="M12,1.16A11,11,0,0,0,9.33,22.82a.46.46,0,0,0,.42-.09.48.48,0,0,0,.2-.4v-.1c0-.92,0-2.18,0-3.08a2,2,0,0,1,.53-1.59.49.49,0,0,0,.14-.52.49.49,0,0,0-.42-.35c-2.1-.24-4.25-1-4.25-4.75a3.65,3.65,0,0,1,.93-2.51A.52.52,0,0,0,7,8.91,3.31,3.31,0,0,1,7,6.77a4.87,4.87,0,0,1,2.18,1,.48.48,0,0,0,.42.07,8.93,8.93,0,0,1,4.88,0,.48.48,0,0,0,.42-.07,5.17,5.17,0,0,1,2.18-1,3.33,3.33,0,0,1,0,2.15.52.52,0,0,0,.09.52,3.65,3.65,0,0,1,.93,2.51c0,3.76-2.15,4.51-4.25,4.75a.49.49,0,0,0-.42.35.51.51,0,0,0,.14.52,2,2,0,0,1,.53,1.59c0,.93,0,2.27,0,3.18a.48.48,0,0,0,.2.4.46.46,0,0,0,.3.11l.13,0A11,11,0,0,0,12,1.16Zm3.06,20.51V19.15a3.79,3.79,0,0,0-.32-1.59c2-.39,4.32-1.55,4.32-5.62a4.63,4.63,0,0,0-1-2.95,4.69,4.69,0,0,0-.2-2.89.47.47,0,0,0-.31-.29c-.18-.06-1.14-.28-3.08,1a9.77,9.77,0,0,0-5,0c-1.94-1.3-2.9-1.08-3.08-1a.47.47,0,0,0-.31.29A4.69,4.69,0,0,0,5.93,9a4.63,4.63,0,0,0-1,2.95c0,4.07,2.27,5.23,4.32,5.62A3.71,3.71,0,0,0,9,18.86c-.78.26-1.29.22-1.51-.13C6.65,17.38,6,16.8,5.4,16.85a.5.5,0,0,0-.47.53.47.47,0,0,0,.52.46s.37.09,1.16,1.4A1.62,1.62,0,0,0,8.1,20a3.52,3.52,0,0,0,.84-.13v1.77a10,10,0,1,1,6.12,0Z"></path>
                </svg>
              </a>
            </div>
            {/*linkedin*/}
            <div className="col-span-1">
              <a href="https://www.linkedin.com/in/looi-wei-en/">
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <title data-testid="svgTitle" id="title_0.06607922443312475">
                    LinkedIn
                  </title>
                  <path d="M4.425,1.671A2.738,2.738,0,0,0,1.5,4.4,2.71,2.71,0,0,0,4.369,7.128H4.4a2.734,2.734,0,1,0,.028-5.457ZM4.4,6.128H4.369a1.736,1.736,0,1,1,.056-3.457A1.737,1.737,0,1,1,4.4,6.128Z"></path>
                  <path d="M6.541,8.431H2.253a.5.5,0,0,0-.5.5v12.9a.5.5,0,0,0,.5.5H6.541a.5.5,0,0,0,.5-.5V8.931A.5.5,0,0,0,6.541,8.431Zm-.5,12.9H2.753V9.431H6.041Z"></path>
                  <path d="M17.064,8.128A4.691,4.691,0,0,0,13.7,9.362V8.931a.5.5,0,0,0-.5-.5H8.914a.5.5,0,0,0-.5.523c.053,1.183,0,12.756,0,12.873a.5.5,0,0,0,.5.5H13.2a.5.5,0,0,0,.5-.5v-7.2a2.749,2.749,0,0,1,.1-.86,1.869,1.869,0,0,1,1.737-1.254c.413,0,1.671,0,1.671,2.417v6.9a.5.5,0,0,0,.5.5H22a.5.5,0,0,0,.5-.5v-7.4C22.5,10.485,20.467,8.128,17.064,8.128Zm4.436,13.2H18.213v-6.4c0-2.973-1.673-3.417-2.671-3.417a2.83,2.83,0,0,0-2.664,1.878,3.253,3.253,0,0,0-.177,1.236v6.7H9.416c.009-2.058.04-9.654.009-11.9H12.7v1.328a.5.5,0,0,0,.92.272,3.769,3.769,0,0,1,3.443-1.9c2.819,0,4.436,1.934,4.436,5.305Z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 w-full gap-2 my-2">
            <div className="transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-opacity-100 duration-200 relative rounded-md w-full shadow-lg bg-white bg-opacity-80 py-3 px-4 cursor-pointer">
              <a
                href="https://www.instagram.com/gdgcloudkl"
                className="text-sm p-1 font-semibold text-gray-800"
              >
                GDG Cloud KL
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 w-full gap-2 my-2">
            <div className="transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-opacity-100 duration-200 relative rounded-md w-full shadow-lg bg-white bg-opacity-80 py-3 px-4 cursor-pointer">
              <a
                href="https://gdg.community.dev/events/details/google-gdg-cloud-kl-presents-build-with-ai-kuala-lumpur-amp-gcpboleh-ai-studyjam-2024/cohost-gdg-cloud-kl"
                className="text-sm p-1 font-semibold text-gray-800"
              >
                Build with AI & #GCPBoleh Kickoff
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 w-full gap-2 my-2">
            <div className="transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-opacity-100 duration-200 relative rounded-md w-full shadow-lg bg-white bg-opacity-80 py-3 px-4 cursor-pointer">
              <a
                href="http://goo.gle/GCPBolehS6"
                className="text-sm p-1 font-semibold text-gray-800"
              >
                GCPBoleh S6
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 w-full gap-2 my-2">
            <div className="transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-opacity-100 duration-200 relative rounded-md w-full shadow-lg bg-white bg-opacity-80 py-3 px-4 cursor-pointer">
              <a
                href="https://open.spotify.com/user/2mxbue3d9g83o6w2rqi8xydj3?si=9ca436f318fc4ab8"
                className="text-sm p-1 font-semibold text-gray-800"
              >
                Spotify
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Links;

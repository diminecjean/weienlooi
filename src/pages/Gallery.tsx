import React, { useEffect } from "react";
import Navbar from "../components/Navbar";

function typewriter(
  id: string,
  text: string[],
  typingSpeed: number,
  deletingSpeed: number,
  waitingTime: number
) {
  let i = 0;
  let j = 0;
  let currentWord = "";
  let isDeleting = false;
  let isWaiting = false;

  function type() {
    currentWord = text[i];
    const element = document.getElementById(id);
    if (element) {
      if (isDeleting) {
        if (!isWaiting) {
          element.textContent = currentWord.substring(0, j - 1);
          j--;
        }
        if (j == 0) {
          isDeleting = false;
          i++;
          if (i == text.length) {
            i = 0;
          }
        }
      } else {
        element.textContent = currentWord.substring(0, j + 1);
        j++;
        if (j == currentWord.length) {
          isDeleting = true;
          isWaiting = true;
          setTimeout(() => (isWaiting = false), waitingTime);
        }
      }
    }
    const speed = isDeleting && !isWaiting ? deletingSpeed : typingSpeed;
    setTimeout(type, speed);
  }

  type();
}

const photos = [
  {
    photoUrl:
      "https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/353030827_789488479332345_2437387493324923491_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFRnM18bL1D1Xv_nE56KK63ZHNThEGWX2tkc1OEQZZfawlxXz5WMGVKpfdbUNsziYJ8hMK7DzKnzxOMqNX1po4c&_nc_ohc=chaOQzke_o8Ab4Lavim&_nc_ht=scontent.fkul15-1.fna&oh=00_AfBtdC9PXbArvGXsgPdMDeRRSafKSu4NCMCDwqrWCarbnA&oe=662ACC75",
    photoAlt: "Payhack_01",
  },
  {
    photoUrl:
      "https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/352949182_789490145998845_8455319691394121666_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEicvh529BXwbyJ4SCOUslvjTGPxM0eXV6NMY_EzR5dXm8XD4eoFR0t_Bj4NYm_t53SXYvyR1RZVZpzNVC5iUx6&_nc_ohc=x-jtdomqkmgAb7_wzLH&_nc_ht=scontent.fkul15-1.fna&oh=00_AfBq-un3wBrRXFpD46_YWbbVilkNQzpx9Lw1xpudM9da4g&oe=662ADDBA",
    photoAlt: "Payhack_02",
  },
  {
    photoUrl:
      "https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/353050755_789493749331818_1305127645793184237_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF02CE7_9V0sVhBsElrbutrzDEQYj7cMi7MMRBiPtwyLnQxHXG8GbW1gerNnLj32ElH6BihU4zyCB1ybCyAqHbw&_nc_ohc=ls7Bb4_aYDUAb6U1URl&_nc_ht=scontent.fkul15-1.fna&oh=00_AfCoU8VQM1AuU1hzTw6b1V9yYEKSU2ft3gOzzbdlTFI5nQ&oe=662AC1CE",
    photoAlt: "Payhack_03",
  },
  {
    photoUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczN8kemI1VWEALLi526K8XVKHdFYtv2AM_OC2xCSCiXD2iYu-kFaktYHwukfuvSGIOXtNKbrjG-sKjWLFjJut13Xxqu0gB-0H_herjaKUopf9gD0x7cDhpsVVcddNU7xRw9hXQ7_PJzNcQYsOOviosoe=w1145-h846-s-no",
    photoAlt: "GDSCSummit_01",
  },
  {
    photoUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczPZHA55fbpyzT4A8X2ssFR68RW0N2XJ2dI93DVODs3G2hW_1NhWjLI-ZpSPqIgoNMxYExnrKdgBvc7NtsqZD1Pf_msINsXdvszMmKh33H0Fhl0qjdsq0yu1qfUaGyC6neLro6U0cO2oloHo-LiRI1un=w1269-h846-s-no?authuser=0",
    photoAlt: "GDSCSummit_02",
  },
  {
    photoUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczNwLLPMx_S32DeKNDgJj_iRo7MCW_ckXQW95-9LMy8k0ECkcMXduJty48j-kCEQxZtdQZ7OBKFNaKZ8jehtxo2TH4RCTsV8IQ-1qGs98LAnAAYwYdo3ReHUmUSbUBgEybYRsFRMtEjN9aHOr-mEV4xN=w1269-h846-s-no?authuser=0",
    photoAlt: "GDSCSummit_03",
  },
  {
    photoUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczPQ9J7vtZEG9wpXpIhkhmwSvj2MFKG492faSlFi_9TTEpnlzS67-2AGxw_UJRfrUzkIIRpKB0ya4TsRFa91cRq2pWRsKF3-8KxgBMj8fzRsT4utFY2MbtaZO_EQ1t6QroEF2f460tolwx8huR73MsC6=w1269-h846-s-no?authuser=0",
    photoAlt: "GDSCSummit_04",
  },
  {
    photoUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczNM72sV87uTJWAIqjRN3sgzCwLhAG0qtAWCXVYjLz9QusrrUPdtANwSio6vkmgBmtjQNzekl6q_7WQMgLKVc32bvbgMqkcs-2jYr6aHloWI-nrlPdEICvqzvkqWWpqnt1xib2MeqYGEp_Oz401aPQS_=w1269-h846-s-no?authuser=0",
    photoAlt: "GDSCSummit_05",
  },
  {
    photoUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczNVRmy7-QgrGYMbmym6OMJmW_Xx6r5H4SvvaXX6_5Hu4BXGkE8zSsV0j5wluDNg-cThmdvTHu_XXlp_VXASUcuTb3PCqS46SNVeRNBfrFZumKYSTtTJQtBNMxBheQTZ_v8GKyXL7CTZnVYQnUFoSiIT=w1269-h846-s-no?authuser=0",
    photoAlt: "GDSCSummit_06",
  },
  {
    photoUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczNFYwA3YlyIhhO_YT-02K0SZNKbifYZstAlTFwA0kSjJo5a0zyFzSWJYYwQ2SFE4UtgrE5nuGYd2AqH8oEs6kPPU81oPoxyLRo5YWFvfCFK5mqvaIMQC_hPfrAYm0bGn_BpnudpErc3uPaIM46GbcZ1=w1269-h846-s-no?authuser=0",
    photoAlt: "GDSCSummit_07",
  },
  {
    photoUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczNvvhtRMeKixmmQ8x5fWM2UaT9k1nmk6JPbjBEirfR4Xk9NkBswGpRh80fStjFLEJD4YNI4cJWkYZL-9ESJqFe419MirSnxpbGkpuJUSKbndaT4TLi7rXR1KNtOzlMETg3v8sYR2hUP41TL_14Kx8SQtg=w1269-h846-s-no?authuser=0",
    photoAlt: "KerasCommunityDay_01",
  },
  {
    photoUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczO9QPZC9GE2IAV8So0X3k9JBfFdaT5nnBq65bN3bnGBAdfSRL4VWNLS3zQNNaP1fpe8HjX4e74Mir97QYP_BbWZNMn3NpXHVL9mUodG4XbGK8lgtzQL9f950fkbwR_WhD6KOoLY-mjhnu4T3wzOlrFbWw=w1269-h846-s-no?authuser=0",
    photoAlt: "KerasCommunityDay_02",
  },
  {
    photoUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczMv9ntfk9JqM2r7gwUBnN_ITJLnl0COVv90ogIDT_-0ZdCRSFLl-0rbCCiG4BKAumats3nQHIIEKFBR_kVhQhhK9yfumVefE7DHlJMy2PLJ-PMYinbSeHCyyjJLDvsBKSiV18WBJnOsOcC_Adv8Yfyy=w1128-h846-s-no?authuser=0",
    photoAlt: "CodeMaven_01",
  },
  {
    photoUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczOZLxdalcWDHJaolD859Usnl1mbP03LaPNLMEI20CO3ocSKqwFEhCswnp9T4lrGO7M5KNUfOUxgOEyzWPBDgm_aOOCgffgsAWKHq6fsW2bG1h_Qv68QGOLFZEsfo0kabejDz_qXnqXHvtEUitSD-hQ8=w1128-h846-s-no?authuser=0",
    photoAlt: "CodeMaven_02",
  },
  {
    photoUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczM2CLO4ZUyCJtHA-s6sIa8XoIuxkhs_YgXPJTK9VBxCNyc4SN3A5w2zJs1yIqKM4kbiNFAVEH0k6dpEcVn2KYTBdXml1mO4QKa5yjVtdI_CvY_oCZHnreUjGIzUoTW1JWsDjITbmmzSpCYI-SbdAA-i=w1128-h846-s-no?authuser=0",
    photoAlt: "CodeMaven_03",
  },
  {
    photoUrl:
      "https://photos.fife.usercontent.google.com/pw/AP1GczNTIEqv1kE2OHHHS-eh_B3onNZC3JqGoSoiWOAxnjnW6tcxKXavAevN=w1269-h846-s-no?authuser=0",
    photoAlt: "DevFest2023_01",
  },
  {
    photoUrl:
      "https://lh3.googleusercontent.com/pw/AP1GczN8-pxa-zJhADEAoQcb5lRNoUqoiGuBf5VWiP24IR1Ec4eKfRSYX3EbGnuMVcXwhVKuDoKQc8VEmbOGLavQ4-oSImul-7QtsjqrVVQpbqiUR9rpfxjL4ZD-34srqKdbtaUp3JrNr4LvEUgeVol5aQfo=w846-h846-s-no",
    photoAlt: "DevFest2023_02",
  },
  {
    photoUrl:
      "https://photos.fife.usercontent.google.com/pw/AP1GczMMybgCJ7dyv2lPWFzGae5ij4uzuEsLixjc3iAHj04yS-Sv9uQZHxxJ=w301-h201-no?authuser=0",
    photoAlt: "DevFest2023_03",
  },
  {
    photoUrl:
      "https://photos.fife.usercontent.google.com/pw/AP1GczMCybdya81Xf3CGqZlqQcPSugIkFmJWgCVBeL7VRiJgLYdTmuynKckQ=w1269-h846-s-no?authuser=0",
    photoAlt: "DevFest2023_04",
  },
  {
    photoUrl:
      "https://photos.fife.usercontent.google.com/pw/AP1GczM2O2AHt9YQ0p3Cp1E3lj56YPcl8OIWVLi4GEGa9xY2vjg5t-t59H01=w1024-h768-s-no?authuser=0",
    photoAlt: "GOOSE_01",
  },
  {
    photoUrl:
      "https://photos.fife.usercontent.google.com/pw/AP1GczM2O2AHt9YQ0p3Cp1E3lj56YPcl8OIWVLi4GEGa9xY2vjg5t-t59H01=w1024-h768-s-no?authuser=0",
    photoAlt: "Genfest_01",
  },
  {
    photoUrl:
      "https://photos.fife.usercontent.google.com/pw/AP1GczNcdjb876qLEs8JieR6bFhrmBRMTx9x7Zihm5eqFwziGS5FdIoUZKxV=w1269-h846-s-no",
    photoAlt: "VHack2023_01",
  },
  {
    photoUrl:
      "https://photos.fife.usercontent.google.com/pw/AP1GczNm5uND0xxZd6WSKKdgj5Y7cUFdUiWy1fm_TcNc6_7DWyjPl2jE9q1o=w1269-h846-s-no?authuser=0",
    photoAlt: "VHack2023_02",
  },
  {
    photoUrl:
      "https://photos.fife.usercontent.google.com/pw/AP1GczNXemSrH-aiTnXgctxKvVT6epdVsB_z8ymdSMwmDOBE0zCnAgiIQhz_=w564-h846-s-no",
    photoAlt: "VHack2023_03",
  },
  {
    photoUrl:
      "https://photos.fife.usercontent.google.com/pw/AP1GczNqWC_CkpZZSRCfimGqO2mw78BaGoCxIwk6p67E9Uyr_xFd_36ABTqf=w1269-h846-s-no",
    photoAlt: "VHack2023_04",
  },
  {
    photoUrl:
      "https://photos.fife.usercontent.google.com/pw/AP1GczP1rWD5TFutpnwmzKxVDQbkIucCr4Ew_htDR5rYi5zT6MInTtelhDZp=w564-h846-s-no",
    photoAlt: "Back2Basics_01",
  },
  {
    photoUrl:
      "https://photos.fife.usercontent.google.com/pw/AP1GczPOaJCnydAx8QeFjtRDONp3R0NwzSpfvGf9t2ZqAgUWtDMU9kMWNTHEyAMQspV6vcrgtrmkjArt59_-DRm-MmjY6e7OIw=w306-h199-no",
    photoAlt: "Back2Basics_02",
  },
  {
    photoUrl:
      "https://photos.fife.usercontent.google.com/pw/AP1GczOLwkF2uzZDo2Fnlu9Lf-q-6e3QKdRhaMaL7hBFSHXthe_lyb6Frxnp=w1505-h846-s-no",
    photoAlt: "Back2Basics_03",
  },
  {
    photoUrl:
      "https://scontent.fkul15-1.fna.fbcdn.net/v/t39.30808-6/434202968_809190014587679_4745950996322981562_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=FlcUHynr_kAAb7vk2td&_nc_ht=scontent.fkul15-1.fna&oh=00_AfCVSfqd9fsuxSxc7sTRaflgxFJMJtGd1ZKIpiJIohNVEw&oe=6629B4B8",
    photoAlt: "IWD2024_01",
  },
];

const Gallery: React.FC = () => {
  useEffect(() => {
    typewriter(
      "typewriter",
      ["Events.", "Experiences.", "Interests.", "Memories.", "Stories."],
      250,
      50,
      2000
    );
  }, []);
  return (
    <div>
      <Navbar />
      <div className="relative bg-[url(https://images.unsplash.com/photo-1629317337201-2e7189bbdfac?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-full bg-cover bg-fixed grid grid-cols-1">
        <div className="absolute inset-0 bg-gray-900 bg-opacity-65"></div>
        <div className="relative col-span-1 text-left pt-16 px-8">
          <h1 className="my-1 text-white text-3xl font-semibold drop-shadow-lg">
            My Gallery
          </h1>
          <h1 className="drop-shadow-md my-1 text-white text-xl font-normal">
            Take a peek into my life{" "}
            <span id="typewriter" className="text-[#7fcefc]"></span>
          </h1>
          <div className="rounded-xl bg-black bg-opacity-40 shadow-lg p-4 my-4">
            <div className="flex justify-between gap-4">
              <div className="flex flex-col gap-4">
                {photos
                  .filter((_, index) => index % 3 === 0)
                  .map((photo, index) => (
                    <img
                      key={index}
                      className="h-auto max-w-full rounded-lg"
                      src={photo.photoUrl}
                      alt={photo.photoAlt}
                    />
                  ))}
              </div>
              <div className="flex flex-col gap-4">
                {photos
                  .filter((_, index) => index % 3 === 1)
                  .map((photo, index) => (
                    <img
                      key={index}
                      className="h-auto max-w-full rounded-lg"
                      src={photo.photoUrl}
                      alt={photo.photoAlt}
                    />
                  ))}
              </div>
              <div className="flex flex-col gap-4">
                {photos
                  .filter((_, index) => index % 3 === 2)
                  .map((photo, index) => (
                    <img
                      key={index}
                      className="h-auto max-w-full rounded-lg"
                      src={photo.photoUrl}
                      alt={photo.photoAlt}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

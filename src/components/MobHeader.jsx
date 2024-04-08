import React from "react";
import Search from "./Search";
import { useContext } from "react";
import { UseAllContext } from "../App";

const MobHeader = () => {
  const { showSideBar, setshowSideBar } = useContext(UseAllContext);

  const IsshowSideBar = () => {
    setshowSideBar(!showSideBar);
  };
  return (
    <div className="w-full bg-[white] pb-[6px] sm:fixed sm:top-0 sm:z-[95] sm:pt-[10px]">
      <div className="sm:container mx-auto sm:flex sm:items-center sm:gap-2">
        <Search />
        <div className="hidden sm:block">
          <button
            className="hidden rounded-lg bg-check p-2 shadow-smbtn sm:block"
            onClick={IsshowSideBar}
          >
            <svg
              width="22.000000"
              height="22.000000"
              viewBox="0 0 22 22"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <desc>Created with Pixso.</desc>
              <defs />
              <rect
                id="Iconly/Curved/Filter"
                width="22.000000"
                height="22.000000"
                fill="#FFFFFF"
                fillOpacity="0"
              />
              <path
                id="Stroke 1"
                d="M10.21 16.39L4.28 16.39"
                stroke="#FFFFFF"
                strokeOpacity="1.000000"
                strokeWidth="1.500000"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                id="Stroke 3"
                d="M16.43 18.88C18.3 18.88 18.92 18.26 18.92 16.39C18.92 14.52 18.3 13.89 16.43 13.89C14.56 13.89 13.93 14.52 13.93 16.39C13.93 18.26 14.56 18.88 16.43 18.88Z"
                stroke="#FFFFFF"
                strokeOpacity="1.000000"
                strokeWidth="1.500000"
                strokeLinejoin="round"
              />
              <path
                id="Stroke 5"
                d="M12.99 6.77L18.92 6.77"
                stroke="#FFFFFF"
                strokeOpacity="1.000000"
                strokeWidth="1.500000"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path
                id="Stroke 7"
                d="M6.77 4.28C4.9 4.28 4.28 4.9 4.28 6.77C4.28 8.64 4.9 9.27 6.77 9.27C8.64 9.27 9.27 8.64 9.27 6.77C9.27 4.9 8.64 4.28 6.77 4.28Z"
                stroke="#FFFFFF"
                strokeOpacity="1.000000"
                strokeWidth="1.500000"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobHeader;

import { Button } from "@mui/material";

import Card1 from "../assets/images/photos/main/card/image  3.jpg";
import Card2 from "../assets/images/photos/main/card/image  5.jpg";

const Info = () => {
  return (
    <section className="mb-36 grid grid-cols-2 gap-7 pt-12 sm:mb-5 sm:grid-cols-1 sm:gap-12 sm:pt-6">
      <div className="w-full bg-grey">
        <div className="relative flex w-full flex-col items-end justify-center bg-[url('./assets/images/back/Maskback.svg')] bg-contain bg-no-repeat pb-11 pr-7 pt-9">
          <img
            src={Card2}
            alt="position img"
            className="absolute left-[8%] top-[-16%] w-[38%] sm:left-[5] sm:w-[30%]"
          />
          <h3 className="mb-2 text-right text-[18px] font-black leading-6 sm:mb-5 sm:text-[16px] sm:leading-5 md:mb-6">
            Summer cactus <br /> & succulents
          </h3>
          <p className="mb-6 text-right leading-6 text-oridinary sm:mb-4 sm:text-[13px] sm:leading-4 md:mb-2">
            We are an online plant shop offering a wide <br /> range of cheap
            and trendy plants
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#46A358",
              color: "white",
              fontWeight: "500",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#46A358",
              },
            }}
          >
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8126 5.79419L1.56258 5.79419"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.27485 1.27587C8.27485 1.27587 12.8123 3.72162 12.8123 5.79312C12.8123 7.86612 8.27485 10.3126 8.27485 10.3126"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="ml-1 text-[16px] font-medium text-[#fff] md:text-[14px]">
              Find More
            </span>
          </Button>
        </div>
      </div>
      <div className="w-full bg-grey">
        <div className="relative flex w-full flex-col items-end justify-center bg-[url('./assets/images/back/Maskback.svg')] bg-contain bg-no-repeat pb-11 pr-7 pt-9">
          <img
            src={Card1}
            alt="position img"
            className="absolute left-[8%] top-[-16%] w-[38%] sm:left-[5] sm:w-[30%]"
          />
          <h3 className="mb-2 text-right text-[18px] font-black leading-6 sm:mb-5 sm:text-[16px] sm:leading-5 md:mb-6">
            Summer cactus <br /> & succulents
          </h3>
          <p className="mb-6 text-right leading-6 text-oridinary sm:mb-4 sm:text-[13px] sm:leading-4 md:mb-2 ">
            We are an online plant shop offering a wide <br /> range of cheap
            and trendy plants
          </p>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#46A358",
              color: "white",
              fontWeight: "500",
              textTransform: "none",
              "&:hover": {
                backgroundColor: "#46A358",
              },
            }}
          >
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.8126 5.79419L1.56258 5.79419"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.27485 1.27587C8.27485 1.27587 12.8123 3.72162 12.8123 5.79312C12.8123 7.86612 8.27485 10.3126 8.27485 10.3126"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <span className="ml-1 text-[16px] font-medium text-[#fff] md:text-[14px]">
              Find More
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Info;

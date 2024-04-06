import React, { useContext, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import { Rating, Stack, Button, Avatar } from "@mui/material";
import { UseAllContext } from "../App";

import StarIcon from "@mui/icons-material/Star";

const SingleInfo = () => {
  const [value, setValue] = React.useState(0);
  const params = useParams();
  const [step, setStep] = useState(1);
  const { flowers, increment, decrement, count, addToCart } =
    useContext(UseAllContext);
  const [mainImage, setMainImage] = useState("");
  const [activeButton, setActiveButton] = useState("");

  const handleStepChange = (newStep) => {
    setStep(newStep);
  };

  const handleImageChange = (newImage) => {
    setMainImage(newImage);
  };

  const handleBtnSize = (size) => {
    setActiveButton(size);
  };

  return (
    <section>
      <div className="my-9 flex items-center sm:hidden">
        <NavLink to="/">
          <p className="text-[15px] font-bold">Home</p>
        </NavLink>
        <p className="text-[15px]">&nbsp;/ Shop</p>
      </div>
      {flowers
        .filter((flower) => +flower.id === +params.id)
        .map((flower) => {
          return (
            <div
              className="mb-24 grid w-full grid-cols-2 gap-[52px]"
              key={flower.id}
            >
              <div className="flex max-h-[450px] items-start gap-7">
                <div className="flex flex-col justify-center gap-4">
                  <button
                    className=" h-[100px] max-w-[100px] overflow-hidden"
                    onClick={() => handleImageChange(flower.card_img)}
                  >
                    <img
                      src={flower.card_img}
                      alt="first img"
                      className="object-fill"
                    />
                  </button>
                  <button
                    className="h-[100px] max-w-[100px] overflow-hidden"
                    onClick={() => handleImageChange(flower.image_url)}
                  >
                    <img
                      src={flower.image_url}
                      alt="second img"
                      className="object-fill"
                    />
                  </button>
                  <button
                    className="h-[100px] max-w-[100px] overflow-hidden"
                    onClick={() => handleImageChange(flower.online_img)}
                  >
                    <img
                      src={flower.online_img}
                      alt="third img"
                      className="object-fill"
                    />
                  </button>
                  <button
                    className="h-[100px] max-w-[100px] overflow-hidden"
                    onClick={() => handleImageChange(flower.image_url)}
                  >
                    <img
                      src={flower.image_url}
                      alt="fourth img"
                      className="object-fill"
                    />
                  </button>
                </div>
                <div className="relative max-h-[445px] w-full overflow-hidden rounded-md bg-grey">
                  <img
                    src={mainImage || flower.card_img}
                    alt="main img"
                    className="h-full w-full object-fill"
                  />
                  <button className="absolute right-1 top-1 rounded-[50%] bg-[#FFF] p-2">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M7.61539 1.65385C4.32229 1.65385 1.65385 4.32017 1.65385 7.60784C1.65385 10.8955 4.32229 13.5618 7.61539 13.5618C9.2583 13.5618 10.7449 12.8989 11.8238 11.825C12.9075 10.7463 13.5769 9.25563 13.5769 7.60784C13.5769 4.32017 10.9085 1.65385 7.61539 1.65385ZM0.5 7.60784C0.5 3.68166 3.6863 0.5 7.61539 0.5C11.5445 0.5 14.7308 3.68166 14.7308 7.60784C14.7308 9.36686 14.0905 10.9773 13.0312 12.218L15.3308 14.5149C15.5562 14.7401 15.5564 15.1054 15.3313 15.3308C15.1061 15.5562 14.7408 15.5564 14.5154 15.3313L12.2137 13.0322C10.9738 14.082 9.36818 14.7157 7.61539 14.7157C3.6863 14.7157 0.5 11.534 0.5 7.60784Z"
                        fill="#3D3D3D"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <div>
                <h3 className="mb-5 text-[28px] font-bold leading-4">
                  {flower.common_name}
                </h3>
                <div className="mb-4 flex items-center justify-between border-b border-[#46A35880] pb-3">
                  <p className="text-[22px] font-bold text-check">
                    ${flower.price}.00
                  </p>
                  <div className="flex items-center gap-2">
                    <Stack spacing={1}>
                      <Rating
                        name="half-rating-read"
                        defaultValue={5}
                        readOnly
                        icon={<StarIcon sx={{ fill: "#ffc107" }} />}
                        size="large"
                      />
                    </Stack>
                    <p className="text-[15px]">6 Customer Review</p>
                  </div>
                </div>
                <h4 className="mb-[10px] text-[15px] font-medium">
                  Short Description:
                </h4>
                <p className="mb-6 leading-6 text-oridinary">
                  {flower.synonyms.slice(0, 10).join(" ")}
                </p>
                <h4 className="mb-[10px] text-[15px] font-medium">Size</h4>
                <div className="mb-6 flex items-center gap-[10px]">
                  <button
                    className={`h-8 w-8 rounded-xl border  p-[2px] text-[18px] font-medium  hover:border-check hover:font-bold hover:text-check ${activeButton === "S" ? "border-check font-bold text-check " : "border-[#EAEAEA]"}`}
                    onClick={() => handleBtnSize("S")}
                  >
                    S
                  </button>
                  <button
                    className={`h-8 w-8 rounded-xl border  p-[2px] text-[18px] font-medium  hover:border-check hover:font-bold hover:text-check 
          ${activeButton === "M" ? "border-check font-bold text-check " : "border-[#EAEAEA]"}`}
                    onClick={() => handleBtnSize("M")}
                  >
                    M
                  </button>
                  <button
                    className={`h-8 w-8 rounded-xl border  p-[2px] text-[18px] font-medium  hover:border-check hover:font-bold hover:text-check ${activeButton === "L" ? "border-check font-bold text-check " : "border-[#EAEAEA]"}`}
                    onClick={() => handleBtnSize("L")}
                  >
                    L
                  </button>
                  <button
                    className={`h-8 w-8 rounded-xl border  p-[2px] text-[18px] font-medium  hover:border-check hover:font-bold hover:text-check ${activeButton === "XL" ? "border-check font-bold text-check " : "border-[#EAEAEA]"}`}
                    onClick={() => handleBtnSize("XL")}
                  >
                    XL
                  </button>
                </div>
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex items-center gap-6">
                    <button
                      className="h-9 w-9 rounded-[50%] bg-check text-[28px] text-[#fff]"
                      onClick={decrement}
                    >
                      -
                    </button>
                    <p className="text-[20px]">{count}</p>
                    <button
                      className="h-9 w-9 rounded-[50%] bg-check text-[28px] text-[#fff]"
                      onClick={increment}
                    >
                      +
                    </button>
                  </div>
                  <div className="flex items-center gap-[10px]">
                    <NavLink to="/shop/shopcart">
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#46A358",
                          color: "white",
                          fontWeight: "700",
                          paddingX: "32px",
                          "&:hover": {
                            backgroundColor: "#46A358",
                          },
                        }}
                      >
                        Buy NOW
                      </Button>
                    </NavLink>
                    <Button
                      onClick={() => addToCart(flower)}
                      variant="outlined"
                      color="success"
                      sx={{
                        color: "#46A358",
                        borderColor: "#46A358",
                        fontWeight: "700",
                        paddingX: "32px",
                      }}
                    >
                      Add to cart
                    </Button>
                    <Button
                      variant="outlined"
                      color="success"
                      sx={{
                        borderColor: "#46A358",
                        paddingY: "7px",
                        paddingX: "4px",
                      }}
                    >
                      <svg
                        width="20"
                        height="18"
                        viewBox="0 0 20 18"
                        fill="#46A358"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10 17.8873C9.71527 17.8873 9.44077 17.7842 9.22684 17.5968C8.41888 16.8903 7.63992 16.2264 6.95267 15.6408L6.94916 15.6377C4.93423 13.9207 3.19427 12.4378 1.98364 10.9771C0.630341 9.34409 0 7.79578 0 6.10434C0 4.46097 0.563507 2.94485 1.58661 1.83508C2.62192 0.712189 4.04251 0.09375 5.58716 0.09375C6.74164 0.09375 7.79892 0.45874 8.72955 1.1785C9.19922 1.54181 9.62494 1.98645 10 2.5051C10.3752 1.98645 10.8008 1.54181 11.2706 1.1785C12.2012 0.45874 13.2585 0.09375 14.413 0.09375C15.9575 0.09375 17.3782 0.712189 18.4135 1.83508C19.4366 2.94485 20 4.46097 20 6.10434C20 7.79578 19.3698 9.34409 18.0165 10.9769C16.8059 12.4378 15.0661 13.9205 13.0515 15.6374C12.363 16.224 11.5828 16.8889 10.773 17.5971C10.5592 17.7842 10.2846 17.8873 10 17.8873ZM5.58716 1.26532C4.37363 1.26532 3.25882 1.74963 2.44781 2.62915C1.62476 3.52194 1.17142 4.75607 1.17142 6.10434C1.17142 7.52692 1.70013 8.79919 2.88559 10.2296C4.03137 11.6122 5.73563 13.0645 7.70889 14.7462L7.71255 14.7492C8.4024 15.3371 9.18442 16.0036 9.99832 16.7153C10.8171 16.0023 11.6003 15.3347 12.2916 14.7458C14.2647 13.0642 15.9688 11.6122 17.1146 10.2296C18.2999 8.79919 18.8286 7.52692 18.8286 6.10434C18.8286 4.75607 18.3752 3.52194 17.5522 2.62915C16.7413 1.74963 15.6264 1.26532 14.413 1.26532C13.524 1.26532 12.7078 1.54791 11.9872 2.10516C11.3449 2.60199 10.8975 3.23004 10.6352 3.66949C10.5003 3.89548 10.2629 4.03036 10 4.03036C9.73709 4.03036 9.49966 3.89548 9.36478 3.66949C9.10263 3.23004 8.65524 2.60199 8.01285 2.10516C7.29218 1.54791 6.47598 1.26532 5.58716 1.26532Z"
                          fill="#46A358"
                        />
                      </svg>
                    </Button>
                  </div>
                </div>
                <p className="mb-[10px] text-[15px] text-oridinary">
                  <span className="opacity-80"> SKU:</span> 1995751877966
                </p>
                <p className="mb-[10px] text-[15px] text-oridinary">
                  <span className="opacity-80"> Categories:</span> Potter Plants
                </p>
                <p className="mb-[18px] text-[15px] text-oridinary">
                  <span className="opacity-80"> Tags:</span> Home, Garden,
                  Plants
                </p>
                <div className="flex items-center gap-4">
                  <p className="text-[15px] font-medium">
                    Share this products:
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <svg
                      width="8.000000"
                      height="15.000000"
                      viewBox="0 0 8 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs />
                      <path
                        id="Facebook"
                        d="M1.87 5L0 5L0 7.5L1.87 7.5L1.87 15L5 15L5 7.5L7.25 7.5L7.5 5L5 5L5 3.93C5 3.37 5.12 3.12 5.68 3.12L7.5 3.12L7.5 0L5.12 0C2.87 0 1.87 1 1.87 2.87L1.87 5Z"
                        fill="#3D3D3D"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </svg>
                    <svg
                      width="15.000000"
                      height="13.000000"
                      viewBox="0 0 15 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs />
                      <path
                        id="Twitter"
                        d="M4.71 12.19C10.37 12.19 13.47 7.5 13.47 3.43C13.47 3.3 13.47 3.16 13.46 3.03C14.06 2.6 14.58 2.06 15 1.44C14.44 1.68 13.85 1.85 13.23 1.92C13.86 1.54 14.35 0.94 14.58 0.22C13.99 0.57 13.33 0.83 12.63 0.97C12.07 0.37 11.27 0 10.38 0C8.68 0 7.3 1.37 7.3 3.07C7.3 3.31 7.33 3.55 7.38 3.77C4.82 3.65 2.56 2.42 1.04 0.56C0.77 1.01 0.62 1.54 0.62 2.11C0.62 3.17 1.17 4.12 1.99 4.67C1.49 4.65 1.01 4.51 0.6 4.28C0.6 4.29 0.6 4.31 0.6 4.32C0.6 5.81 1.66 7.06 3.07 7.34C2.81 7.41 2.54 7.45 2.25 7.45C2.06 7.45 1.86 7.43 1.68 7.39C2.07 8.61 3.2 9.5 4.55 9.53C3.5 10.35 2.17 10.85 0.73 10.85C0.48 10.85 0.24 10.83 0 10.8C1.36 11.68 2.97 12.19 4.71 12.19Z"
                        fill="#3D3D3D"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </svg>
                    <svg
                      width="15.000000"
                      height="15.000000"
                      viewBox="0 0 15 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs />
                      <path
                        id="Linkedin"
                        d="M3.12 1.56C3.12 2.43 2.43 3.12 1.56 3.12C0.68 3.12 0 2.43 0 1.56C0 0.68 0.68 0 1.56 0C2.43 0 3.12 0.68 3.12 1.56ZM3.12 4.37L0 4.37L0 14.37L3.12 14.37L3.12 4.37ZM8.12 4.37L5 4.37L5 14.37L8.12 14.37L8.12 9.12C8.12 6.18 11.87 5.93 11.87 9.12L11.87 14.37L15 14.37L15 8.06C15 3.12 9.43 3.31 8.12 5.75L8.12 4.37Z"
                        fill="#3D3D3D"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </svg>
                    <svg
                      width="15.000000"
                      height="12.000000"
                      viewBox="0 0 15 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs />
                      <path
                        id="Vector 13 (Stroke)"
                        d="M7 1.09C5.3 1.09 2.98 1.23 1.51 1.34C1.03 1.37 0.65 1.76 0.65 2.23L0.65 2.76L6.53 5.85C6.82 6.01 7.17 6.01 7.46 5.85L13.34 2.76L13.34 2.23C13.34 1.76 12.96 1.37 12.48 1.34C11.01 1.23 8.69 1.09 7 1.09ZM13.34 4.01L8.02 6.81C7.38 7.14 6.61 7.14 5.97 6.81L0.65 4.01L0.65 9.76C0.65 10.23 1.03 10.62 1.51 10.65C2.98 10.76 5.3 10.9 7 10.9C8.69 10.9 11.01 10.76 12.48 10.65C12.96 10.62 13.34 10.23 13.34 9.76L13.34 4.01ZM1.43 0.25C2.9 0.14 5.25 0 7 0C8.74 0 11.09 0.14 12.56 0.25C13.66 0.33 14.5 1.2 14.5 2.23L14.5 9.76C14.5 10.79 13.66 11.66 12.56 11.74C11.09 11.85 8.74 12 7 12C5.25 12 2.9 11.85 1.43 11.74C0.33 11.66 -0.5 10.79 -0.5 9.76L-0.5 2.23C-0.5 1.2 0.33 0.33 1.43 0.25Z"
                        fill="#3D3D3D"
                        fillOpacity="1.000000"
                        fillRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      <div>
        <div className="mb-8 flex w-full items-center justify-between  border-b border-[#46A35880] sm:mb-5">
          <nav>
            <ul className="flex items-center gap-10 sm:pb-3">
              <li
                className={`border-b-2  pb-1 text-[15px]  ${
                  step === 1
                    ? "border-check font-bold text-check"
                    : "border-[#fff]"
                } sm:pb-0 sm:text-[14px] lg:pb-[6px]`}
                onClick={() => handleStepChange(1)}
              >
                Product Description
              </li>
              <li
                className={`border-b-2  pb-1 text-[15px]  ${
                  step === 2
                    ? "border-check font-bold text-check"
                    : "border-[#fff]"
                } sm:pb-0 sm:text-[14px] lg:pb-[6px]`}
                onClick={() => handleStepChange(2)}
              >
                Reviews (6)
              </li>
            </ul>
          </nav>
        </div>
        {step === 1 && (
          <div>
            <p className="mb-[18px] leading-6 text-oridinary">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Nam fringilla augue nec est tristique auctor. Donec non est at
              libero vulputate rutrum. Morbi ornare lectus quis justo gravida
              semper. Nulla tellus mi, vulputate adipiscing cursus eu, suscipit
              id nulla. <br /> <br /> Pellentesque aliquet, sem eget laoreet
              ultrices, ipsum metus feugiat sem, quis fermentum turpis eros eget
              velit. Donec ac tempus ante. Fusce ultricies massa massa. Fusce
              aliquam, purus eget sagittis vulputate, sapien libero hendrerit
              est, sed commodo augue nisi non neque. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Sed tempor, lorem et placerat
              vestibulum, metus nisi posuere nisl, in accumsan elit odio quis
              mi. Cras neque metus, consequat et blandit et, luctus a nunc.
              Etiam gravida vehicula tellus, in imperdiet ligula euismod eget.
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground.
            </p>
            <h4 className="font-bold leading-6">Living Room:</h4>
            <p className="mb-[18px] leading-6 text-oridinary">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <h4 className="font-bold leading-6">Dining Room:</h4>
            <p className="mb-[18px] leading-6 text-oridinary">
              The benefits of houseplants are endless. In addition to cleaning
              the air of harmful toxins, they can help to improve your mood,
              reduce stress and provide you with better sleep. Fill every room
              of your home with houseplants and their restorative qualities will
              improve your life.
            </p>
            <h4 className="font-bold leading-6">Office:</h4>
            <p className="mb-[18px] leading-6 text-oridinary">
              The ceramic cylinder planters come with a wooden stand to help
              elevate your plants off the ground. The ceramic cylinder planters
              come with a wooden stand to help elevate your plants off the
              ground. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        )}
        {step === 2 && (
          <div>
            <ul className="flex flex-col gap-3">
              <li className="">
                <div className="flex items-center gap-2">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                  <h4 className="font-bold">Remy Sharp</h4>
                </div>
                <p className="mt-2 w-[50%] px-2 leading-6 text-oridinary">
                  Absolutely love my new plant! It arrived in perfect condition
                  and adds such a vibrant touch to my living room.
                </p>
              </li>
              <li className="">
                <div className="flex items-center gap-2">
                  <Avatar
                    alt="Travis Howard"
                    src="/static/images/avatar/2.jpg"
                  />
                  <h4 className="font-bold">Travis Howard</h4>
                </div>
                <p className="mt-2 w-[50%] px-2 leading-6 text-oridinary">
                  I'm amazed by the quality of the plant I received. It looks
                  even better in person than in the pictures
                </p>
              </li>
              <li className="">
                <div className="flex items-center gap-2">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/3.jpg" />
                  <h4 className="font-bold">Remy Sharp</h4>
                </div>
                <p className="mt-2 w-[50%] px-2 leading-6 text-oridinary">
                  This plant exceeded my expectations. It's thriving and has
                  brought so much life to my workspace.
                </p>
              </li>
              <li className="">
                <div className="flex items-center gap-2">
                  <Avatar alt="Cindy Baker" src="/static/images/avatar/4.jpg" />
                  <h4 className="font-bold">Cindy Baker</h4>
                </div>
                <p className="mt-2 w-[50%] px-2 leading-6 text-oridinary">
                  The plant arrived quickly and was packaged with care. It's
                  evident that the seller takes pride in their products.
                </p>
              </li>
              <li className="">
                <div className="flex items-center gap-2">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/5.jpg" />
                  <h4 className="font-bold">Remy Sharp</h4>
                </div>
                <p className="mt-2 w-[50%] px-2 leading-6 text-oridinary">
                  I've purchased several plants from this site, and they never
                  disappoint. Always healthy and beautiful.
                </p>
              </li>
              <li className="">
                <div className="flex items-center gap-2">
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/6.jpg" />
                  <h4 className="font-bold">Karren Di</h4>
                </div>
                <p className="mt-2 w-[50%] px-2 leading-6 text-oridinary">
                  Highly recommend this plant! It's easy to care for and has
                  become the centerpiece of my home decor.
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

export default SingleInfo;

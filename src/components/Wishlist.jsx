import { useContext } from "react";
import { UseAllContext } from "../App";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";

const Wishlist = () => {
  const { mapItem, setmapItem, addToCart } = useContext(UseAllContext);

  const deleteWish = (id) => {
    const updatedWishFlowers = wishFlowers.filter((item) => item.id !== id);
    setWishFlowers(updatedWishFlowers);
    localStorage.setItem("wishFlower", JSON.stringify(updatedWishFlowers));
    const parentElement = document.getElementById(`wishItem_${id}`);
    if (parentElement) {
      parentElement.remove();
    }
  };

  return (
    <div>
      <h3 className="mb-5 text-[16px] font-medium">My Wishist</h3>
      <div className="mb-[60px] grid grid-cols-3 justify-between sm:mb-[50px] sm:grid-cols-2 sm:gap-x-5 sm:gap-y-6 lg:mb-[90px] lg:gap-x-8 lg:gap-y-10">
        {mapItem.length === 0 ? (
          <div className="card_item transition duration-500">
            <div className="relative flex items-center justify-center bg-[#FBFBFB] sm:min-h-[200px] sm:rounded-[24px]  lg:min-h-[300px]">
              <img
                src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1660073901-best-indoor-plants-zz-plant-1660073875.png?crop=1.00xw:0.802xh;0,0.168xh&resize=980:*"
                alt="card img"
                className="object-contain"
              />
              <div className="cardbtn_group absolute right-2 top-2 z-[13] flex-col items-center justify-center gap-2 sm:bottom-auto sm:left-auto sm:right-1 sm:top-2">
                <button className="card_btn flex h-9 w-9 items-center justify-center sm:h-7 sm:w-7">
                  <svg
                    width="20.000000"
                    height="19.000000"
                    viewBox="0 0 20 19"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <path
                      className="hoverable"
                      id="Vector"
                      d="M14.29 15.87L8.24 15.87C5.65 15.87 3.55 13.77 3.55 11.18L3.55 6.38C3.55 3.98 2.35 1.75 0.35 0.43C-0.01 0.19 -0.11 -0.29 0.12 -0.65C0.36 -1.01 0.85 -1.11 1.21 -0.87C2.35 -0.12 3.28 0.88 3.94 2.02C4.09 2.18 5.24 3.41 7.14 3.41L16.14 3.41C18.59 3.36 20.51 5.83 19.87 8.2L18.83 12.32C18.31 14.41 16.44 15.87 14.29 15.87ZM4.91 4.53C5.04 5.13 5.11 5.75 5.11 6.38L5.11 11.18C5.11 12.91 6.51 14.31 8.24 14.31L14.29 14.31C15.72 14.31 16.97 13.34 17.32 11.94L18.35 7.82C18.74 6.41 17.59 4.95 16.14 4.97L7.14 4.97C6.28 4.97 5.54 4.79 4.91 4.53ZM7.85 18.02C7.85 17.48 7.41 17.04 6.87 17.04C5.57 17.09 5.57 18.94 6.87 18.99C7.41 18.99 7.85 18.56 7.85 18.02ZM15.62 18.02C15.62 17.48 15.18 17.04 14.64 17.04C13.35 17.09 13.35 18.94 14.64 18.99C15.18 18.99 15.62 18.56 15.62 18.02ZM16.92 7.32C16.92 6.88 16.57 6.54 16.14 6.54L7.45 6.54C6.42 6.58 6.42 8.06 7.45 8.1L16.14 8.1C16.57 8.1 16.92 7.75 16.92 7.32Z"
                      fill="#3D3D3D"
                      fillOpacity="1.000000"
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
                <button className="card_btn flex h-9 w-9 items-center justify-center sm:hidden sm:h-7">
                  <svg
                    width="20.000000"
                    height="20.000000"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <path
                      className="hoverable"
                      id="Vector"
                      d="M14.56 16C10.57 19.18 4.98 18.3 2.02 14.65C-0.83 11.12 -0.65 6.04 2.44 2.82C5.64 -0.51 10.68 -0.95 14.32 1.78C15.63 2.76 16.61 4 17.24 5.5C17.88 7.02 18.07 8.59 17.85 10.22C17.63 11.83 16.99 13.27 15.94 14.62C16.02 14.67 16.11 14.71 16.18 14.78C17.33 15.93 18.48 17.08 19.63 18.23C19.91 18.5 20.04 18.82 19.96 19.2C19.8 19.96 18.9 20.25 18.32 19.73C18.04 19.49 17.79 19.22 17.54 18.96C16.59 18.01 15.64 17.06 14.69 16.12C14.65 16.08 14.61 16.04 14.56 16ZM15.95 8.98C15.96 5.12 12.84 2 8.97 2C5.12 1.99 2 5.09 1.98 8.94C1.97 12.81 5.08 15.94 8.96 15.96C12.8 15.98 15.94 12.84 15.95 8.98Z"
                      fill="#3D3D3D"
                      fillOpacity="1.000000"
                      fillRule="nonzero"
                    />
                  </svg>
                </button>
                <IconButton aria-label="delete">
                  <svg
                    width="24.000000"
                    height="24.000000"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <defs />
                    <rect
                      id="Iconly/Curved/Delete"
                      width="24.000000"
                      height="24.000000"
                      fillOpacity="0"
                    />
                    <path
                      id="Stroke 1"
                      d="M18.88 9.55C18.88 17.57 20.04 21.19 12.27 21.19C4.51 21.19 5.69 17.57 5.69 9.55"
                      stroke="red"
                      strokeOpacity="1.000000"
                      strokeWidth="1.500000"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    <path
                      id="Stroke 3"
                      d="M20.36 6.47L4.21 6.47"
                      stroke="red"
                      strokeOpacity="1.000000"
                      strokeWidth="1.500000"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    <path
                      id="Stroke 5"
                      d="M15.71 6.47C15.71 6.47 16.24 2.71 12.28 2.71C8.33 2.71 8.86 6.47 8.86 6.47"
                      stroke="red"
                      strokeOpacity="1.000000"
                      strokeWidth="1.500000"
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                  </svg>
                </IconButton>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <p className="py-3 text-[16px] sm:pb-1 sm:pt-2 sm:text-[15px]">
                Garganxola
              </p>
              <p className="py-3 text-[16px] sm:pb-1 sm:pt-2 sm:text-[15px]">
                1856
              </p>
            </div>
            <p className="bg-check px-3 py-2 text-[18px] font-bold text-[white] sm:text-[16px]">
              Gardening
            </p>
          </div>
        ) : (
          mapItem.map((item, index) => (
            <div
              className="card_item rounded-xl transition duration-500"
              key={item.id}
            >
              <div className="relative flex items-center justify-center bg-[#FBFBFB] sm:min-h-[200px] sm:rounded-[24px]  lg:min-h-[300px]">
                <img
                  src={item.image}
                  alt="card img"
                  className="max-h-full max-w-full object-fill"
                />
                <div className="cardbtn_group absolute right-2 top-2 z-[13] flex-col items-center justify-center gap-2 sm:bottom-auto sm:left-auto sm:right-1 sm:top-2">
                  <button
                    className="card_btn flex h-9 w-9 items-center justify-center sm:h-7 sm:w-7"
                    onClick={() => addToCart(flower)}
                  >
                    <svg
                      width="20.000000"
                      height="19.000000"
                      viewBox="0 0 20 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs />
                      <path
                        className="hoverable"
                        id="Vector"
                        d="M14.29 15.87L8.24 15.87C5.65 15.87 3.55 13.77 3.55 11.18L3.55 6.38C3.55 3.98 2.35 1.75 0.35 0.43C-0.01 0.19 -0.11 -0.29 0.12 -0.65C0.36 -1.01 0.85 -1.11 1.21 -0.87C2.35 -0.12 3.28 0.88 3.94 2.02C4.09 2.18 5.24 3.41 7.14 3.41L16.14 3.41C18.59 3.36 20.51 5.83 19.87 8.2L18.83 12.32C18.31 14.41 16.44 15.87 14.29 15.87ZM4.91 4.53C5.04 5.13 5.11 5.75 5.11 6.38L5.11 11.18C5.11 12.91 6.51 14.31 8.24 14.31L14.29 14.31C15.72 14.31 16.97 13.34 17.32 11.94L18.35 7.82C18.74 6.41 17.59 4.95 16.14 4.97L7.14 4.97C6.28 4.97 5.54 4.79 4.91 4.53ZM7.85 18.02C7.85 17.48 7.41 17.04 6.87 17.04C5.57 17.09 5.57 18.94 6.87 18.99C7.41 18.99 7.85 18.56 7.85 18.02ZM15.62 18.02C15.62 17.48 15.18 17.04 14.64 17.04C13.35 17.09 13.35 18.94 14.64 18.99C15.18 18.99 15.62 18.56 15.62 18.02ZM16.92 7.32C16.92 6.88 16.57 6.54 16.14 6.54L7.45 6.54C6.42 6.58 6.42 8.06 7.45 8.1L16.14 8.1C16.57 8.1 16.92 7.75 16.92 7.32Z"
                        fill="#3D3D3D"
                        fillOpacity="1.000000"
                        fillRule="nonzero"
                      />
                    </svg>
                  </button>
                  <NavLink to={`shop/${item.id}`}>
                    <button className="card_btn flex h-9 w-9 items-center justify-center sm:hidden sm:h-7">
                      <svg
                        width="20.000000"
                        height="20.000000"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                      >
                        <defs />
                        <path
                          className="hoverable"
                          id="Vector"
                          d="M14.56 16C10.57 19.18 4.98 18.3 2.02 14.65C-0.83 11.12 -0.65 6.04 2.44 2.82C5.64 -0.51 10.68 -0.95 14.32 1.78C15.63 2.76 16.61 4 17.24 5.5C17.88 7.02 18.07 8.59 17.85 10.22C17.63 11.83 16.99 13.27 15.94 14.62C16.02 14.67 16.11 14.71 16.18 14.78C17.33 15.93 18.48 17.08 19.63 18.23C19.91 18.5 20.04 18.82 19.96 19.2C19.8 19.96 18.9 20.25 18.32 19.73C18.04 19.49 17.79 19.22 17.54 18.96C16.59 18.01 15.64 17.06 14.69 16.12C14.65 16.08 14.61 16.04 14.56 16ZM15.95 8.98C15.96 5.12 12.84 2 8.97 2C5.12 1.99 2 5.09 1.98 8.94C1.97 12.81 5.08 15.94 8.96 15.96C12.8 15.98 15.94 12.84 15.95 8.98Z"
                          fill="#3D3D3D"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                      </svg>
                    </button>
                  </NavLink>
                  <IconButton
                    aria-label="delete"
                    onClick={() => deleteWish(item.id)}
                  >
                    <svg
                      width="24.000000"
                      height="24.000000"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      xmlnsXlink="http://www.w3.org/1999/xlink"
                    >
                      <defs />
                      <rect
                        id="Iconly/Curved/Delete"
                        width="24.000000"
                        height="24.000000"
                        fillOpacity="0"
                      />
                      <path
                        id="Stroke 1"
                        d="M18.88 9.55C18.88 17.57 20.04 21.19 12.27 21.19C4.51 21.19 5.69 17.57 5.69 9.55"
                        stroke="red"
                        strokeOpacity="1.000000"
                        strokeWidth="1.500000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <path
                        id="Stroke 3"
                        d="M20.36 6.47L4.21 6.47"
                        stroke="red"
                        strokeOpacity="1.000000"
                        strokeWidth="1.500000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                      <path
                        id="Stroke 5"
                        d="M15.71 6.47C15.71 6.47 16.24 2.71 12.28 2.71C8.33 2.71 8.86 6.47 8.86 6.47"
                        stroke="red"
                        strokeOpacity="1.000000"
                        strokeWidth="1.500000"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      />
                    </svg>
                  </IconButton>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <p className="py-3 text-[16px] sm:pb-1 sm:pt-2 sm:text-[15px]">
                  {item.name}
                </p>
                <p className="py-3 text-[16px] sm:pb-1 sm:pt-2 sm:text-[15px]">
                  {item.date}
                </p>
              </div>
              <p className="bg-check px-3 py-2 text-[18px] font-bold text-[white] sm:text-[16px]">
                {item.category}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Wishlist;

import { IconButton, Button } from "@mui/material";

const Account = () => {
  return (
    <form>
      <h3 className="mb-5 text-[16px] font-medium">Personal Information</h3>
      <div>
        <div className="mb-8 grid grid-cols-2 gap-x-5 gap-y-8">
          <label className="text-[15px]">
            First Name <span className="text-[22px] text-[#F03800]">*</span>
            <input
              type="text"
              className="mt-2 w-full border border-[#EAEAEA] p-3 outline-none"
              required
            />
          </label>
          <label className="text-[15px]">
            Last Name <span className="text-[22px] text-[#F03800]">*</span>
            <input
              type="text"
              className="mt-2 w-full border border-[#EAEAEA] p-3 outline-none"
              required
            />
          </label>
          <label className="text-[15px]">
            Email address <span className="text-[22px] text-[#F03800]">*</span>
            <input
              type="email"
              className="mt-2 w-full border border-[#EAEAEA] p-3 outline-none"
              required
            />
          </label>
          <label>
            Phone Number <span className="text-[22px] text-[#F03800]">*</span>
            <div className="mt-2 flex items-center gap-3">
              <select
                name="number"
                required
                className="block border border-[#EAEAEA] p-[9px] outline-none"
              >
                <option value="1">+966</option>
                <option value="2">+998</option>
                <option value="3">+046</option>
                <option value="4">+210</option>
              </select>
              <input
                type="text"
                className="w-full border border-[#EAEAEA] p-3 outline-none"
                required
              />
            </div>
          </label>
          <label className="text-[15px]">
            Username <span className="text-[22px] text-[#F03800]">*</span>
            <input
              type="text"
              className="mt-2 w-full border border-[#EAEAEA] p-3 outline-none"
              required
            />
          </label>
          <div>
            <h4 className="mb-2 text-[15px]">Photo</h4>
            <div className="flex items-center gap-6">
              <IconButton
                aria-label="unload"
                sx={{
                  padding: "13px",
                  borderRadius: "50%",
                  border: "1px solid #EAEAEA",
                  backgroundColor: "#FBFBFB",
                }}
              >
                <svg
                  width="24.000000"
                  height="24.000000"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <desc>Created with Pixso.</desc>
                  <defs />
                  <rect
                    id="Iconly/Curved/Image 2"
                    width="24.000000"
                    height="24.000000"
                    fill="#FFFFFF"
                    fillOpacity="0"
                  />
                  <path
                    id="Stroke 1"
                    d="M12 21.25C18.93 21.25 21.25 18.93 21.25 12C21.25 5.06 18.93 2.75 12 2.75C5.06 2.75 2.75 5.06 2.75 12C2.75 18.93 5.06 21.25 12 21.25Z"
                    stroke="#46A358"
                    strokeOpacity="1.000000"
                    strokeWidth="1.500000"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Stroke 3"
                    d="M8.83 10.54C7.86 10.54 7.07 9.75 7.07 8.78C7.07 7.81 7.86 7.02 8.83 7.02C9.81 7.02 10.59 7.81 10.59 8.78C10.59 9.75 9.81 10.54 8.83 10.54Z"
                    stroke="#46A358"
                    strokeOpacity="1.000000"
                    strokeWidth="1.500000"
                    strokeLinejoin="round"
                  />
                  <path
                    id="Stroke 5"
                    d="M21.12 14.66C20.23 13.76 18.99 11.92 16.7 11.92C14.41 11.92 14.36 15.96 12.02 15.96C9.69 15.96 8.75 14.59 7.22 15.31C5.7 16.02 4.46 18.87 4.46 18.87"
                    stroke="#46A358"
                    strokeOpacity="1.000000"
                    strokeWidth="1.500000"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </IconButton>
              <Button
                variant="contained"
                sx={{
                  borderRadius: "3px",
                  backgroundColor: "#46A358",
                  textTransform: "none",
                  paddingY: "12px",
                  "&:hover": {
                    backgroundColor: "#46A358",
                  },
                }}
              >
                <span className="font-bold text-[#fff]">Change</span>
              </Button>
              <Button
                variant="text"
                color="success"
                sx={{
                  textTransform: "none",
                  paddingY: "10px",
                  fontWeight: "700",
                  color: "#3d3d3d",
                }}
              >
                Remove
              </Button>
            </div>
          </div>
        </div>
        <h3 className="mb-5 text-[16px] font-medium">Password change</h3>
        <div className="grid grid-cols-2 gap-x-5 gap-y-8">
          <label className="col-span-1 text-[15px]">
            Current password
            <div className="mt-2 flex justify-between gap-3 border border-[#EAEAEA] p-3">
              <input
                type="password"
                minLength="8"
                className=" w-full  outline-none"
                required
              />
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.13363 13.0145C7.97363 13.0145 7.81363 12.9537 7.69196 12.8312C7.07696 12.217 6.73779 11.4003 6.73779 10.532C6.73779 8.73199 8.20113 7.26782 9.99946 7.26782C10.8645 7.26782 11.7045 7.61699 12.3036 8.22616C12.5453 8.47282 12.5428 8.86782 12.2961 9.10949C12.0503 9.35282 11.6553 9.34866 11.4128 9.10366C11.047 8.73116 10.532 8.51782 9.99946 8.51782C8.89029 8.51782 7.98779 9.42116 7.98779 10.532C7.98779 11.0662 8.19696 11.5695 8.57529 11.9478C8.81946 12.192 8.81946 12.587 8.57613 12.8312C8.45363 12.9537 8.29363 13.0145 8.13363 13.0145Z"
                    fill="#727272"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.4725 13.7428C10.1767 13.7428 9.91332 13.5312 9.85832 13.2295C9.79665 12.8903 10.0217 12.5645 10.3617 12.5028C11.1783 12.3545 11.825 11.7062 11.9717 10.8887C12.0333 10.5495 12.3583 10.3262 12.6975 10.3845C13.0375 10.4453 13.2633 10.7703 13.2025 11.1103C12.9633 12.4378 11.9117 13.4912 10.585 13.7328C10.5475 13.7395 10.5092 13.7428 10.4725 13.7428Z"
                    fill="#727272"
                  />
                  <mask
                    id="mask0_9_1591"
                    maskUnits="userSpaceOnUse"
                    x="1"
                    y="3"
                    width="15"
                    height="13"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.6665 3.85376H15.0717V15.6022H1.6665V3.85376Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_9_1591)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.54525 15.6022C5.41025 15.6022 5.27442 15.558 5.15942 15.4689C3.75025 14.3622 2.55942 12.7397 1.71775 10.778C1.64942 10.6197 1.64942 10.4414 1.71775 10.2839C2.56859 8.31387 3.76692 6.68303 5.18359 5.56887C8.07192 3.28303 11.9169 3.27553 14.8344 5.58553C15.1053 5.7997 15.1511 6.19303 14.9369 6.46387C14.7219 6.73303 14.3303 6.78053 14.0586 6.56553C11.5869 4.60887 8.40275 4.61553 5.95775 6.55053C4.76109 7.4922 3.73359 8.86387 2.97525 10.5322C3.72609 12.1905 4.74442 13.5539 5.93192 14.4855C6.20359 14.6989 6.25025 15.0922 6.03692 15.363C5.91359 15.5197 5.73025 15.6022 5.54525 15.6022Z"
                      fill="#727272"
                    />
                  </g>
                  <mask
                    id="mask1_9_1591"
                    maskUnits="userSpaceOnUse"
                    x="7"
                    y="7"
                    width="12"
                    height="11"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.26416 7.28442H18.3329V17.2413H7.26416V7.28442Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask1_9_1591)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.99969 17.2413C9.21885 17.2413 8.44219 17.1146 7.69219 16.8654C7.36469 16.7563 7.18719 16.4021 7.29635 16.0746C7.40552 15.7463 7.75802 15.5721 8.08719 15.6788C8.70969 15.8863 9.35302 15.9913 9.99969 15.9913C12.8564 15.9913 15.4672 13.9563 17.0247 10.5304C16.6447 9.69793 16.2022 8.94376 15.7072 8.28543C15.4997 8.00959 15.5547 7.61709 15.8305 7.40959C16.1055 7.20209 16.498 7.25876 16.7055 7.53376C17.3089 8.33459 17.8389 9.26043 18.2814 10.2821C18.3505 10.4404 18.3505 10.6204 18.2814 10.7779C16.5347 14.8254 13.4389 17.2413 9.99969 17.2413Z"
                      fill="#727272"
                    />
                  </g>
                  <mask
                    id="mask2_9_1591"
                    maskUnits="userSpaceOnUse"
                    x="2"
                    y="3"
                    width="16"
                    height="15"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.80273 3.33374H17.1973V17.7279H2.80273V3.33374Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask2_9_1591)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.42753 17.7278C3.26753 17.7278 3.10753 17.667 2.98586 17.5445C2.74169 17.3003 2.74169 16.9053 2.98586 16.6611L16.1309 3.51613C16.375 3.27197 16.77 3.27197 17.0142 3.51613C17.2584 3.7603 17.2584 4.15613 17.0142 4.4003L3.86919 17.5445C3.74753 17.667 3.58753 17.7278 3.42753 17.7278Z"
                      fill="#727272"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </label>
          <div className="col-span-1"></div>
          <label className="col-span-1 text-[15px]">
            New password
            <div className="mt-2 flex justify-between gap-3 border border-[#EAEAEA] p-3">
              <input
                type="password"
                minLength="8"
                className=" w-full  outline-none"
                required
              />
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.13363 13.0145C7.97363 13.0145 7.81363 12.9537 7.69196 12.8312C7.07696 12.217 6.73779 11.4003 6.73779 10.532C6.73779 8.73199 8.20113 7.26782 9.99946 7.26782C10.8645 7.26782 11.7045 7.61699 12.3036 8.22616C12.5453 8.47282 12.5428 8.86782 12.2961 9.10949C12.0503 9.35282 11.6553 9.34866 11.4128 9.10366C11.047 8.73116 10.532 8.51782 9.99946 8.51782C8.89029 8.51782 7.98779 9.42116 7.98779 10.532C7.98779 11.0662 8.19696 11.5695 8.57529 11.9478C8.81946 12.192 8.81946 12.587 8.57613 12.8312C8.45363 12.9537 8.29363 13.0145 8.13363 13.0145Z"
                    fill="#727272"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.4725 13.7428C10.1767 13.7428 9.91332 13.5312 9.85832 13.2295C9.79665 12.8903 10.0217 12.5645 10.3617 12.5028C11.1783 12.3545 11.825 11.7062 11.9717 10.8887C12.0333 10.5495 12.3583 10.3262 12.6975 10.3845C13.0375 10.4453 13.2633 10.7703 13.2025 11.1103C12.9633 12.4378 11.9117 13.4912 10.585 13.7328C10.5475 13.7395 10.5092 13.7428 10.4725 13.7428Z"
                    fill="#727272"
                  />
                  <mask
                    id="mask0_9_1591"
                    maskUnits="userSpaceOnUse"
                    x="1"
                    y="3"
                    width="15"
                    height="13"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.6665 3.85376H15.0717V15.6022H1.6665V3.85376Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_9_1591)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.54525 15.6022C5.41025 15.6022 5.27442 15.558 5.15942 15.4689C3.75025 14.3622 2.55942 12.7397 1.71775 10.778C1.64942 10.6197 1.64942 10.4414 1.71775 10.2839C2.56859 8.31387 3.76692 6.68303 5.18359 5.56887C8.07192 3.28303 11.9169 3.27553 14.8344 5.58553C15.1053 5.7997 15.1511 6.19303 14.9369 6.46387C14.7219 6.73303 14.3303 6.78053 14.0586 6.56553C11.5869 4.60887 8.40275 4.61553 5.95775 6.55053C4.76109 7.4922 3.73359 8.86387 2.97525 10.5322C3.72609 12.1905 4.74442 13.5539 5.93192 14.4855C6.20359 14.6989 6.25025 15.0922 6.03692 15.363C5.91359 15.5197 5.73025 15.6022 5.54525 15.6022Z"
                      fill="#727272"
                    />
                  </g>
                  <mask
                    id="mask1_9_1591"
                    maskUnits="userSpaceOnUse"
                    x="7"
                    y="7"
                    width="12"
                    height="11"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.26416 7.28442H18.3329V17.2413H7.26416V7.28442Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask1_9_1591)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.99969 17.2413C9.21885 17.2413 8.44219 17.1146 7.69219 16.8654C7.36469 16.7563 7.18719 16.4021 7.29635 16.0746C7.40552 15.7463 7.75802 15.5721 8.08719 15.6788C8.70969 15.8863 9.35302 15.9913 9.99969 15.9913C12.8564 15.9913 15.4672 13.9563 17.0247 10.5304C16.6447 9.69793 16.2022 8.94376 15.7072 8.28543C15.4997 8.00959 15.5547 7.61709 15.8305 7.40959C16.1055 7.20209 16.498 7.25876 16.7055 7.53376C17.3089 8.33459 17.8389 9.26043 18.2814 10.2821C18.3505 10.4404 18.3505 10.6204 18.2814 10.7779C16.5347 14.8254 13.4389 17.2413 9.99969 17.2413Z"
                      fill="#727272"
                    />
                  </g>
                  <mask
                    id="mask2_9_1591"
                    maskUnits="userSpaceOnUse"
                    x="2"
                    y="3"
                    width="16"
                    height="15"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.80273 3.33374H17.1973V17.7279H2.80273V3.33374Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask2_9_1591)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.42753 17.7278C3.26753 17.7278 3.10753 17.667 2.98586 17.5445C2.74169 17.3003 2.74169 16.9053 2.98586 16.6611L16.1309 3.51613C16.375 3.27197 16.77 3.27197 17.0142 3.51613C17.2584 3.7603 17.2584 4.15613 17.0142 4.4003L3.86919 17.5445C3.74753 17.667 3.58753 17.7278 3.42753 17.7278Z"
                      fill="#727272"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </label>
          <div className="col-span-1"></div>
          <label className="col-span-1 text-[15px]">
            Confirm new password
            <div className="mt-2 flex justify-between gap-3 border border-[#EAEAEA] p-3">
              <input
                type="password"
                minLength="8"
                className=" w-full  outline-none"
                required
              />
              <button>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.13363 13.0145C7.97363 13.0145 7.81363 12.9537 7.69196 12.8312C7.07696 12.217 6.73779 11.4003 6.73779 10.532C6.73779 8.73199 8.20113 7.26782 9.99946 7.26782C10.8645 7.26782 11.7045 7.61699 12.3036 8.22616C12.5453 8.47282 12.5428 8.86782 12.2961 9.10949C12.0503 9.35282 11.6553 9.34866 11.4128 9.10366C11.047 8.73116 10.532 8.51782 9.99946 8.51782C8.89029 8.51782 7.98779 9.42116 7.98779 10.532C7.98779 11.0662 8.19696 11.5695 8.57529 11.9478C8.81946 12.192 8.81946 12.587 8.57613 12.8312C8.45363 12.9537 8.29363 13.0145 8.13363 13.0145Z"
                    fill="#727272"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M10.4725 13.7428C10.1767 13.7428 9.91332 13.5312 9.85832 13.2295C9.79665 12.8903 10.0217 12.5645 10.3617 12.5028C11.1783 12.3545 11.825 11.7062 11.9717 10.8887C12.0333 10.5495 12.3583 10.3262 12.6975 10.3845C13.0375 10.4453 13.2633 10.7703 13.2025 11.1103C12.9633 12.4378 11.9117 13.4912 10.585 13.7328C10.5475 13.7395 10.5092 13.7428 10.4725 13.7428Z"
                    fill="#727272"
                  />
                  <mask
                    id="mask0_9_1591"
                    maskUnits="userSpaceOnUse"
                    x="1"
                    y="3"
                    width="15"
                    height="13"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M1.6665 3.85376H15.0717V15.6022H1.6665V3.85376Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask0_9_1591)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5.54525 15.6022C5.41025 15.6022 5.27442 15.558 5.15942 15.4689C3.75025 14.3622 2.55942 12.7397 1.71775 10.778C1.64942 10.6197 1.64942 10.4414 1.71775 10.2839C2.56859 8.31387 3.76692 6.68303 5.18359 5.56887C8.07192 3.28303 11.9169 3.27553 14.8344 5.58553C15.1053 5.7997 15.1511 6.19303 14.9369 6.46387C14.7219 6.73303 14.3303 6.78053 14.0586 6.56553C11.5869 4.60887 8.40275 4.61553 5.95775 6.55053C4.76109 7.4922 3.73359 8.86387 2.97525 10.5322C3.72609 12.1905 4.74442 13.5539 5.93192 14.4855C6.20359 14.6989 6.25025 15.0922 6.03692 15.363C5.91359 15.5197 5.73025 15.6022 5.54525 15.6022Z"
                      fill="#727272"
                    />
                  </g>
                  <mask
                    id="mask1_9_1591"
                    maskUnits="userSpaceOnUse"
                    x="7"
                    y="7"
                    width="12"
                    height="11"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M7.26416 7.28442H18.3329V17.2413H7.26416V7.28442Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask1_9_1591)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.99969 17.2413C9.21885 17.2413 8.44219 17.1146 7.69219 16.8654C7.36469 16.7563 7.18719 16.4021 7.29635 16.0746C7.40552 15.7463 7.75802 15.5721 8.08719 15.6788C8.70969 15.8863 9.35302 15.9913 9.99969 15.9913C12.8564 15.9913 15.4672 13.9563 17.0247 10.5304C16.6447 9.69793 16.2022 8.94376 15.7072 8.28543C15.4997 8.00959 15.5547 7.61709 15.8305 7.40959C16.1055 7.20209 16.498 7.25876 16.7055 7.53376C17.3089 8.33459 17.8389 9.26043 18.2814 10.2821C18.3505 10.4404 18.3505 10.6204 18.2814 10.7779C16.5347 14.8254 13.4389 17.2413 9.99969 17.2413Z"
                      fill="#727272"
                    />
                  </g>
                  <mask
                    id="mask2_9_1591"
                    maskUnits="userSpaceOnUse"
                    x="2"
                    y="3"
                    width="16"
                    height="15"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.80273 3.33374H17.1973V17.7279H2.80273V3.33374Z"
                      fill="white"
                    />
                  </mask>
                  <g mask="url(#mask2_9_1591)">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M3.42753 17.7278C3.26753 17.7278 3.10753 17.667 2.98586 17.5445C2.74169 17.3003 2.74169 16.9053 2.98586 16.6611L16.1309 3.51613C16.375 3.27197 16.77 3.27197 17.0142 3.51613C17.2584 3.7603 17.2584 4.15613 17.0142 4.4003L3.86919 17.5445C3.74753 17.667 3.58753 17.7278 3.42753 17.7278Z"
                      fill="#727272"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </label>
          <div className="col-span-1"></div>
        </div>
        <Button
          variant="contained"
          sx={{
            borderRadius: "3px",
            backgroundColor: "#46A358",
            textTransform: "none",
            paddingY: "12px",
            marginTop: "50px",
            "&:hover": {
              backgroundColor: "#46A358",
            },
          }}
        >
          <span className="font-bold text-[#fff]">Save Change</span>
        </Button>
      </div>
    </form>
  );
};

export default Account;

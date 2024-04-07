import { Button } from "@mui/material";
import { useContext, useState } from "react";
import { UseAllContext } from "../App";

const Login = () => {
  const { showPassword, setShowPassword, setHidden, hidden } =
    useContext(UseAllContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    const userData = JSON.parse(localStorage.getItem(email));
    if (userData && userData.password === password) {
      localStorage.setItem("activeLogin", JSON.stringify(userData));
      alert("Login successful!");
      setHidden(!hidden);
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <form className="mb-4 mt-3" onSubmit={handleLogin}>
      <p className="mb-[14px] text-[13px]">
        Enter your username and password to login.
      </p>
      <input
        type="email"
        placeholder="almamun_uxui@outlook.com"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-[14px] w-full rounded-[5px] border border-[#EAEAEA] px-[14px] py-3 outline-none hover:border-check"
      />
      <div className="mb-[14px] flex items-center justify-between gap-3 rounded-[5px] border border-[#EAEAEA] px-[14px] py-[10px] hover:border-check">
        <input
          type={showPassword ? "password" : "text"}
          minLength="8"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          className="flex-grow  tracking-[1px] outline-none"
          placeholder="Password"
        />
        <button
          className="card_btn"
          onClick={(event) => (
            event.preventDefault(),
            event.stopPropagation(),
            setShowPassword(!showPassword)
          )}
        >
          {showPassword ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                className="hoverable"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.13363 13.0145C7.97363 13.0145 7.81363 12.9537 7.69196 12.8312C7.07696 12.217 6.73779 11.4003 6.73779 10.532C6.73779 8.73199 8.20113 7.26782 9.99946 7.26782C10.8645 7.26782 11.7045 7.61699 12.3036 8.22616C12.5453 8.47282 12.5428 8.86782 12.2961 9.10949C12.0503 9.35282 11.6553 9.34866 11.4128 9.10366C11.047 8.73116 10.532 8.51782 9.99946 8.51782C8.89029 8.51782 7.98779 9.42116 7.98779 10.532C7.98779 11.0662 8.19696 11.5695 8.57529 11.9478C8.81946 12.192 8.81946 12.587 8.57613 12.8312C8.45363 12.9537 8.29363 13.0145 8.13363 13.0145Z"
                fill="#727272"
              />
              <path
                className="hoverable"
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
                  className="hoverable"
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
                  className="hoverable"
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
                  className="hoverable"
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M3.42753 17.7278C3.26753 17.7278 3.10753 17.667 2.98586 17.5445C2.74169 17.3003 2.74169 16.9053 2.98586 16.6611L16.1309 3.51613C16.375 3.27197 16.77 3.27197 17.0142 3.51613C17.2584 3.7603 17.2584 4.15613 17.0142 4.4003L3.86919 17.5445C3.74753 17.667 3.58753 17.7278 3.42753 17.7278Z"
                  fill="#727272"
                />
              </g>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="Outline"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              className="hoverable"
              fill="#727272"
            >
              <path d="M23.271,9.419C21.72,6.893,18.192,2.655,12,2.655S2.28,6.893.729,9.419a4.908,4.908,0,0,0,0,5.162C2.28,17.107,5.808,21.345,12,21.345s9.72-4.238,11.271-6.764A4.908,4.908,0,0,0,23.271,9.419Zm-1.705,4.115C20.234,15.7,17.219,19.345,12,19.345S3.766,15.7,2.434,13.534a2.918,2.918,0,0,1,0-3.068C3.766,8.3,6.781,4.655,12,4.655s8.234,3.641,9.566,5.811A2.918,2.918,0,0,1,21.566,13.534Z" />
              <path d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z" />
            </svg>
          )}
        </button>
      </div>
      <p className="mb-6 text-right text-check">Forgot Password?</p>
      <Button
        type="submit"
        variant="contained"
        color="success"
        sx={{
          borderRadius: "5px",
          backgroundColor: "#46A358",
          textTransform: "none",
          width: "100%",
          paddingY: "14px",
          "&:hover": {
            backgroundColor: "#46A358",
          },
        }}
      >
        <span className="text-[16px] font-bold text-[#fff]">Login</span>
      </Button>
    </form>
  );
};

export default Login;

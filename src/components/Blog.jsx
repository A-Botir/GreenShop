import Pot1 from "../assets/images/photos/main/blog/01.png";
import Pot2 from "../assets/images/photos/main/blog/02.png";
import Pot3 from "../assets/images/photos/main/blog/03.png";
import Pot4 from "../assets/images/photos/main/blog/04.png";

const Blog = () => {
  return (
    <section>
      <h2 className="mb-4 text-center text-[30px] font-bold sm:mb-2 sm:text-[20px] sm:leading-6">
        Our Blog Posts
      </h2>
      <p className="mb-9 text-center text-oridinary sm:mb-5 sm:text-[13px]">
        We are an online plant shop offering a wide range of cheap and trendy
        plants.
      </p>
      <div className="grid grid-cols-4 gap-11 sm:grid-cols-2 sm:gap-5 md:grid-cols-2">
        <div>
          <img src={Pot1} alt="blog img" className="w-full object-fill" />
          <div className="bg-grey px-[15px] pb-3 pt-2 sm:px-[10px] sm:pb-2 sm:pt-1">
            <p className="font-medium text-check sm:text-[13px]">
              September 12 I Read in 6 minutes
            </p>
            <h4 className="mb-1 text-[20px] font-bold leading-[26px] sm:text-[16px] sm:leading-5">
              Cactus & Succulent Care Tips
            </h4>
            <p className="mb-2 leading-[22px] text-oridinary sm:mb-1 sm:text-[13px] sm:leading-[18px]">
              Cacti are succulents are easy care plants for any home or patio.
            </p>
            <button className="flex items-center gap-2 font-medium hover:text-check">
              Read More
              <svg
                width="16.000000"
                height="16.000000"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs />
                <rect
                  id="Iconly/Light-Outline/Arrow - Right"
                  width="16.000000"
                  height="16.000000"
                  fill="#FFFFFF"
                  fillOpacity="0"
                />
                <path
                  id="Stroke 1"
                  d="M2.66 7.81C2.66 7.56 2.85 7.35 3.09 7.32L3.16 7.31L13.16 7.31C13.44 7.31 13.66 7.54 13.66 7.81C13.66 8.07 13.47 8.27 13.23 8.31L13.16 8.31L3.16 8.31C2.89 8.31 2.66 8.09 2.66 7.81Z"
                  fill="#3D3D3D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Stroke 3"
                  d="M8.78 4.15C8.58 3.96 8.58 3.64 8.77 3.44C8.95 3.27 9.23 3.25 9.43 3.39L9.48 3.44L13.51 7.46C13.69 7.64 13.71 7.91 13.56 8.11L13.51 8.17L9.48 12.18C9.29 12.38 8.97 12.38 8.77 12.18C8.6 12 8.58 11.73 8.73 11.53L8.78 11.47L12.45 7.81L8.78 4.15Z"
                  fill="#3D3D3D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <img src={Pot2} alt="blog img" className="w-full object-fill" />
          <div className="bg-grey px-[15px] pb-3 pt-2 sm:px-[10px] sm:pb-2 sm:pt-1">
            <p className="font-medium text-check sm:text-[13px]">
              September 13 I Read in 2 minutes
            </p>
            <h4 className="mb-1 text-[20px] font-bold leading-[26px] sm:text-[16px] sm:leading-5">
              Top 10 Succulents for Your Home
            </h4>
            <p className="mb-2 leading-[22px] text-oridinary sm:mb-1 sm:text-[13px] sm:leading-[18px]">
              Best in hanging baskets. Prefers medium to high light.
            </p>
            <button className="flex items-center gap-2 font-medium hover:text-check">
              Read More
              <svg
                width="16.000000"
                height="16.000000"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs />
                <rect
                  id="Iconly/Light-Outline/Arrow - Right"
                  width="16.000000"
                  height="16.000000"
                  fill="#FFFFFF"
                  fillOpacity="0"
                />
                <path
                  id="Stroke 1"
                  d="M2.66 7.81C2.66 7.56 2.85 7.35 3.09 7.32L3.16 7.31L13.16 7.31C13.44 7.31 13.66 7.54 13.66 7.81C13.66 8.07 13.47 8.27 13.23 8.31L13.16 8.31L3.16 8.31C2.89 8.31 2.66 8.09 2.66 7.81Z"
                  fill="#3D3D3D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Stroke 3"
                  d="M8.78 4.15C8.58 3.96 8.58 3.64 8.77 3.44C8.95 3.27 9.23 3.25 9.43 3.39L9.48 3.44L13.51 7.46C13.69 7.64 13.71 7.91 13.56 8.11L13.51 8.17L9.48 12.18C9.29 12.38 8.97 12.38 8.77 12.18C8.6 12 8.58 11.73 8.73 11.53L8.78 11.47L12.45 7.81L8.78 4.15Z"
                  fill="#3D3D3D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <img src={Pot3} alt="blog img" className="w-full object-fill" />
          <div className="bg-grey px-[15px] pb-3 pt-2 sm:px-[10px] sm:pb-2 sm:pt-1">
            <p className="font-medium text-check sm:text-[13px]">
              September 15 I Read in 3 minutes
            </p>
            <h4 className="mb-1 text-[20px] font-bold leading-[26px] sm:text-[16px] sm:leading-5">
              Cactus & Succulent Care Tips
            </h4>
            <p className="mb-2 leading-[22px] text-oridinary sm:mb-1 sm:text-[13px] sm:leading-[18px]">
              Cacti and succulents thrive in containers and because most are..
            </p>
            <button className="flex items-center gap-2 font-medium hover:text-check">
              Read More
              <svg
                width="16.000000"
                height="16.000000"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs />
                <rect
                  id="Iconly/Light-Outline/Arrow - Right"
                  width="16.000000"
                  height="16.000000"
                  fill="#FFFFFF"
                  fillOpacity="0"
                />
                <path
                  id="Stroke 1"
                  d="M2.66 7.81C2.66 7.56 2.85 7.35 3.09 7.32L3.16 7.31L13.16 7.31C13.44 7.31 13.66 7.54 13.66 7.81C13.66 8.07 13.47 8.27 13.23 8.31L13.16 8.31L3.16 8.31C2.89 8.31 2.66 8.09 2.66 7.81Z"
                  fill="#3D3D3D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Stroke 3"
                  d="M8.78 4.15C8.58 3.96 8.58 3.64 8.77 3.44C8.95 3.27 9.23 3.25 9.43 3.39L9.48 3.44L13.51 7.46C13.69 7.64 13.71 7.91 13.56 8.11L13.51 8.17L9.48 12.18C9.29 12.38 8.97 12.38 8.77 12.18C8.6 12 8.58 11.73 8.73 11.53L8.78 11.47L12.45 7.81L8.78 4.15Z"
                  fill="#3D3D3D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
              </svg>
            </button>
          </div>
        </div>
        <div>
          <img src={Pot4} alt="blog img" className="w-full object-fill" />
          <div className="bg-grey px-[15px] pb-3 pt-2 sm:px-[10px] sm:pb-2 sm:pt-1">
            <p className="font-medium text-check sm:text-[13px]">
              September 15 I Read in 2 minutes
            </p>
            <h4 className="mb-1 text-[20px] font-bold leading-[26px] sm:text-[16px] sm:leading-5">
              Best Houseplants Room by Room
            </h4>
            <p className="mb-2 leading-[22px] text-oridinary sm:mb-1 sm:text-[13px] sm:leading-[18px]">
              The benefits of houseplants are endless. In addition to..
            </p>
            <button className="flex items-center gap-2 font-medium hover:text-check">
              Read More
              <svg
                width="16.000000"
                height="16.000000"
                viewBox="0 0 16 16"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs />
                <rect
                  id="Iconly/Light-Outline/Arrow - Right"
                  width="16.000000"
                  height="16.000000"
                  fill="#FFFFFF"
                  fillOpacity="0"
                />
                <path
                  id="Stroke 1"
                  d="M2.66 7.81C2.66 7.56 2.85 7.35 3.09 7.32L3.16 7.31L13.16 7.31C13.44 7.31 13.66 7.54 13.66 7.81C13.66 8.07 13.47 8.27 13.23 8.31L13.16 8.31L3.16 8.31C2.89 8.31 2.66 8.09 2.66 7.81Z"
                  fill="#3D3D3D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
                <path
                  id="Stroke 3"
                  d="M8.78 4.15C8.58 3.96 8.58 3.64 8.77 3.44C8.95 3.27 9.23 3.25 9.43 3.39L9.48 3.44L13.51 7.46C13.69 7.64 13.71 7.91 13.56 8.11L13.51 8.17L9.48 12.18C9.29 12.38 8.97 12.38 8.77 12.18C8.6 12 8.58 11.73 8.73 11.53L8.78 11.47L12.45 7.81L8.78 4.15Z"
                  fill="#3D3D3D"
                  fillOpacity="1.000000"
                  fillRule="nonzero"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;

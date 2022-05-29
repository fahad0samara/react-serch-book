import React from "react";
import img from '../img/3.png'
const Home = () => {
  return (
    <div>
      <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
        <div className="w-full lg:w-1/2">
          <div className="lg:max-w-lg">
            <h1
            data-aos="fade-up"
            className="text-5xl  tracking-wide  font-black ">
            Available For Your
            </h1>

            <div
            data-aos="fade-up-right"
            className="mt-8 space-y-5">
              <p className="flex items-center -mx-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-[#b3fcf1]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span
                data-aos="fade-left"
                className="mx-2">Clean and Simple Layout</span>
              </p>

              <p className="flex items-center -mx-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-[#b3fcf1]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2">Just Copy Paste your book</span>
              </p>

              <p className="flex items-center -mx-2 ">
                <svg
                data-aos="fade-left"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mx-2 text-[#b3fcf1]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>

                <span className="mx-2">Easy to Use</span>
              </p>
            </div>
          </div>

         
        </div>

        <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
          <img
          data-aos="fade-left"
            className="object-cover  w-1/2  mx-auto rounded-md lg:max-w-2xl"
          src={img}
            alt="glasses photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

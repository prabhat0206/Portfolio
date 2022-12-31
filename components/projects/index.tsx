import React from "react";

const Projects = () => {
  return (
    <div className="flex h-screen bg-[#1a1a1a] text-white flex-col">
      <div className="flex justify-center h-[50vh]">
        <div className="flex w-10/12 bg-project bg-no-repeat bg-cover">
          <div className="flex w-full h-full backdrop-opacity-10 backdrop-invert bg-black/40">
            <div className="flex flex-col flex-1 justify-center items-center">
              <p className="flex text-5xl w-11/12 justify-center font-semibold">
                Discover My Amazing Project Here !
              </p>
              <p className="flex my-4">
                <span className="flex text-[#ffc400] text-md font-medium">
                  Code
                </span>{" "}
                <p className="flex pl-1">I build |</p>
              </p>
              <button className="flex w-32 bg-[#ffc400] text-black font-medium h-10 items-center justify-center rounded-sm my-5">
                Explore Now
              </button>
            </div>
            <div className="flex w-2/5">
              <img
                src="https://freepngimg.com/thumb/happy_person/4-2-happy-person-transparent.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-28 w-full my-4">
        <div className="flex w-9/12">
          <div className="flex flex-1 items-center justify-evenly">
            <p className="flex text-[#fac000] font-semibold text-3xl">10+</p>
            <p className="flex font-medium">Years of Experience</p>
          </div>
          <div className="flex flex-1 items-center justify-evenly">
            <p className="flex text-[#fac000] font-semibold text-3xl">114</p>
            <p className="flex font-medium">Projects</p>
          </div>
          <div className="flex flex-1 items-center justify-evenly">
            <p className="flex text-[#fac000] font-semibold text-3xl">142</p>
            <p className="flex font-medium">Happy Customers</p>
          </div>
          <div className="flex flex-1 items-center justify-evenly">
            <p className="flex text-[#fac000] font-semibold text-3xl">5+</p>
            <p className="flex font-medium">Awards</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1">
        <div className="flex font-semibold my-4 pl-4 text-lg">My Projects</div>
        <div className="flex w-full mx-3 my-6 justify-around h-full">
          <div className="flex pl-4 justify-around flex-col rounded-md bg-[#29282e] w-96">
            <div className="flex font-medium text-gray-300">Project Name</div>
            <div className="flex text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum do
            </div>
            <div className="flex font-medium text-[#ecb001]">See Now</div>
          </div>
          <div className="flex pl-4 justify-around flex-col rounded-md bg-[#29282e] w-96">
            <div className="flex font-medium text-gray-300">Project Name</div>
            <div className="flex text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum do
            </div>
            <div className="flex font-medium text-[#ecb001]">See Now</div>
          </div>
          <div className="flex pl-4 justify-around flex-col rounded-md bg-[#29282e] w-96">
            <div className="flex font-medium text-gray-300">Project Name</div>
            <div className="flex text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum do
            </div>
            <div className="flex font-medium text-[#ecb001]">See Now</div>
          </div>
          <div className="flex pl-4 justify-around flex-col rounded-md bg-[#29282e] w-96">
            <div className="flex font-medium text-gray-300">Project Name</div>
            <div className="flex text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum do
            </div>
            <div className="flex font-medium text-[#ecb001]">See Now</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

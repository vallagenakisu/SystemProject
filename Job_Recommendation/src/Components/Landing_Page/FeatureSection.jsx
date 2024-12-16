import React from "react";

const FeatureSection = () => {
  return (
    <div className="mt-10">
      <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Use our solution to manage your project and team.
      </h2>
      <h3 className="text-center text-xl font-extralight tracking-widest text-primaryfontcolor mt-2">
        We offer a wide range of features to help you manage your project and
        team.
      </h3>
      {/* Cards to show the features  */}
      <div className="mt-10 flex justify-center items-center">
       
        <div class="card w-80 h-auto bg-black rounded-2xl overflow-hidden relative transition-all duration-300 hover:shadow-lg hover:shadow-primaryfontcolor hover:translate-y-10">
          <div class="card-content p-4 relative z-10">
            <div class="flex items-center mb-4">
              
              <div>
                <h2
                  title="SuperApp"
                  class="text-2xl font-thin tracking-wider text-white text truncate text-center"
                >
                  For the JOBSEEKERS
                </h2>
                
              </div>
            </div>

            <div class="mb-4">
              <h3 class="text-xs font-semibold text-white/80 mb-2">
                Core Features
              </h3>
              <div class="flex flex-wrap -mx-1">
                <div class="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                  Explore Jobs
                </div>
                <div class="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                  Apply for Jobs
                </div>
                <div class="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                  Networking with Recruiters
                </div>
                <div class="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                  Dashboard Analytics
                </div>
              </div>
            </div>

            <div class="mb-4">
              <h3 class="text-xs font-semibold text-white/80 mb-2">
                Other Features
              </h3>
              <ul class="text-xs text-white/60 grid grid-cols-1 gap-1">
                <li class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    class="w-3 h-3 mr-1 text-white/70"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  <span title="Dark Mode" class="truncate">
                    Dark Mode
                  </span>
                </li>
                <li class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    class="w-3 h-3 mr-1 text-white/70"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  <span title="Custom Themes" class="truncate">
                    Customize Profile
                  </span>
                </li>
                <li class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    class="w-3 h-3 mr-1 text-white/70"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  <span title="Password Protection" class="truncate">
                    Password Protection
                  </span>
                </li>
                <li class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    class="w-3 h-3 mr-1 text-white/70"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  <span title="Data Export" class="truncate">
                    Task Planning and Management
                  </span>
                </li>
                <li class="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    fill="none"
                    class="w-3 h-3 mr-1 text-white/70"
                  >
                    <path
                      d="M5 13l4 4L19 7"
                      stroke-width="2"
                      stroke-linejoin="round"
                      stroke-linecap="round"
                    ></path>
                  </svg>
                  <span title="Widgets" class="truncate">
                    Widgets
                  </span>
                </li>
              </ul>
            </div>

           
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

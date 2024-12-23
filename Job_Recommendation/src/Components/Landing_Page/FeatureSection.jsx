import React from "react";

const FeatureSection = () => {
  return (
    <div className="mt-16">
      <h2 className="text-center text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Use our solution to manage your project and team.
      </h2>
      <h3 className="text-center text-xl font-extralight tracking-widest text-primaryfontcolor mt-2">
        We offer a wide range of features to help you manage your project and
        team.
      </h3>
      {/* Cards to show the features  */}
      <div className="mt-16 flex justify-center items-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {/* Card Component */}
          <div className="card max-w-sm w-full h-auto bg-black rounded-2xl overflow-hidden relative transition-all duration-300 hover:shadow-lg hover:shadow-primaryfontcolor hover:translate-y-10">
            <div className="card-content p-4 relative z-10">
              <div className="flex items-center mb-4">
                <h2
                  title="SuperApp"
                  className="text-2xl font-thin tracking-wider text-white truncate text-center"
                >
                  For the JOBSEEKERS
                </h2>
              </div>

              <div className="mb-4">
                <h3 className="text-xs font-semibold text-white/80 mb-2">
                  Core Features
                </h3>
                <div className="flex flex-wrap -mx-1">
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Explore Jobs
                  </div>
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Apply for Jobs
                  </div>
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Networking with Recruiters
                  </div>
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Dashboard Analytics
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-xs font-semibold text-white/80 mb-2">
                  Other Features
                </h3>
                <ul className="text-xs text-white/60 grid grid-cols-1 gap-1">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-3 h-3 mr-1 text-white/70"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span title="Dark Mode" className="truncate">
                      Dark Mode
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-3 h-3 mr-1 text-white/70"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span title="Customize Profile" className="truncate">
                      Customize Profile
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-3 h-3 mr-1 text-white/70"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span title="Task Planning" className="truncate">
                      Task Planning and Management
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Add additional cards by duplicating the structure */}

          <div className="card max-w-sm w-full h-auto bg-black rounded-2xl overflow-hidden relative transition-all duration-300 hover:shadow-lg hover:shadow-primaryfontcolor hover:translate-y-10">
            <div className="card-content p-4 relative z-10">
              <div className="flex items-center mb-4">
                <h2
                  title="SuperApp"
                  className="text-2xl font-thin tracking-wider text-white truncate text-center"
                >
                  For the ENTREPREUNERS
                </h2>
              </div>

              <div className="mb-4">
                <h3 className="text-xs font-semibold text-white/80 mb-2">
                  Core Features
                </h3>
                <div className="flex flex-wrap -mx-1">
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Explore Workers
                  </div>
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Post Jobs
                  </div>
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Networking with Recruiters
                  </div>
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Dashboard Analytics
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-xs font-semibold text-white/80 mb-2">
                  Other Features
                </h3>
                <ul className="text-xs text-white/60 grid grid-cols-1 gap-1">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-3 h-3 mr-1 text-white/70"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span title="Dark Mode" className="truncate">
                      Dark Mode
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-3 h-3 mr-1 text-white/70"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span title="Customize Profile" className="truncate">
                      Customize Profile
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-3 h-3 mr-1 text-white/70"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span title="Task Planning" className="truncate">
                      Task Planning and Management
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="card max-w-sm w-full h-auto bg-black rounded-2xl overflow-hidden relative transition-all duration-300 hover:shadow-lg hover:shadow-primaryfontcolor hover:translate-y-10">
            <div className="card-content p-4 relative z-10">
              <div className="flex items-center mb-4">
                <h2
                  title="SuperApp"
                  className="text-2xl font-thin tracking-wider text-white truncate text-center"
                >
                  For the PROJECT MANAGERS
                </h2>
              </div>

              <div className="mb-4">
                <h3 className="text-xs font-semibold text-white/80 mb-2">
                  Core Features
                </h3>
                <div className="flex flex-wrap -mx-1">
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Manage Projects
                  </div>
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Manage Teams
                  </div>
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Networking with Recruiters
                  </div>
                  <div className="px-2 py-1 m-0.5 bg-white/10 rounded-full text-xs font-medium text-white/70 shadow-sm border border-white/20 transition-all duration-300 hover:bg-white/20">
                    Project Analytics
                  </div>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-xs font-semibold text-white/80 mb-2">
                  Other Features
                </h3>
                <ul className="text-xs text-white/60 grid grid-cols-1 gap-1">
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-3 h-3 mr-1 text-white/70"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span title="Dark Mode" className="truncate">
                      Dark Mode
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-3 h-3 mr-1 text-white/70"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span title="Customize Profile" className="truncate">
                      Customize Profile
                    </span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      className="w-3 h-3 mr-1 text-white/70"
                    >
                      <path
                        d="M5 13l4 4L19 7"
                        strokeWidth="2"
                        strokeLinejoin="round"
                        strokeLinecap="round"
                      ></path>
                    </svg>
                    <span title="Task Planning" className="truncate">
                      Task Planning and Management
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureSection;

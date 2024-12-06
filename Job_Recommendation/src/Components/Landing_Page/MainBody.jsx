import React from "react";
import { useEffect } from "react";
import JobSearchImage1 from "../../assets/images/Job_Search_Image_1.png"; // Adjust the path based on your directory structure
import JobSearchImage2 from "../../assets/images/Job_Search_Image_2.png"; // Adjust the path based on your directory structure
import JobSearchImage3 from "../../assets/images/Job_Search_Image_3.png"; // Adjust the path based on your directory structure
import TextSectionJobSeeker from "./TextSectionJobSeeker";
import TextSectionJobGiver from "./TextSectionJobGiver";
import LookingForEmployee from "./LookingForEmployee";
import LookingForCompanies from "./LookingForCompanies";
const MainBody = () => {
  const images = [JobSearchImage1, JobSearchImage2, JobSearchImage3];
  const componentarray = [<TextSectionJobSeeker />, <TextSectionJobGiver />];

  const [currentIndex, setcurrentIndex] = React.useState(0);
  const [currentComponentIndex, setcurrentComponentIndex] = React.useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setcurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup the interval on component unmount
  }, [images.length]);

  useEffect(() => {
    const intervalforComponent = setInterval(() => {
      setcurrentComponentIndex((prevIndex) => (prevIndex === 0 ? 1 : 0));
      console.log(currentIndex);
    }, 5000);

    return () => clearInterval(intervalforComponent);
  }, [componentarray.length]);

  return (
    <>
      <div className="mt-32 ml-32 mr-32">
        <div className="flex items-start justify-between">
          {/* Image Section */}
          <div className="w-1/2 pr-4 relative">
            <img
              src={images[currentIndex]}
              alt="Job Search"
              className="w-[500px] h-[500px] object-cover rounded-lg shadow-md border-4 border-primarytextcolor animate-fade"
            />
          </div>

          {/* Text Section Rendering */}
          <div className="w-1/2 pl-4 mt-10 flex-col">
            {componentarray[currentComponentIndex]}
          </div>
          {/* Text Section Rendering ends here */}
        </div>

        {/* Looking for employee section */}
        <div className="mt-32 flex flex-col justify-center items-center">
          <LookingForEmployee />
        </div>


        {/* Looking For Companies */}
        <div className="mt-32 flex flex-col justify-center items-center">
          <LookingForCompanies />
        </div>
      </div>
    </>
  );
};

export default MainBody;

import React from "react";
import JobCard from "./JobCard";

const MainBody = ({addToShortListedJobs}) => {
  const jobs = [
    {
      postedTime: "Posted 2 hours ago",
      title: ".NET Developer Needed",
      description:
        "Looking for an experienced .NET Developer to join our team.",
      company: "Tech Solutions Inc.",
      location: "Remote",
      salary: "$60,000 - $80,000/year",
    },
    {
      postedTime: "Posted 5 hours ago",
      title: "Frontend Developer",
      description: "Expert in React and modern UI/UX practices is required.",
      company: "InnovateX",
      location: "San Francisco, CA",
      salary: "$70,000 - $90,000/year",
    },
    // Add more job data as needed
  ];

  return(
    <div>
      <div className="ml-96 mt-12 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
      {jobs.map((job, index) => (
        <JobCard
          key={index}
          postedTime={job.postedTime}
          title={job.title}
          description={job.description}
          company={job.company}
          location={job.location}
          salary={job.salary}
          onShortListed = {() => addToShortListedJobs(job.title)}
        />
      ))}
    </div>
    </div>
  );
  
  
};

export default MainBody;

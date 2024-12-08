import React, { useState } from "react";

const DashProfile = () => {
  const user = {
    name: "John Doe",
    bio: "A passionate software engineer and lifelong learner.",
    image: "https://via.placeholder.com/150",
  };

  // State to manage skills
  const [skills, setSkills] = useState([
    "React",
    "JavaScript",
    "HTML",
    "CSS",
    "Node.js",
  ]);
  const [newSkill, setNewSkill] = useState("");

  // State to manage CV
  const [cvFile, setCvFile] = useState(null);

  // Function to add a new skill
  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill]);
      setNewSkill("");
    }
  };

  // Function to remove a skill
  const removeSkill = (skill) => {
    setSkills(skills.filter((s) => s !== skill));
  };

  // Function to handle CV upload
  const handleCvUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setCvFile(file);
    }
  };

  // Function to remove the CV
  const removeCv = () => {
    setCvFile(null);
  };

  return (
    <div className="flex flex-col items-center justify-start h-full bg-dashboardbgcolor m-4 pb-10 rounded-lg p-6">
      {/* User Image */}
      <img
        src={user.image}
        alt="User Profile"
        className="w-40 h-40 rounded-full shadow-lg mb-4 mt-10"
      />

      {/* User Name */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-2 mt-4">
        {user.name}
      </h2>

      {/* User Bio */}
      <p className="text-gray-600 text-center max-w-md mt-5 mb-6">{user.bio}</p>

      {/* Skills Section */}
      <div className="w-full mt-6">
        <h3 className="text-xl font-bold mb-4 text-gray-800 text-center">
          Skills
        </h3>

        {/* Input to Add New Skill */}
        <div className="flex justify-center items-center mb-4 space-x-2">
          <input
            type="text"
            placeholder="Add a new skill"
            value={newSkill}
            onChange={(e) => setNewSkill(e.target.value)}
            className="border rounded-lg px-4 py-2 w-1/2"
          />
          <button
            onClick={addSkill}
            className="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow hover:bg-indigo-600"
          >
            Add
          </button>
        </div>

        {/* Skills List */}
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="relative bg-indigo-200 px-4 py-2 rounded-lg shadow-md text-gray-700 flex items-center"
            >
              <span>{skill}</span>
              <button
                onClick={() => removeSkill(skill)}
                className="ml-2 text-red-500 font-bold hover:text-red-700"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CV Section */}
      {/* CV Upload Section */}
      {/* CV Upload Section */}
      <div className="w-full mt-6">
        <h3 className="text-xl font-bold mb-2 text-gray-800 text-center">
          CV Upload
        </h3>

        {cvFile ? (
          <div className="flex items-center justify-center mt-2">
            <span className="text-gray-700 mr-4">{cvFile.name}</span>
            <button
              onClick={removeCv}
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow hover:bg-red-600"
            >
              Remove CV
            </button>
          </div>
        ) : (
          <div className="flex justify-center mt-4">
            <label className="cursor-pointer bg-indigo-500 text-white text-center rounded-lg py-2 px-8 shadow hover:bg-indigo-600 inline-block">
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleCvUpload}
                className="hidden"
              />
              Choose File
            </label>
          </div>
        )}
      </div>
    </div>
  );
};

export default DashProfile;

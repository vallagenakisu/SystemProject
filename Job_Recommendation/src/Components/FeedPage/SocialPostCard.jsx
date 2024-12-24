import React from "react";

const SocialPostCard = () => {
  // const [isLiked, setIsLiked] = React.useState(false);
  // const [likeCount, setLikeCount] = React.useState(42);

  // const handleLike = () => {
  //   setIsLiked(!isLiked);
  //   setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  // };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      {/* Post Header */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
            <img
              src="/api/placeholder/40/40"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">John Doe</h3>
            <p className="text-sm text-gray-500">2 hours ago</p>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <i className="fas fa-ellipsis-h text-xl"></i>
        </button>
      </div>

      {/* Post Content */}
      <div className="px-4 py-2">
        <p className="text-gray-800">
          Just had an amazing weekend exploring the mountains! The views were
          breathtaking and the weather was perfect. Can't wait to go back! 🏔️
          #adventure #weekendvibes
        </p>
      </div>

      {/* Post Image */}
      <div className="aspect-video relative">
        <img
          src="/api/placeholder/800/450"
          alt="Post content"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Engagement Stats */}
      <div className="px-4 py-2 border-b border-gray-100">
        <div className="flex justify-between text-sm text-gray-500">
          <span> likes</span>
          
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-4 py-2 flex justify-between">
        {/* <button
          onClick={handleLike}
          className={`flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors ${
            isLiked ? "text-blue-600" : "text-gray-600"
          }`}
        >
          <i className={`fas fa-heart ${isLiked ? "text-blue-600" : ""}`}></i>
          <span>Like</span>
        </button> */}

        
      </div>
    </div>
  );
};

export default SocialPostCard;

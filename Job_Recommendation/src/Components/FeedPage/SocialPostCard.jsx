import React from "react";

const SocialPostCard = ({ post }) => {
  // const [isLiked, setIsLiked] = React.useState(false);
  // const [likeCount, setLikeCount] = React.useState(42);

  // const handleLike = () => {
  //   setIsLiked(!isLiked);
  //   setLikeCount((prev) => (isLiked ? prev - 1 : prev + 1));
  // };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden mb-6 flex flex-col items-center">
      {/* Post Header */}
      <div className="w-full p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
            <img
              src={"http://localhost:8000/storage/" + post.user.profile_image}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{post.user.name}</h3>
          </div>
        </div>
        <button className="text-gray-500 hover:text-gray-700">
          <i className="fas fa-ellipsis-h text-xl"></i>
        </button>
      </div>

      {/* Post Content */}
      <div className="w-full px-4 py-2">
        <p className="text-gray-800">{post.postContent}</p>
      </div>

      {/* Post Image */}
      {post.postImage && (
        <div className="w-full aspect-video relative">
          <img
            src={"http://localhost:8000/storage/" + post.postImage}
            alt="Post content"
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Engagement Stats */}
      <div className="w-full px-4 py-2 border-b border-gray-100">
        <div className="flex justify-between text-sm text-gray-500">
          <span> likes</span>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="w-full px-4 py-2 flex justify-between">
        {/* Example action button (uncomment and customize as needed) */}
        {/* <button
        className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-600"
      >
        <i className="fas fa-heart"></i>
        <span>Like</span>
      </button> */}
      </div>
    </div>
  );
};

export default SocialPostCard;

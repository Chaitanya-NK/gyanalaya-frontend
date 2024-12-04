import { FiEdit, FiTrash, FiEye, FiX } from "react-icons/fi";
import { PiSealCheckFill } from "react-icons/pi";

import { images, stables } from "../../../../../constants";
import { Link } from "react-router-dom";
import { format } from "date-fns";

const formatDate = (date) => {
  const formattedDate = format(new Date(date), "MMMM dd, yyyy hh:mm a");
  const day = new Date(date).getDate();
  const suffix = ["th", "st", "nd", "rd"][(day % 10 > 3 || (day >= 11 && day <= 13)) ? 0 : (day % 10)];
  
  return formattedDate.replace(/(\d{2})/, day + suffix); // Add suffix to the day
};

const PostItem = ({ post }) => {
  return (
    <div className="flex justify-between items-center border-b pb-4 mb-4">
      {/* Post Details */}
      <div className="flex items-start space-x-4">
        <div className="bg-gray-200 rounded-md w-10 h-10">
          <img
            src={
              post.user.avatar
                ? stables.UPLOAD_FOLDER_BASE_URL + post.user.avatar
                : images.samplePostImage
            }
            alt="avatar"
            className="w-full rounded-md object-cover object-center mb-2 h-auto md:h-10 lg:h-10 xl:h-10"
          />
          <img
            src={
              post.photo
                ? stables.UPLOAD_FOLDER_BASE_URL + post.photo
                : images.samplePostImage
            }
            alt="avatar"
            className="w-full rounded-md object-cover object-center h-auto md:h-10 lg:h-10 xl:h-10"
          />
        </div>
        <div>
          {/* Display Title */}
          <h3 className="text-gray-500 text-sm flex items-center gap-2">
            {post.user.name} • {formatDate(post.updatedAt)}
            {post.user.verified ? (
              <PiSealCheckFill className="text-[#36B37E] w-4 h-4" />
            ) : (
              <FiX className="text-red-500 w-4 h-4" />
            )}
          </h3>
          <h3 className="text-gray-800 text-lg font-semibold">{post.title}</h3>
          <p className="text-gray-800 mt-2">{post.tags.map((item, index) => (
            <Link
              key={index}
              to="/"
              className="inline-block rounded-md px-3 mr-2 py-1.5 bg-primary font-roboto text-xs lg:text-xs text-white md:text-sm"
            >
              {item}
            </Link>
          ))}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex space-x-4">
        <button
          className="text-blue-500 hover:text-blue-700"
          title="Edit"
        >
          <FiEdit size={20} />
        </button>
        <button
          className="text-red-500 hover:text-red-700"
          title="Delete"
        >
          <FiTrash size={20} />
        </button>
        <button
          className="text-green-500 hover:text-green-700"
          title="View"
        >
          <FiEye size={20} />
        </button>
      </div>
    </div>
  );
};

export default PostItem;

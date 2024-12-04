import { FaUserCircle, FaEye } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RecentComments = ({ comments, isLoading }) => {

    const navigate = useNavigate()

  if (isLoading) {
    return <div>Loading...</div>; // Display a loading message or spinner
  }

  const navigateToComments = () => {
    navigate('/admin/comments')
  }

  return (
    <div className="space-y-4 bg-white shadow-md rounded-md p-4">
      <h2 className="text-xl font-semibold">Comments</h2>
      <p className="text-sm text-gray-500">You have {comments.length} comments</p>

      <ul className="space-y-3">
        {comments.map((comment, index) => (
          <li
            key={index}
            className="flex items-center justify-between bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition duration-300"
          >
            <div className="flex items-center space-x-3">
              {/* User Icon */}
              <FaUserCircle className="text-gray-500" size={30} />
              <div>
                <p className="font-semibold">{comment.user.name}</p>
                <p className="text-sm text-gray-600">{comment.desc}</p>
              </div>
            </div>

            {/* Eye Icon (only blue when hovered) */}
            <FaEye
              className="text-gray-400 hover:text-blue-500 transition-colors duration-200"
              size={20}
            />
          </li>
        ))}
      </ul>

      {/* View More Button */}
      <button onClick={navigateToComments} className="w-full py-2 mt-4 font-bold text-blue-500 bg-blue-100 rounded-lg hover:bg-blue-200 transition duration-300">
        View More
      </button>
    </div>
  );
};

export default RecentComments;

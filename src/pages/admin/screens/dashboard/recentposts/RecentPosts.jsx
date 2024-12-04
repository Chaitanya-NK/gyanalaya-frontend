import { useNavigate } from "react-router-dom";
import PostItem from "../postitem/PostItem";

const RecentPosts = ({ posts }) => {

    const navigate = useNavigate()

    const navigateToPosts = () => {
        navigate("/admin/posts/manage")
    }

    return (
      <div className="bg-white p-6 shadow-md rounded-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Recent Posts</h2>
          <button
            onClick={navigateToPosts}
            className="bg-blue-100 font-bold text-blue-600 px-4 py-2 rounded-md hover:bg-blue-200 transition"
          >
            View More
          </button>
        </div>
  
        <div>
          {posts.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  };
  
  export default RecentPosts;
  
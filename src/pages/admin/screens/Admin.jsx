import RecentPosts from "./dashboard/recentposts/RecentPosts";
import RecentComments from "./dashboard/recentcomments/RecentComments";
import { getAllComments } from "../../../services/index/comments";
import { getAllPosts } from "../../../services/index/posts";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Counts from "./dashboard/counts/Counts";

const Admin = () => {
  const [comments, setComments] = useState([]); // Store comments
  const [posts, setPosts] = useState([]); // Store posts
  const [isLoading, setIsLoading] = useState(true);
  const userState = useSelector((state) => state.user);

  // Fetch comments and posts on component mount
  useEffect(() => {
    const fetchLatestComments = async () => {
      try {
        const response = await getAllComments(userState.userInfo.token); // Fetch comments
        setComments(response.data.slice(0, 5)); // Get the latest 5 comments
      } catch (error) {
        console.error("Failed to fetch comments:", error);
      }
    };

    const fetchLatestPosts = async () => {
      try {
        const response = await getAllPosts(); // Fetch posts
        setPosts(response.data.slice(0, 3)); // Get the latest 3 posts
      } catch (error) {
        console.error("Failed to fetch posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchLatestComments();
    fetchLatestPosts();
  }, [userState.userInfo.token]); // Only rerun when the user token changes

  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center space-x-4">
        <h1 className="text-2xl font-semibold w-auto">Dashboard</h1>
      </div>

      <Counts />

      {/* Content Layout */}
      <div className="grid grid-cols-[25%,75%] gap-6">
        {/* Left Column: Comments */}
        <div className="min-h-[150px]"> {/* Set min-height for dynamic sizing */}
          <RecentComments comments={comments} isLoading={isLoading} />
        </div>

        {/* Right Column: Recent Posts */}
        <div className="min-h-[150px]"> {/* Set min-height for dynamic sizing */}
          <RecentPosts posts={posts} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
};

export default Admin;

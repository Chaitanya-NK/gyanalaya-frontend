import React from "react";
import { AiOutlineClose } from "react-icons/ai";

import { images, stables } from "../constants";
import { Link } from "react-router-dom";
import { PiSealCheckFill } from "react-icons/pi";

const ArticleCard = ({ post, className }) => {
  return (
    <div
      className={`rounded-xl overflow-hidden shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px] ${className}`}
    >
      <Link to={`/blog/${post.slug}`}>
        <img
          src={
            post.photo
              ? stables.UPLOAD_FOLDER_BASE_URL + post.photo
              : images.samplePostImage
          }
          alt="title"
          className="w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60"
        />
      </Link>
      <div className="p-5">
        <Link to={`/blog/${post.slug}`}>
          <h2 className="font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]">
            {post.title}
          </h2>
          <p className="text-dark-light mt-3 text-sm md:text-lg">
            {post.caption}
          </p>
          <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
          {post.tags.map((item, index) => (
            <Link
              key={index}
              to="/"
              className="inline-block rounded-md px-3 py-1.5 bg-primary font-roboto text-xs text-white md:text-sm"
            >
              {item}
            </Link>
          ))}
        </div>
        </Link>
        <div className="flex justify-between flex-nowrap items-center mt-6">
        <div className="flex items-center gap-x-2 md:gap-x-2.5">
          <img
            src={
              post.user.avatar
                ? stables.UPLOAD_FOLDER_BASE_URL + post.user.avatar
                : images.userImage
            }
            alt="post profile"
            className="w-9 h-9 md:w-10 md:h-10 rounded-full"
          />
          <div className="flex items-center gap-x-2">
            <h4 className="font-bold italic text-dark-soft text-sm md:text-base">
              {post.user.name}
            </h4>
            {post.user.verified ? (
              <PiSealCheckFill className="w-5 h-5 text-[#36B37E]" />
            ) : (
              <AiOutlineClose className="w-5 h-5 text-red-500" />
            )}
          </div>
        </div>

          <span className="font-bold text-dark-light italic text-sm md:text-base">
            {new Date(post.createdAt).getDate()}{" "}
            {new Date(post.createdAt).toLocaleString("default", {
              month: "long",
            })}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
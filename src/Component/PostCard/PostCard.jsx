import React from "react";
import { FaTrashAlt, FaEdit, FaShareAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const PostCard = ({
  post,
  setOpenUpdatePost,
  setUpdateId,
  getPosts,
  setValue,
}) => {
  const truncate = (str, num) => {
    if (str.length > num) {
      str = str.substring(0, num) + "...";
      return str;
    }
    return str;
  };
  function removePost(id) {
    const posts = JSON.parse(localStorage.getItem("posts"));
    const copy = [...posts];

    // get item by id
    const newPosts = copy.filter((item) => item.id !== id);
    localStorage.setItem("posts", JSON.stringify(newPosts));

    setValue((prev) => !prev);
  }

  const removePostHandler = (id) => {
    console.log(id);
    const decision = window.confirm(
      "Are you sure you want to delete this item?"
    );

    if (decision) {
      removePost(id);
      getPosts();
    }
  };
  console.log(post, "line 41");
  return (
    <div
      className="w-[250px] h-[300px] flex flex-col justify-between mt-[30px] mb-[20px] rounded-md bg-blue-400"
      style={{
        boxShadow: `rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset`,
      }}
    >
      <div className=" mx-[10px]">
        {console.log(post.image, "postImage")}
        <img src={post.image} alt="" />
        <h2 className="font-bold">
          <Link to={`/posts/${post.id}`}>{truncate(post.title, 20)}</Link>
        </h2>
        <p style={{ wordWrap: "break-word" }}>{truncate(post.desc, 300)}</p>
        {console.log(post, "abraham")}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-20">
          <FaTrashAlt
            className="cursor-pointer"
            onClick={() => removePostHandler(post.id)}
          />{" "}
          <FaEdit
            className="cursor-pointer "
            onClick={() => {
              setUpdateId(post.id);
              setOpenUpdatePost(true);
            }}
          />
        </div>
        <FaShareAlt className="cursor-pointer m-[5px]" />
      </div>
    </div>
  );
};

export default PostCard;

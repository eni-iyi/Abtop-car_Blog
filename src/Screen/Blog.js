import React, { useState, useEffect, useContext } from "react";
import "./Blog.css";
import Modal from "../Component/Modal/Modal";
import Post from "../Component/BlogPost/Post";
import PostList from "../Component/PostList/PostList";
import UpdatePost from "../Component/UpdatePost/UpdatePost";
import { GlobalContext } from "../GlobalContext";
// import { FaFileSignature } from "react-icons/fa";

const Blog = () => {
  const {
    openUpdatePost,
    setOpenUpdatePost,
    openCreatePost,
    setOpenCreatePost,
  } = useContext(GlobalContext);

  // const [openCreatePost, setOpenCreatePost] = useState(false);
  const [posts, setPosts] = useState([]);
  // const [openUpdatePost, setOpenUpdatePost] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [value, setValue] = useState(true);
  // console.log(posts, 'abr')
  useEffect(() => {
    getPosts();
  }, [openCreatePost, value]);

  function getPosts() {
    const posts = localStorage.getItem("posts");
    const postsJSON = JSON.parse(posts);
    // console.log(posts, "Post here");
    setPosts(postsJSON);
  }
  return (
    <div className="Container mt-[100px]">
      {openCreatePost && (
        <Modal>
          <Post
            openCreatePost={openCreatePost}
            setOpenCreatePost={setOpenCreatePost}
          />
        </Modal>
      )}

      {/* update post */}
      {openUpdatePost && (
        <Modal>
          <UpdatePost
            setOpenUpdatePost={setOpenUpdatePost}
            id={updateId}
            getPosts={getPosts}
          />
        </Modal>
      )}

      <div className="newPostContainer">
        <button className="addPostBtn" onClick={() => setOpenCreatePost(true)}>
          Add New Post
        </button>
      </div>

      {/* posts component */}
      <PostList
        posts={posts}
        getPosts={getPosts}
        setOpenUpdatePost={setOpenUpdatePost}
        setUpdateId={setUpdateId}
        setValue={setValue}
      />
    </div>
  );
};

export default Blog;

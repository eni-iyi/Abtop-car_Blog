import React, { useState } from "react";
import { toast } from "react-toastify";
import { TiDelete } from "react-icons/ti";
import { v4 as uuidv4 } from "uuid";
import Spinner from "../Spinner/Spinner";
import "./Post.css";

const Post = (props) => {
  const { setOpenCreatePost } = props;
  const [loading, setLoading] = useState(false);
  const [state, setState] = useState({
    title: "",
    desc: "",
    date: "",
    image: "",
  });

  // destruction of items from the current state
  const { title, desc, date, image } = state;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };
  const data = { id: uuidv4(), title, desc, date, image };

  console.log(data);
  const submitHandler = (e) => {
    // prevent submission if fields are empty
    if (!title || !desc || !date || !image) {
      toast.warning("All fields required");
      return;
    }
    setLoading(true);
    // const data = { id: uuidv4(), title, desc, date, image };

    setTimeout(() => {
      const posts = localStorage.getItem("posts")
        ? JSON.parse(localStorage.getItem("posts"))
        : [];
      const postCopy = [...posts, data];

      localStorage.setItem("posts", JSON.stringify(postCopy));

      // clear input field
      setLoading({ title: "", desc: "", date: "", image: "" });

      // set loading to false
      setLoading(false);

      toast.success("Post created");

      setOpenCreatePost(false);
    }, 3000);
  };

  return (
    <div className="mainly">
      {/* Delete icon */}
      <h3
        style={{ cursor: "pointer" }}
        onClick={() => setOpenCreatePost(false)}
      >
        <TiDelete size={24} color="white" />
      </h3>
      <h2>New Post</h2>

      {/* form */}
      <div className="form">
        <div>
          <label htmlFor="title">Title</label>
          <input
            className="w-[300px] my-5 px-3 rounded-lg"
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={changeHandler}
            placeholder="title"
          />
        </div>

        <div>
          <label htmlFor="desc">Post</label>
          <textarea
            className="w-[300px] my-5 px-3 rounded-lg"
            type="text"
            id="desc"
            name="desc"
            value={desc}
            onChange={changeHandler}
            placeholder="Post"
          ></textarea>
        </div>

        <div>
          <label htmlFor="title">Image</label>
          <input
            className="w-[280px] my-5 px-2 rounded-lg"
            type="text"
            id="image"
            name="image"
            value={image}
            onChange={changeHandler}
            placeholder="url"
          />
        </div>
        <div>
          <label htmlFor="date">Date</label>
          <input
            className="rounded-lg my-5"
            type="date"
            id="date"
            name="date"
            value={date}
            onChange={changeHandler}
          />
        </div>

        <div className="flex justify-center">
          {loading ? (
            <Spinner />
          ) : (
            <button className="bg-green-500" onClick={submitHandler}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Post;

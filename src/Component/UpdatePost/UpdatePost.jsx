import React, { useState, useEffect } from "react";
import { TiDelete } from "react-icons/ti";
import Spinner from "../Spinner/Spinner";

const UpdatePost = ({ setOpenUpdatePost, id, getPosts }) => {
  // const [openUpdatePost, id] = useState(false)
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [state, setState] = useState({
    title: "",
    desc: "",
    date: "",
    image: "",
  });

  useEffect(() => {
    if (!post || (post && post.id !== id)) {
      getPost(id);
    }
  }, [post, id]);

  useEffect(() => {
    if (post) {
      setState({
        title: post.title,
        desc: post.desc,
        date: post.date,
        image: post.image,
      });
    }
  }, [post]);
  console.log(post, id);

  function getPost(id) {
    const posts = JSON.parse(localStorage.getItem("posts"));
    const copy = [...posts];

    // get item by id
    const post = copy.find((item) => item.id === id);
    setPost(post);

    return post;
  }

  // console.log(post, "poster boy")

  // destruction items from the current state
  const { title, desc, date, image } = state;

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value,
    });
  };

  const submitHandler = () => {
    setLoading(true);

    setTimeout(() => {
      const posts = localStorage.getItem("posts")
        ? JSON.parse(localStorage.getItem("posts"))
        : [];
      const copy = [...posts];

      const index = copy.findIndex((item) => item.id === id);

      // get item by id
      const post = copy[index];

      post.title = state.title;
      post.desc = state.desc;
      post.date = state.date;
      post.image = state.image;

      localStorage.setItem("posts", JSON.stringify(copy));

      // set loading to false
      setLoading(false);
      setOpenUpdatePost(false);
      getPosts();

      console.log("3 seconds");
    }, 3000);
  };
  return (
    <div className="mainly">
      {/* Delete icon */}
      <h3
        style={{ cursor: "pointer" }}
        onClick={() => setOpenUpdatePost(false)}
      >
        <TiDelete size={24} color="white" />
      </h3>
      <h2>Update Post</h2>

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
          <label htmlFor="desc">Update Post</label>
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

export default UpdatePost;

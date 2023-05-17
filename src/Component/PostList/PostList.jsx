import React from 'react'
import PostCard from '../PostCard/PostCard';

const PostList = ({posts, getPosts, setOpenUpdatePost, setUpdateId, setValue}) => {
 return (
    <div className='flex items-center justify-between px-6 flex-wrap'>
    {posts && posts.length > 0 ? (
        posts.map((post) => (
            <PostCard 
            key={post.id}
            post={post}
            getPost={getPosts}
            setOpenUpdatePost={setOpenUpdatePost}
            setUpdateId={setUpdateId}
            setValue={setValue}
            />
        ))
    ) : (
        <div className='w-full h-screen flex justify-center'>
            {" "}
            <h2>No Post Yet</h2>
        </div>
    )}
    </div>
  );
};

export default PostList
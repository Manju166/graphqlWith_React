import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_BLOGS } from '../graphQl/Queries';
import Blog from '../Pages/Blogs';
import { Button } from 'antd';
import '../styles/blogs.css';

function GetBlogs() {
  const { error, data, loading } = useQuery(GET_BLOGS);
  const [blogs, setBlogs] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    if (data) {
      setBlogs(data.blogs);
      console.log(data.blogs);
    }
  }, [data]);

  const showModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <Button type="primary" onClick={showModal}>Add Post</Button>
      <Blog visible={modalVisible} onClose={handleCloseModal} />
      <div className="blog-container">
        {blogs.map((blog) => (
          <div className="blog-card" key={blog.id}>
            <h2 className="blog-title">Title: {blog.title}</h2>
            <p>Content: {blog.content}</p>
            <p>Status: {blog.status}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default GetBlogs;
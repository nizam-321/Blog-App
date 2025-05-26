import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const BlogList = () => {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("posts") || "[]");
    setPosts(savedPosts);
  }, []);

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      const updatedPosts = posts.filter(post => post.id !== id);
      setPosts(updatedPosts);
      localStorage.setItem("posts", JSON.stringify(updatedPosts));
    }
  };

  const filteredPosts = filter === "all" ? posts : posts.filter(post => post.category === filter);

  if (posts.length === 0) {
    return (
      <div className="text-center py-10">
        <h3 className="text-xl font-semibold text-gray-600 mb-4">No posts yet</h3>
        <Link 
          to="/create" 
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Write a New Post
        </Link>
      </div>
    );
  }

  return (
    <div>
      <div className="flex gap-4 mb-6 overflow-x-auto pb-2">
        <button 
          onClick={() => setFilter("all")}
          className={`px-4 py-2 rounded-full ${filter === "all" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
        >
          All
        </button>
        <button 
          onClick={() => setFilter("technology")}
          className={`px-4 py-2 rounded-full ${filter === "technology" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
        >
          Technology
        </button>
        <button 
          onClick={() => setFilter("lifestyle")}
          className={`px-4 py-2 rounded-full ${filter === "lifestyle" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
        >
          Lifestyle
        </button>
        <button 
          onClick={() => setFilter("travel")}
          className={`px-4 py-2 rounded-full ${filter === "travel" ? "bg-blue-600 text-white" : "bg-gray-100"}`}
        >
          Travel
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
        {filteredPosts.map(post => (
          <article key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            {post.imageUrl && (
              <img 
                src={post.imageUrl} 
                alt={post.title}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                {post.category && (
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {post.category}
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h3>
              <p className="text-gray-600 mb-4 line-clamp-3">{post.content}</p>
              
              <div className="flex items-center justify-between">
                <Link 
                  to={`/posts/${post.id}`} 
                  className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1"
                >
                  Read More
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <button
                  onClick={() => handleDelete(post.id)}
                  className="text-red-500 hover:text-red-700 transition"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};
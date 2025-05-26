import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const posts = JSON.parse(localStorage.getItem("posts") || "[]");
    const newPost = {
      id: Date.now().toString(),
      title,
      content,
      category,
      imageUrl: preview,
      createdAt: new Date().toISOString(),
      likes: 0,
      comments: []
    };
    localStorage.setItem("posts", JSON.stringify([newPost, ...posts]));
    navigate("/");
  };

  return (
    <div className="max-w-3xl mx-auto py-6">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-4 text-white">
          <h2 className="text-xl font-bold">Create New Post</h2>
        </div>
        <form onSubmit={handleSubmit} className="p-4 space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Title</label>
            <input
              className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-500"
              type="text"
              placeholder="Enter post title"
              value={title}
              onChange={e => setTitle(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Category</label>
            <select
              className="w-full px-3 py-1.5 text-sm border border-gray-200 rounded focus:outline-none focus:ring-1 focus:ring-gray-500 bg-white"
              value={category}
              onChange={e => setCategory(e.target.value)}
              required
            >
              <option value="">Select category</option>
              <option value="technology">Technology</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="travel">Travel</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Cover Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full text-sm text-gray-500 file:mr-3 file:py-1.5 file:px-3 file:rounded file:border-0 file:bg-gray-50 file:text-gray-700 hover:file:bg-gray-100"
            />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="mt-2 w-full h-28 object-cover rounded"
              />
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Content</label>
            <textarea
              className="w-full border border-gray-300 p-3 rounded-lg h-64 focus:outline-none focus:ring-2 focus:ring-blue-500 whitespace-pre-wrap"
              placeholder="Write your post content here..."
              value={content}
              onChange={e => setContent(e.target.value)}
              required
            />
          </div>

          <div className="flex gap-2 pt-1">
            <button
              type="submit"
              className="flex-1 bg-gray-800 text-white py-1.5 px-3 rounded text-sm font-medium hover:bg-gray-900 transition-colors"
            >
              Publish
            </button>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="px-3 py-1.5 bg-gray-50 text-gray-700 rounded text-sm font-medium border border-gray-200 hover:bg-gray-100 transition-colors"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
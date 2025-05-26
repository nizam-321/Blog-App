import React from "react";
import { Link } from "react-router-dom";
import { BlogList } from "../components/BlogList";

export const Home = () => {
  return (
    <div className="w-full py-6 space-y-6">
      <section className="bg-white rounded-lg shadow-md p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-800">Latest Posts</h2>
        </div>
        <BlogList />
      </section>
    </div>
  );
};


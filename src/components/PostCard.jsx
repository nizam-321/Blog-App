import React from 'react';
import { Link } from 'react-router-dom';

export const PostCard = ({ post }) => {
  return (
    <div className='bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-100'>
      {post.imageUrl && (
        <img 
          src={post.imageUrl} 
          alt={post.title} 
          className='w-full h-48 object-cover rounded-lg mb-4'
        />
      )}
      <div className='flex items-center gap-2 text-sm text-gray-500 mb-2'>
        <span>{new Date(post.createdAt).toLocaleDateString()}</span>
        {post.category && (
          <span className='bg-blue-100 text-blue-800 px-2 py-1 rounded-full'>
            {post.category}
          </span>
        )}
      </div>
      <h2 className='text-xl font-semibold text-gray-800 mb-2'>{post.title}</h2>
      <p className='text-gray-600 mb-4 line-clamp-3'>{post.content}</p>
      <div className='flex items-center justify-between'>
        <Link 
          to={`/posts/${post.id}`} 
          className='inline-flex items-center text-blue-600 hover:text-blue-800 font-medium'
        >
          Read More 
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
        <div className='flex items-center gap-2'>
          <button className='text-gray-500 hover:text-red-500'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </button>
          <button className='text-gray-500 hover:text-blue-500'>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
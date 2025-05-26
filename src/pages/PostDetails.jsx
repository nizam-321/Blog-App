import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

export const PostDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comment, setComment] = useState("");

    useEffect(() => {
        const posts = JSON.parse(localStorage.getItem("posts") || "[]");
        const foundPost = posts.find(p => p.id === id);
        
        if (foundPost) {
            setPost(foundPost);
        } else {
            setError("Post not found");
        }
        setLoading(false);
    }, [id]);

    const handleComment = (e) => {
        e.preventDefault();
        const posts = JSON.parse(localStorage.getItem("posts") || "[]");
        const postIndex = posts.findIndex(p => p.id === id);
        
        if (postIndex !== -1) {
            const updatedPost = {
                ...posts[postIndex],
                comments: [...(posts[postIndex].comments || []), {
                    id: Date.now().toString(),
                    text: comment,
                    date: new Date().toISOString()
                }]
            };
            posts[postIndex] = updatedPost;
            localStorage.setItem("posts", JSON.stringify(posts));
            setPost(updatedPost);
            setComment("");
        }
    };

    if (loading) return (
        <div className="flex justify-center items-center min-h-[400px]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );

    if (error) return (
        <div className="text-center py-10">
            <h2 className="text-xl text-red-500 font-semibold mb-4">{error}</h2>
            <button 
                onClick={() => navigate('/')}
                className="text-blue-600 hover:underline"
            >
                Go back to Home Page
            </button>
        </div>
    );

    return (
        <article className="max-w-3xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            {post.imageUrl && (
                <img 
                    src={post.imageUrl} 
                    alt={post.title}
                    className="w-full h-64 object-cover"
                />
            )}
            <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                    <span>{new Date(post.createdAt).toLocaleDateString()}</span>
                    {post.category && (
                        <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                            {post.category}
                        </span>
                    )}
                </div>
                
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{post.title}</h1>
                
                <div className="prose prose-lg prose-blue max-w-none mb-8">
                    {post.content}
                </div>

                <div className="border-t pt-8">
                    <h3 className="text-xl font-semibold mb-4">Comments</h3>
                    
                    <form onSubmit={handleComment} className="mb-6">
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Write your comment..."
                            className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows="3"
                            required
                        />
                        <button 
                            type="submit"
                            className="mt-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
                        >
                            Add Comment
                        </button>
                    </form>

                    <div className="space-y-4">
                        {post.comments?.map(comment => (
                            <div key={comment.id} className="bg-gray-50 rounded-lg p-4">
                                <p className="text-gray-800 mb-2">{comment.text}</p>
                                <span className="text-sm text-gray-500">
                                    {new Date(comment.date).toLocaleDateString()}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </article>
    );
};
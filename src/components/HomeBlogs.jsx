import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getLatestBlogs } from '../data/blogData';

const HomeBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for better UX
    setTimeout(() => {
      const latestBlogs = getLatestBlogs(3);
      setBlogs(latestBlogs);
      setLoading(false);
    }, 500);
  }, []);

  const renderContent = (content) => {
    if (!content || !content[0]) return 'No content available';
    
    const contentData = content[0];
    if (typeof contentData === 'string') {
      return contentData.substring(0, 150) + '...';
    }
    
    if (contentData.children) {
      const text = contentData.children
        .map(child => child.text || child.children?.map(c => c.text).join(' ') || '')
        .join(' ');
      return text.substring(0, 150) + '...';
    }
    
    return 'No content available';
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <div className="text-white">Loading blogs...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-[#0d71fe] via-[#954fff] to-[#ed37fb]">
            Latest Blog Posts
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discover our latest insights, updates, and stories about AI technology and innovation.
          </p>
        </div>
        {blogs.length === 0 ? (
          <div className="text-center text-gray-600 dark:text-gray-400">No blog posts found</div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <div key={blog.id} className="group bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                {blog.FeaturedImage && blog.FeaturedImage[0] && (
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={blog.FeaturedImage[0].url}
                      alt={blog.TItle || 'Blog image'}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
                <div className="p-8">
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                    {blog.TItle || 'Untitled'}
                  </h3>
                  <div className="prose prose-sm max-w-none mb-6 text-gray-600 dark:text-gray-400">
                    {renderContent(blog.Content)}
                  </div>
                  <Link
                    to={`/blog/${blog.Slug}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0d71fe] via-[#954fff] to-[#ed37fb] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
                  >
                    <span>Read More</span>
                    <svg
                      className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="text-center mt-16">
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#0d71fe] via-[#954fff] to-[#ed37fb] text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 group"
          >
            <span>Explore All Blogs</span>
            <svg
              className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogs; 
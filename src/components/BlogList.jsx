import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import Footer from './Footer';
const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const postsPerPage = 9;

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://mygodai.app/api/blogs', {
          params: {
            populate: '*',
            'pagination[page]': currentPage,
            'pagination[pageSize]': postsPerPage,
            sort: 'createdAt:desc'
          }
        });
        
        if (response.data && response.data.data) {
          setBlogs(response.data.data);
          setTotalPages(response.data.meta.pagination.pageCount);
        } else {
          setError('No blog data found in the response');
        }
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setError('Failed to fetch blogs');
        setLoading(false);
      }
    };

    fetchBlogs();
  }, [currentPage]);

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

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <div className="text-white">Loading blogs...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 pt-32 pb-24">
        <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-6 text-cyan-400">
  All Blog Posts
</h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Explore our collection of articles, insights, and stories about AI technology and innovation.
          </p>
        </div>
        {blogs.length === 0 ? (
          <div className="text-center text-gray-600 dark:text-gray-400">No blog posts found</div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog) => (
                <Link 
                  to={`/blog/${blog.Slug}`}
                  key={blog.id} 
                  className="group bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {blog.FeaturedImage && blog.FeaturedImage[0] && (
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={`https://mygodai.app${blog.FeaturedImage[0].url}`}
                        alt={blog.TItle || 'Blog image'}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  )}
                  <div className="p-8">
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
                      <span className="flex items-center">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                      {blog.TItle || 'Untitled'}
                    </h3>
                    <div className="prose prose-sm max-w-none mb-6 text-gray-600 dark:text-gray-400">
                      <div className="line-clamp-6 z-index-10">
                        {renderContent(blog.Content)}
                      </div>
                    </div>
                    <div className="inline-flex items-center text-blue-500 dark:text-blue-400 group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors duration-300">
                      <span>Read More</span>
                      <svg
                        className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {totalPages > 1 && (
              <div className="flex justify-center mt-16">
                <nav className="flex items-center space-x-2">
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-6 py-3 rounded-lg bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Previous
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                        currentPage === page
                          ? 'bg-gradient-to-r from-[#0d71fe] via-[#954fff] to-[#ed37fb] text-white shadow-lg'
                          : 'bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg'
                      }`}
                    >
                      {page}
                    </button>
                  ))}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-6 py-3 rounded-lg bg-white/80 backdrop-blur-sm dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default BlogList; 
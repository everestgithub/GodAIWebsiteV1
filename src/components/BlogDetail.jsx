import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getBlogBySlug } from '../data/blogData';
import Footer from './Footer';

const BlogDetail = () => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading delay for better UX
    setLoading(true);
    setTimeout(() => {
      const blogData = getBlogBySlug(slug);
      
      if (blogData) {
        setBlog(blogData);
        setLoading(false);
      } else {
        setError('Blog not found');
        setLoading(false);
        setTimeout(() => navigate('/blog'), 3000);
      }
    }, 500);
  }, [slug, navigate]);

  const renderContent = (content) => {
    if (!content || !Array.isArray(content) || content.length === 0) {
      return <p>No content available</p>;
    }

    return content.map((block, index) => {
      if (block.type === 'paragraph') {
        return (
          <p key={index} className="mb-4">
            {block.children?.map((child, i) => {
              // Handle different text styles
              let className = '';
              if (child.bold) className += ' font-bold';
              if (child.italic) className += ' italic';
              if (child.underline) className += ' underline';
              
              return (
                <span key={i} className={className.trim()}>
                  {child.text}
                </span>
              );
            })}
          </p>
        );
      }

      if (block.type === 'list') {
        const ListTag = block.style === 'ordered' ? 'ol' : 'ul';
        return (
          <ListTag 
            key={index} 
            className={`mb-4 ml-6 ${block.style === 'ordered' ? 'list-decimal' : 'list-disc'}`}
          >
            {block.children?.map((item, i) => (
              <li key={i} className="mb-2">
                {item.children?.map((child, j) => {
                  let className = '';
                  if (child.bold) className += ' font-bold';
                  if (child.italic) className += ' italic';
                  if (child.underline) className += ' underline';
                  
                  return (
                    <span key={j} className={className.trim()}>
                      {child.text}
                    </span>
                  );
                })}
              </li>
            ))}
          </ListTag>
        );
      }

      // Default case: show the raw content for debugging
      return <pre key={index} className="mb-4">{JSON.stringify(block, null, 2)}</pre>;
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mb-4"></div>
          <div className="text-white">Loading blog content...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-red-500">
          {error}
          <div className="mt-4 text-sm">Redirecting to blog list...</div>
        </div>
      </div>
    );
  }

  if (!blog) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-white">Blog not found</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black">
      <div className="container mx-auto px-4 py-24">
        <article className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          {blog.FeaturedImage && blog.FeaturedImage[0] && (
            <div className="relative h-96 overflow-hidden">
              <img
                src={blog.FeaturedImage[0].url}
                alt={blog.TItle || 'Blog image'}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
          )}
          <div className="p-8">
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 mb-6 transition-colors duration-300"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              Back to Blogs
            </Link>
            <h1 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">{blog.TItle}</h1>
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-8">
              <span>{new Date(blog.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="prose prose-lg max-w-none dark:prose-invert">
              {renderContent(blog.Content)}
            </div>
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
};

export default BlogDetail; 
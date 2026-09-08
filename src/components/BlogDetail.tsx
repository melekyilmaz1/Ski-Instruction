import { motion } from 'framer-motion';

interface BlogPost {
  id: number;
  title: string;
  date: string;
  readTime: string;
  category: string;
  image: string;
  content: string; // HTML content for detail view
}

interface BlogDetailProps {
  post: BlogPost;
  onClose: () => void;
}

export default function BlogDetail({ post, onClose }: BlogDetailProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="bg-neutral-900 border border-neutral-800 rounded-3xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-10 p-2 bg-black/50 hover:bg-black/80 text-white rounded-full transition-colors"
          aria-label="Kapat"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Hero Image */}
        <div className="h-64 w-full overflow-hidden">
          <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        </div>

        {/* Content */}
        <div className="p-8 md:p-12">
          <div className="flex items-center space-x-3 mb-6">
            <span className="text-xs font-semibold px-3 py-1 bg-white/10 rounded text-white/80 uppercase tracking-wider">
              {post.category}
            </span>
            <span className="text-sm text-neutral-400">{post.date}</span>
          </div>

          <h2 className="text-4xl font-bold text-white mb-8 lowercase tracking-tight">
            {post.title}
          </h2>

          <div
            className="prose prose-invert prose-lg max-w-none
            prose-p:text-neutral-300 prose-headings:text-white prose-headings:font-medium
            prose-strong:text-white prose-li:text-neutral-300"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

import { motion } from 'framer-motion';
import type { IPost } from '../types';

interface PostCardProps {
  post: IPost;
}

export const PostCard = ({ post }: PostCardProps) => (
  <motion.div
    className="border p-4 rounded-md shadow-sm bg-white cursor-pointer"
    whileHover={{ scale: 1.02, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
    transition={{ type: "spring", stiffness: 400, damping: 25 }}
  >
    <h2 className="text-xl font-semibold text-blue-700 mb-2 truncate">
      {post.title}
    </h2>
    <p className="text-gray-700 mb-3 text-sm">
      {post.body.substring(0, 100)}...
    </p>
    <p className="text-xs text-gray-500 font-medium">
      ID de Usuario: {post.userId}
    </p>
  </motion.div>
);
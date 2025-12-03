import { motion } from 'framer-motion';
import { FaUserCircle } from 'react-icons/fa'; // Icono de ejemplo
import type { IUser } from '../types';

interface UserCardProps {
  user: IUser;
}

export const UserCard = ({ user }: UserCardProps) => (
  <motion.div
    className="bg-white rounded-lg shadow p-5 cursor-pointer"
    whileHover={{ scale: 1.03, y: -5, boxShadow: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)" }}
    whileTap={{ scale: 0.98 }}
    transition={{ type: "spring", stiffness: 300, damping: 20 }}
  >
    <div className="flex items-center space-x-3">
      <FaUserCircle className="text-3xl text-blue-500" />
      <div>
        <p className="font-bold text-lg text-gray-800">{user.name}</p>
        <p className="text-sm text-gray-500">@{user.username}</p>
      </div>
    </div>
  </motion.div>
);
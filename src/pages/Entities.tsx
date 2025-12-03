import { motion } from 'framer-motion';
import { useFetchData } from '../hooks/useFetchData';
import { getPosts } from '../services/apiClient';
import type { IPost } from '../types';
import { PostCard } from '../components/PostCard';
import { SkeletonCard } from '../components/SkeletonCard';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
// ------------------------------

const Entities = () => {
  const { data: posts, loading, error } = useFetchData<IPost[]>(getPosts);

  // Función para renderizar Skeletons
  const renderSkeletons = () => (
    Array.from({ length: 12 }).map((_, index) => (
      <SkeletonCard key={index} />
    ))
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto py-4 px-4"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg mt-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Listado de Entidades (Posts)</h1>
        
        {error && <p className="text-center text-red-500">Error: {error.message}</p>}
        
        {/* 👇 AQUÍ ESTÁ EL ARREGLO 👇 */}
        {loading ? (
          // 1. Si está cargando, muestra los Skeletons
          <div className="space-y-4">
            {renderSkeletons()}
          </div>
        ) : (
          // 2. Cuando la carga TERMINA, muestra el contenedor animado
          <motion.div 
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {posts?.map(post => (
              <motion.div key={post.id} variants={itemVariants}>
                <PostCard post={post} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default Entities;
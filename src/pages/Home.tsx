import { motion } from 'framer-motion';
import { useFetchData } from '../hooks/useFetchData';
import { getUsers } from '../services/apiClient';
import type { IUser } from '../types';
import { UserCard } from '../components/UserCard';
import { SkeletonCard } from '../components/SkeletonCard';

// --- Variantes de Animación ---
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

const Home = () => {
  const { data: users, loading, error } = useFetchData<IUser[]>(getUsers);

  // Función para renderizar Skeletons
  const renderSkeletons = () => (
    Array.from({ length: 8 }).map((_, index) => (
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
      {/* Hero */}
      <section className="text-center p-10 my-8 bg-white rounded-lg shadow-lg">
        <h1 className="text-5xl font-bold text-blue-700 mb-3">JSONPlaceholder Feed</h1>
        <p className="text-lg text-gray-600">
          Un proyecto de React (con TypeScript) que consume datos de JSONPlaceholder.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-semibold mb-4 text-gray-800">Listado de Usuarios</h2>
        
        {error && <p className="text-center text-red-500">Error: {error.message}</p>}
        
        {/* 👇 AQUÍ ESTÁ EL ARREGLO 👇 */}
        {loading ? (
          // 1. Si está cargando, muestra los Skeletons (sin animación)
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {renderSkeletons()}
          </div>
        ) : (
          // 2. Cuando la carga TERMINA, muestra el contenedor animado
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {users?.map(user => (
              <motion.div key={user.id} variants={itemVariants}>
                <UserCard user={user} />
              </motion.div>
            ))}
          </motion.div>
        )}
      </section>
    </motion.div>
  );
};

export default Home;
import { motion } from 'framer-motion';

function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-50">
      <motion.div
        className="h-16 w-16 rounded-full border-4 border-slate-300 border-t-sky-500"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
        aria-label="Loading portfolio"
      />
    </div>
  );
}

export default Loader;
import { motion } from 'framer-motion';

function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute -left-40 top-20 h-72 w-72 rounded-full bg-sky-300/30 blur-3xl dark:bg-sky-700/30"
        animate={{ x: [0, 60, 0], y: [0, 30, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-violet-300/25 blur-3xl dark:bg-violet-700/25"
        animate={{ x: [0, -55, 0], y: [0, -25, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
}

export default AnimatedBackground;
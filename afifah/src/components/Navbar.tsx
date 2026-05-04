import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between py-8 px-6 md:px-12 max-w-6xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <span className="text-xl font-medium tracking-tight text-zinc-900">Afifah</span>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex gap-8 text-sm text-zinc-500 font-medium"
      >
        <a href="#about" className="hover:text-zinc-900 transition-colors">About</a>
        <a href="#interests" className="hover:text-zinc-900 transition-colors">Interests</a>
        <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
      </motion.div>
    </nav>
  );
}

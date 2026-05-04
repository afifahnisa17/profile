import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 max-w-6xl mx-auto w-full flex flex-col justify-center min-h-[60vh]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-4xl"
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-medium leading-[1.1] tracking-tight mb-8 text-zinc-900">
          Exploring the intersection of <br className="hidden md:block" />
          <span className="text-zinc-400">minimalist design</span> and <br className="hidden md:block" />
          <span className="text-zinc-900">artificial intelligence</span>.
        </h1>
        <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-2xl font-light">
          Hi, I'm Afifah. I focus on understanding and building AI solutions that are intuitive, human-centric, and beautifully structured.
        </p>
      </motion.div>
    </section>
  );
}

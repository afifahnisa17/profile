import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface InterestCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  delay?: number;
}

export function InterestCard({ title, description, icon, delay = 0 }: InterestCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="p-8 md:p-10 bg-white/50 backdrop-blur-sm rounded-3xl border border-zinc-100 shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(0,0,0,0.08)] transition-all duration-300 group"
    >
      <div className="mb-6 text-zinc-400 group-hover:text-zinc-800 transition-colors duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-medium mb-3 text-zinc-900 tracking-tight">{title}</h3>
      <p className="text-zinc-500 text-sm leading-relaxed font-light">{description}</p>
    </motion.div>
  );
}

import { Bot, BrainCircuit, Sparkles } from 'lucide-react';
import { InterestCard } from './InterestCard';

export default function AIFocus() {
  const interests = [
    {
      title: "Machine Learning",
      description: "Developing predictive models and algorithms that learn from data to solve complex real-world problems with high accuracy.",
      icon: <BrainCircuit className="w-8 h-8 stroke-[1.5]" />,
    },
    {
      title: "Generative AI",
      description: "Exploring the creative capabilities of AI to generate novel concepts organically, pushing the boundaries of automated creation.",
      icon: <Sparkles className="w-8 h-8 stroke-[1.5]" />,
    },
    {
      title: "Human-AI Interaction",
      description: "Designing seamless interfaces that bridge the gap between complex artificial intelligence and daily human tasks naturally.",
      icon: <Bot className="w-8 h-8 stroke-[1.5]" />,
    }
  ];

  return (
    <section id="interests" className="py-24 px-6 md:px-12 max-w-6xl mx-auto w-full">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-zinc-900">Areas of Focus</h2>
        <p className="text-lg text-zinc-500 font-light max-w-xl">Structured exploration in the field of Artificial Intelligence, focusing on practical and innovative applications.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {interests.map((interest, index) => (
          <InterestCard 
            key={index}
            title={interest.title}
            description={interest.description}
            icon={interest.icon}
            delay={index * 0.15}
          />
        ))}
      </div>
    </section>
  );
}

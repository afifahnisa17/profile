export default function Footer() {
  return (
    <footer id="contact" className="py-12 px-6 md:px-12 max-w-6xl mx-auto w-full border-t border-zinc-200/60 mt-24">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="text-zinc-900 font-medium tracking-tight text-lg">Afifah</span>
        <div className="flex gap-8 text-sm text-zinc-500 font-medium">
          <a href="mailto:hello@example.com" className="hover:text-zinc-900 transition-colors">Email</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-900 transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

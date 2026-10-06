import { Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-800 via-slate-900 to-teal-900 overflow-hidden"
    >
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-teal-400 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="mx-auto mb-8 w-32 h-32 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center text-5xl font-bold text-white shadow-lg">
          M
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-3">
          Hi, I'm Milan Talsaniya
        </h1>
        <p className="text-lg sm:text-xl text-teal-300 mb-2">
          Commerce Student &amp; Frontend Developer
        </p>
        <p className="text-sm text-slate-400 max-w-md mx-auto mb-8">
          I enjoy creating websites and learning new frontend technologies.
        </p>
        <div className="flex justify-center gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-teal-500 text-white transition-colors"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/milan-talsaniya-639874418?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-white/10 hover:bg-teal-500 text-white transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="mailto:talsaniyamilan736@gmail.com"
            className="p-3 rounded-full bg-white/10 hover:bg-teal-500 text-white transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
      </div>
    </section>
  );
}

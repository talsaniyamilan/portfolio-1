import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'transport-1',
    description:
      'A web app that shows which dining halls on caA responsive transport management website built with React. It allows users to manage vehicles, drivers, trips, and maintenance details with a simple and user-friendly interface.mpus are open and what they are serving today. Built with React and a basic Express backend.',
    tags: ['React', 'TypeScript', 'JavaScript', 'tailwindcss'],
    color: 'from-teal-500 to-blue-500',
  },
  {
    title: 'farm-buddy-app',
    description:
      'A small platform A responsive agriculture website built with React. It provides useful information about farming, crops, and agricultural resources with a simple and user-friendly design. students can find study partners based on courses and availability. Was a group project for my Software Engineering class.',
    tags: ['React', 'javascript', 'Tailwind'],
    color: 'from-rose-500 to-orange-500',
  },
  {
    title: 'calculator',
    description:
      'A simple app to log daily expenses and see A simple and responsive calculator built with HTML, CSS, and JavaScript. It performs basic calculations with a clean and easy-to-use interface. my money goes. Uses local storage so no sign up needed. My most used personal project.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-violet-500 to-purple-500',
  },
  {
    title: 'Quiz',
    description:
      'A simple quiz website built with HTML, CSS, and JavaScript. It includes multiple-choice questions and provides an interactive way to test your knowledge.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    color: 'from-emerald-500 to-teal-600',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 bg-slate-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Projects</h2>
        <div className="w-12 h-1 bg-teal-500 mb-8" />
        <p className="text-slate-500 mb-10 max-w-xl">
          Here are a few things I've built for class and on my own time. Nothing
          too fancy, but each one taught me something new.
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white rounded-xl p-6 border border-slate-200 hover:shadow-md hover:border-teal-300 transition-all"
            >
              <div
                className={`h-28 rounded-lg bg-gradient-to-br ${project.color} mb-5 flex items-center justify-center`}
              >
                <span className="text-white font-bold text-lg tracking-wide">
                  {project.title}
                </span>
              </div>
              <p className="text-sm text-slate-600 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-slate-100 text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 text-slate-400">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-500 transition-colors"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-teal-500 transition-colors"
                  aria-label={`Open ${project.title} live demo`}
                >
                  <ExternalLink size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const skillGroups = [
  {
    category: 'Languages',
    items: ['JavaScript', 'TypeScript', 'c.language' ,'C++'],
  },
  {
    category: 'Frontend',
    items: ['React', 'HTML/CSS', 'Tailwind CSS', 'JavaScript'],
  },
  {
    category: 'Backend',
    items: ['Node.js', 'DSA', 'Firebase', 'PHP'],
  },
  {
    category: 'Tools',
    items: ['Git', 'VS Code', 'Figma', ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Skills</h2>
        <div className="w-12 h-1 bg-teal-500 mb-8" />
        <p className="text-slate-500 mb-10">
         Skills I've learned through my studies, practice, and projects.
        </p>

        <div className="space-y-8">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="text-sm font-semibold text-slate-400 uppercase tracking-wider mb-3">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="px-4 py-2 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium hover:bg-teal-50 hover:text-teal-700 transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

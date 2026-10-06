export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">About Me</h2>
        <div className="w-12 h-1 bg-teal-500 mb-8" />

        <div className="space-y-4 text-slate-600 leading-relaxed">
          <p>
            I am a Commerce student and Frontend Developer. I enjoy building simple,
            responsive websites and improving my skills in web development. I am
            always interested in learning new technologies and creating better user
            experiences.
          </p>
        </div>

        <div className="mt-10 grid sm:grid-cols-3 gap-4">
          <div className="text-center p-4 rounded-lg bg-slate-50">
            <p className="text-2xl font-bold text-teal-600">Web</p>
            <p className="text-sm text-slate-500">Web Development </p>
          </div>
          <div className="text-center p-4 rounded-lg bg-slate-50">
            <p className="text-2xl font-bold text-teal-600">Frontend</p>
            <p className="text-sm text-slate-500">Frontend Development</p>
          </div>
          <div className="text-center p-4 rounded-lg bg-slate-50">
            <p className="text-2xl font-bold text-teal-600">Full-Stack</p>
            <p className="text-sm text-slate-500">Full-Stack Web Development</p>
          </div>
        </div>
      </div>
    </section>
  );
}

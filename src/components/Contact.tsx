import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setName('');
    setEmail('');
    setMessage('');
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="py-20 px-6 bg-slate-50">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl font-bold text-slate-900 mb-2">Get In Touch</h2>
        <div className="w-12 h-1 bg-teal-500 mb-8" />
        <p className="text-slate-500 mb-8">
    Feel free to contact me for any project or work-related questions.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 mb-8">
          <a
            href="mailto:alex.rivera@email.com"
            className="flex items-center gap-3 text-slate-600 hover:text-teal-600 transition-colors"
          >
            <Mail size={20} className="text-teal-500" />
           talsaniyamilan736@gmail.com
          </a>
          <div className="flex items-center gap-3 text-slate-600">
            <MapPin size={20} className="text-teal-500" />
          ShekhPipariya, Gujarat365435
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-colors text-sm"
            />
            <input
              type="email"
              placeholder="Your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-colors text-sm"
            />
          </div>
          <textarea
            placeholder="Your message"
            required
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-teal-400 focus:ring-2 focus:ring-teal-100 transition-colors text-sm resize-none"
          />
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-teal-600 text-white text-sm font-medium hover:bg-teal-700 transition-colors"
          >
            <Send size={16} />
            Send Message
          </button>
          {sent && (
            <p className="text-sm text-teal-600 font-medium">
              Thanks for your message! I'll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

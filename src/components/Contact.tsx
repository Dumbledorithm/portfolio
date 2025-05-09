import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState({
    type: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: 'success',
          message: 'Message sent successfully! I will get back to you soon.'
        });
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/stars.svg')] opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--secondary-color)]/20 to-[var(--bg-color)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12">
          <div className="inline-block relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-[var(--secondary-color)] to-purple-500 rounded-lg blur opacity-25"></div>
            <h2 className="relative text-4xl font-bold text-[var(--primary-color)] font-star-wars bg-[var(--bg-color)] px-8 py-2 rounded-lg border border-[var(--primary-color)]/30">
              Get in Touch
            </h2>
          </div>
          <p className="mt-4 text-lg text-[var(--secondary-color)]">
            Have a project in mind? Let's talk about it!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[var(--secondary-color)]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg bg-[var(--card-bg)] border border-[var(--secondary-color)]/30 text-[var(--text-color)] focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[var(--secondary-color)]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full rounded-lg bg-[var(--card-bg)] border border-[var(--secondary-color)]/30 text-[var(--text-color)] focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[var(--secondary-color)]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="mt-1 block w-full rounded-lg bg-[var(--card-bg)] border border-[var(--secondary-color)]/30 text-[var(--text-color)] focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]"
                required
              />
            </div>

            {status.message && (
              <div className={`p-4 rounded-lg ${
                status.type === 'success' 
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                {status.message}
              </div>
            )}

            <div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full relative inline-block bg-[var(--primary-color)]/20 text-[var(--primary-color)] px-6 py-3 rounded-lg border border-[var(--primary-color)]/30 hover:bg-[var(--primary-color)]/30 transition-colors overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="relative z-10">
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[var(--primary-color)]/0 via-[var(--primary-color)]/20 to-[var(--primary-color)]/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
              </button>
            </div>
          </form>

          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-[var(--primary-color)] mb-4 font-star-wars">
              Connect with me
            </h3>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/Dumbledorithm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--secondary-color)] hover:text-[var(--primary-color)] transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/shardendu-mishra-192b3b249?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--secondary-color)] hover:text-[var(--primary-color)] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://x.com/Shardendu_07?t=QCbwd3BpTj9G7t6jpBJZ8A&s=09"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--secondary-color)] hover:text-[var(--primary-color)] transition-colors"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 
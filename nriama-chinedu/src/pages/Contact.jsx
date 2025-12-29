import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      alert('Please enter a valid email.');
      return;
    }

    // In real use, replace with your Formspree endpoint
    alert('Message sent successfully! (Demo mode)');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-2xl font-bold text-secondary text-center relative after:content-[''] after:block after:w-14 after:h-[2px] after:bg-secondary after:mt-1 after:mx-auto mb-10">
                Contact Me
            </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Info + Social */}
            <div className=" p-10 text-center ">
              <h3 className="text-2xl font-bold text-secondary mb-6">
                Nriama Chinedu
              </h3>
              <p className="text-gray-700 mb-10 leading-relaxed">
                Enthusiastic Computer Science professional specializing in Front-End Web Development, Mobile App Development, and Graphics Design. Passionate about creating secure, user-friendly solutions and continuous learning.
              </p>

              <div className="flex justify-center gap-8">
                <a href="https://github.com/chinedunriama" target="_blank" rel="noopener noreferrer" className="text-2xl text-secondary hover:scale-110 transition">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com/chinedunriama" target="_blank" rel="noopener noreferrer" className="text-2xl text-secondary hover:scale-110 transition">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com/in/chinedu-nriama" target="_blank" rel="noopener noreferrer" className="text-2xl text-secondary hover:scale-110 transition">
                  <i className="fab fa-linkedin"></i>
                </a>
                <a href="https://wa.me/07016310633" target="_blank" rel="noopener noreferrer" className="text-2xl text-secondary hover:scale-110 transition">
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-10">
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary"
                      placeholder="Your Email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:border-secondary resize-none"
                    placeholder="Your Message"
                  />
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="px-10 py-4 bg-secondary text-white font-semibold rounded-2xl hover:bg-hover-text transition hover:shadow-lg"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
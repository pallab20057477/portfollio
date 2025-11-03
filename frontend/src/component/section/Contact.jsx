import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_687w5on", // Replace with your actual EmailJS Service ID
        "template_cs080ac", // Replace with your actual EmailJS Template ID
        e.target,
        "BkEuxLVXIJRcEMdSb" // Replace with your actual EmailJS Public Key
      );
      
      alert("Message Sent Successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      alert("Oops! Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhoneCall = () => {
    window.open('tel:+917477761558', '_self');
  };

  const handleWhatsApp = () => {
    const message = "Hello! I'd like to get in touch with you.";
    const whatsappUrl = `https://wa.me/917477761558?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleEmail = () => {
    const subject = "Contact from Portfolio";
    const body = "Hello! I'd like to get in touch with you.";
    const mailtoUrl = `mailto:pallabdasdas2005@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoUrl, '_self');
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Get In Touch
          </h2>

          {/* Quick Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {/* Phone Call */}
            <div 
              onClick={handlePhoneCall}
              className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:bg-white/10 hover:shadow-lg hover:shadow-blue-500/25"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">📞</div>
                <h3 className="text-lg font-semibold text-white mb-2">Call Me</h3>
                <p className="text-gray-300 text-sm mb-3">+91 7477761558</p>
                <p className="text-blue-400 text-xs">Tap to call directly</p>
              </div>
            </div>

            {/* WhatsApp */}
            <div 
              onClick={handleWhatsApp}
              className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:bg-white/10 hover:shadow-lg hover:shadow-green-500/25"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">💬</div>
                <h3 className="text-lg font-semibold text-white mb-2">WhatsApp</h3>
                <p className="text-gray-300 text-sm mb-3">Chat on WhatsApp</p>
                <p className="text-green-400 text-xs">Tap to open WhatsApp</p>
              </div>
            </div>

            {/* Email */}
            <div 
              onClick={handleEmail}
              className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10 hover:-translate-y-2 transition-all duration-300 cursor-pointer hover:bg-white/10 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <div className="text-center">
                <div className="text-4xl mb-4">📧</div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300 text-sm mb-3">pallabdasdas2005@gmail.com</p>
                <p className="text-purple-400 text-xs">Tap to compose email</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-white text-center mb-6">Or Send Me a Message</h3>
            <form className="space-y-6 backdrop-blur-sm bg-white/5 p-8 rounded-xl border border-white/10" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 backdrop-blur-sm"
                  placeholder="Name..."
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 backdrop-blur-sm"
                  placeholder="example@gmail.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-white/10 border border-white/20 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10 backdrop-blur-sm"
                  placeholder="Your Message..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] disabled:opacity-50 disabled:cursor-not-allowed backdrop-blur-sm"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              💡 Choose your preferred way to get in touch. I'll get back to you as soon as possible!
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};

import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* DaisyUI Card: Cloud Platform */}
            <div className="card bg-base-200/10 shadow-xl border border-white/10 hover:border-primary hover:shadow-lg transition backdrop-blur-sm">
              <div className="card-body">
                <h3 className="card-title text-white">Cloud Platform</h3>
                <p className="text-gray-300 mb-4 drop-shadow-lg">
                  Scalable cloud infrastructure management with real-time monitoring and automated scaling.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["React", "Node.js", "AWS", "Docker"].map((tech, key) => (
                    <span key={key} className="badge badge-outline badge-primary backdrop-blur-sm">{tech}</span>
                  ))}
                </div>
                <div className="card-actions justify-end">
                  <a href="#" className="btn btn-sm btn-primary backdrop-blur-sm">View Project →</a>
                </div>
              </div>
            </div>
            {/* DaisyUI Card: AI Analytics Dashboard */}
            <div className="card bg-base-200/10 shadow-xl border border-white/10 hover:border-primary hover:shadow-lg transition backdrop-blur-sm">
              <div className="card-body">
                <h3 className="card-title text-white">AI Analytics Dashboard</h3>
                <p className="text-gray-300 mb-4 drop-shadow-lg">
                  ML-powered data visualization platform with predictive analytics and interactive reports.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Python", "TensorFlow", "D3.js", "Flask"].map((tech, key) => (
                    <span key={key} className="badge badge-outline badge-primary backdrop-blur-sm">{tech}</span>
                  ))}
                </div>
                <div className="card-actions justify-end">
                  <a href="#" className="btn btn-sm btn-primary backdrop-blur-sm">View Project →</a>
                </div>
              </div>
            </div>
            {/* DaisyUI Card: E-Commerce Web App */}
            <div className="card bg-base-200/10 shadow-xl border border-white/10 hover:border-primary hover:shadow-lg transition backdrop-blur-sm">
              <div className="card-body">
                <h3 className="card-title text-white">E-Commerce Web App</h3>
                <p className="text-gray-300 mb-4 drop-shadow-lg">
                Key features include a gamified bidding token system with daily rewards, real-time admin dashboard with comprehensive analytics, delivery tracking integration, and auction scheduling with pre-launch timers.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Express.js", "React", "Razorpay", "Socket.io","DaisyUI","Cloudinary"].map((tech, key) => (
                    <span key={key} className="badge badge-outline badge-primary backdrop-blur-sm">{tech}</span>
                  ))}
                </div>
                <div className="card-actions justify-end">
                  <a href="#" className="btn btn-sm btn-primary backdrop-blur-sm">View Project →</a>
                </div>
              </div>
            </div>
            {/* DaisyUI Card: Real-Time Chat App */}
            <div className="card bg-base-200/10 shadow-xl border border-white/10 hover:border-primary hover:shadow-lg transition backdrop-blur-sm">
              <div className="card-body">
                <h3 className="card-title text-white">Real-Time Chat App</h3>
                <p className="text-gray-300 mb-4 drop-shadow-lg">
                Developed a full-stack real-time chat application using React for the frontend and Node.js/Express for the backend, featuring user authentication, instant messaging via Socket.io, and cloud-based image uploads with Cloudinary.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {["Socket.IO", "Express", "React", "DaisyUI","Cloudinary"].map((tech, key) => (
                    <span key={key} className="badge badge-outline badge-primary backdrop-blur-sm">{tech}</span>
                  ))}
                </div>
                <div className="card-actions justify-end">
                  <a href="https://full-stack-chattapp-1.onrender.com" className="btn btn-sm btn-primary backdrop-blur-sm">View Project →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
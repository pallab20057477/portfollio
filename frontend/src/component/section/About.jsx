import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const programmingLanguages = ["C", "Java", "Python", "JavaScript"];
  const frontendSkills = ["React", "Tailwind CSS", "HTML5/CSS3", "Bootstrap"];
  const backendSkills = ["Node.js", "Express.js", "MongoDB", "MySQL", "PHP"];
  const tools = ["Git", "GitHub", "VS Code", "Postman", "Canva", "Thunder Client"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all backdrop-blur-sm bg-white/5 mb-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-4">👋 Hello, I'm Pallab Das</h3>
              <p className="text-gray-300 text-lg leading-relaxed drop-shadow-lg">
                A passionate and ambitious Computer Science student currently pursuing my Bachelor of Computer Application 
                at Maulana Abul Kalam Azad University of Technology. I'm deeply fascinated by the world of software development 
                and constantly exploring new technologies to bring innovative ideas to life.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 rounded-xl hover:-translate-y-1 transition-all backdrop-blur-sm bg-white/5 border border-white/10">
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="text-lg font-semibold text-white mb-2">My Mission</h4>
                <p className="text-gray-300 text-sm">
                  To create meaningful, user-centric applications that solve real-world problems and make a positive impact.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl hover:-translate-y-1 transition-all backdrop-blur-sm bg-white/5 border border-white/10">
                <div className="text-3xl mb-3">🚀</div>
                <h4 className="text-lg font-semibold text-white mb-2">What I Do</h4>
                <p className="text-gray-300 text-sm">
                  Full-stack development with a focus on modern web technologies, creating responsive and scalable applications.
                </p>
              </div>

              <div className="text-center p-6 rounded-xl hover:-translate-y-1 transition-all backdrop-blur-sm bg-white/5 border border-white/10">
                <div className="text-3xl mb-3">💡</div>
                <h4 className="text-lg font-semibold text-white mb-2">My Approach</h4>
                <p className="text-gray-300 text-sm">
                  Clean code, best practices, and continuous learning to deliver high-quality solutions that exceed expectations.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all backdrop-blur-sm bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-white">💻 Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {programmingLanguages.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-blue-500/10 text-blue-400 py-2 px-4 rounded-full text-sm font-medium hover:bg-blue-500/20 
                                hover:shadow-[0_4px_12px_rgba(59,130,246,0.3)] transition-all duration-300 backdrop-blur-sm border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all backdrop-blur-sm bg-white/5 border border-white/10">
                  <h3 className="text-xl font-bold mb-4 text-white">🎨 Frontend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-cyan-500/10 text-cyan-400 py-2 px-4 rounded-full text-sm font-medium hover:bg-cyan-500/20 
                                  hover:shadow-[0_4px_12px_rgba(6,182,212,0.3)] transition-all duration-300 backdrop-blur-sm border border-cyan-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="rounded-xl p-6 hover:-translate-y-1 transition-all backdrop-blur-sm bg-white/5 border border-white/10">
                  <h3 className="text-xl font-bold mb-4 text-white">⚙️ Backend Development</h3>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-purple-500/10 text-purple-400 py-2 px-4 rounded-full text-sm font-medium hover:bg-purple-500/20 
                                  hover:shadow-[0_4px_12px_rgba(147,51,234,0.3)] transition-all duration-300 backdrop-blur-sm border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all backdrop-blur-sm bg-white/5 border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-white">🛠️ Tools & Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-green-500/10 text-green-400 py-2 px-4 rounded-full text-sm font-medium hover:bg-green-500/20 
                                hover:shadow-[0_4px_12px_rgba(34,197,94,0.3)] transition-all duration-300 backdrop-blur-sm border border-green-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all backdrop-blur-sm bg-white/5">
              <h3 className="text-xl font-bold mb-4 text-white">🏫 Education</h3>
              <div className="space-y-4 text-gray-300 drop-shadow-lg">
                <div>
                  <h4 className="font-semibold text-white">
                    Bachelor of Computer Application
                  </h4>
                  <p className="text-blue-400">Maulana Abul Kalam Azad University of Technology</p>
                  <p className="text-sm text-gray-400">2023 - Present</p>
                  <p className="text-sm mt-2">
                    Relevant coursework: Data Structures, Algorithms, Web Development, Database Systems, Cloud Computing
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all backdrop-blur-sm bg-white/5">
              <h3 className="text-xl font-bold mb-4 text-white">🎯 Career Goals</h3>
              <div className="space-y-4 text-gray-300 drop-shadow-lg">
                <div>
                  <h4 className="font-semibold text-white mb-2">Short-term Goals</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Master full-stack development technologies</li>
                    <li>Build a strong portfolio of projects</li>
                    <li>Contribute to open-source projects</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-2">Long-term Vision</h4>
                  <ul className="list-disc list-inside text-sm space-y-1">
                    <li>Become a senior software engineer</li>
                    <li>Lead innovative development teams</li>
                    <li>Create impactful software solutions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              🌟 Always eager to learn new technologies and take on challenging projects. 
              Let's connect and build something amazing together!
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
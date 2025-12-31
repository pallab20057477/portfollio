import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-20 md:pt-0"
    >
      {/* Foreground Content */}
      <RevealOnScroll>
        <div className="z-10 px-4 relative w-full max-w-6xl mx-auto">
          {/* Main content container with flex layout */}
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-12">
            {/* Profile Picture with floating animation - Left side */}
            <div className="flex-shrink-0 w-full md:w-auto flex justify-center md:justify-start">
              <div className="relative animate-float w-32 h-32 sm:w-40 sm:h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-blue-500/20 shadow-2xl hover:scale-105 transition-transform duration-300 relative">
                  <img
                    src="/pallab.jpg"
                    alt="Pallab Das"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500 relative z-10"
                    onLoad={() => console.log("Image loaded successfully")}
                    onError={(e) => {
                      console.error("Image failed to load:", e.target.src);
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) {
                        e.target.nextSibling.style.display = 'flex';
                      }
                    }}
                  />
                  {/* Fallback if image doesn't load */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center text-white text-2xl font-bold absolute inset-0 z-20" style={{display: 'none'}}>
                    PD
                  </div>
                </div>
                {/* Animated border effect */}
                <div className="absolute inset-0 rounded-full border-4 border-transparent bg-gradient-to-r from-blue-500 to-cyan-400 animate-spin -z-10" style={{animationDuration: '3s'}}></div>
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-400/20 blur-xl animate-pulse -z-20"></div>
              </div>
            </div>

            {/* Text content - Right side */}
            <div className="text-center md:text-left flex-1 w-full md:w-auto">
              {/* Name with typing animation */}
              <div className="mb-6">
                <h1 className="text-3xl sm:text-4xl md:text-7xl font-bold leading-tight animate-fade-in-up">
                  <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                    Hi, I'm 
                  </span>
                  <span className="text-white animate-custom-bounce inline-block ml-2">
                    Pallab Das
                  </span>
                </h1>
              </div>

              {/* Description with staggered animation */}
              <div className="mb-8 max-w-lg">
                <p className="text-gray-300 text-lg animate-fade-in-up-delay drop-shadow-lg">
                  I'm a full-stack developer who loves crafting clean, scalable web
                  applications. My goal is to build solutions that offer both
                  exceptional performance and a delightful user experience. I'm a
                  full-stack developer who loves crafting clean, scalable web
                  applications. My goal is to build solutions that offer both
                  exceptional performance and a delightful user experience.
                </p>
              </div>

              {/* Buttons with hover animations */}
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up-delay-2">
                <a
                  href="#projects"
                  className="btn btn-primary transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm"
                >
                  <span className="relative z-10">View Projects</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </a>

                <a
                  href="#contact"
                  className="btn btn-outline btn-primary transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/25 border-2 hover:border-cyan-400 backdrop-blur-sm"
                >
                  <span className="relative z-10">Contact Me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
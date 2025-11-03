import { RevealOnScroll } from "../RevealOnScroll";

export const Resume = () => {
  const handleDownload = () => {
    // Create a link element
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // Make sure to add your resume.pdf file to the public folder
    link.download = 'Pallab_Das_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section
      id="resume"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Download Resume
          </h2>

          <div className="backdrop-blur-sm bg-white/5 p-8 rounded-xl border border-white/10 hover:-translate-y-1 transition-all duration-300">
            <div className="mb-6">
              <div className="text-6xl mb-4">📄</div>
              <h3 className="text-xl font-semibold text-white mb-4">Pallab Das - Resume</h3>
              <p className="text-gray-300 mb-6">
                Download my comprehensive resume in PDF format to learn more about my skills, 
                experience, and qualifications.
              </p>
            </div>

            <button
              onClick={handleDownload}
              className="btn btn-primary transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 backdrop-blur-sm px-8 py-4 text-lg font-medium"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Download Resume (PDF)
            </button>

            {/* <div className="mt-6 text-sm text-gray-400">
              <p>💡 Make sure to add your resume.pdf file to the public folder</p>
            </div> */}
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              💡 For more detailed information about my skills and background, 
              check out the{" "}
              <a href="#about" className="text-blue-400 hover:text-cyan-400 transition-colors">
                About section
              </a>
              .
            </p>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
}; 
import React from 'react';

function Projects() {
  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border p-4 shadow-md hover:scale-105 transition-transform">
            <h5 className="font-bold">AI-Based Job Finder</h5>
            <p className="mt-2">
              Developed an AI-driven job finder application during the SKN Pandharpur Hackathon 2024. Contributed to both frontend and backend development, implementing AI algorithms to match job seekers with relevant opportunities. Achieved 5th place.
            </p>
            <img src="/path/to/your/image/earth.png" alt="AI-Based Job Finder" className="mt-4 w-full h-auto" />
            <a href="https://github.com/ratn7921/AI-Job-Finder" className="text-blue-500" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>

          <div className="border p-4 shadow-md hover:scale-105 transition-transform">
            <h5 className="font-bold">Job Portfolio Builder</h5>
            <p className="mt-2">
              Created a customizable tool for building portfolio websites, featuring a variety of templates and drag-and-drop components. Implemented live previews to enhance user experience and flexibility in design choices.
            </p>
            <a href="https://github.com/ratn7921/Job-Portfolio-Builder" className="text-blue-500" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>

          <div className="border p-4 shadow-md hover:scale-105 transition-transform">
            <h5 className="font-bold">Streamer: A Video Streaming Application</h5>
            <p className="mt-2">
              Developed a robust video streaming application that supports seamless uploads, storage, and streaming of videos. Implemented a secure backend with Spring Data JPA to manage video metadata.
            </p>
            <a href="https://github.com/ratn7921/Streamer" className="text-blue-500" target="_blank" rel="noopener noreferrer">
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;

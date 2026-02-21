import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa';
import IMG from '../assets/WhatsApp Image 2024-10-12 at 11.19.04 AM.jpeg';

const Resume = () => {
    return (
        <div className="bg-gray-100 min-h-screen p-4 sm:p-8">
            <div className="max-w-4xl mx-auto bg-white shadow-lg flex flex-col md:flex-row">
                {/* Left */}
                <div className="w-full md:w-1/3 bg-black text-white p-6 sm:p-8">
                    <img src={IMG} alt="Ratnakar Dashrath Yadav" className="w-full h-auto mb-4 rounded" />
                    <h1 className="text-2xl sm:text-3xl font-bold mb-2">Ratnakar Dashrath Yadav</h1>
                    <h2 className="text-lg sm:text-xl font-semibold mb-4">DEVELOPER</h2>

                    <div className="mb-6">
                        <p className="text-sm sm:text-base">Pune | <a href="mailto:ratnayadav9171@gmail.com" className="text-white underline">ratnayadav9171@gmail.com</a> | LinkedIn | 9518904616 | GitHub</p>
                    </div>

                    <div className="mb-6">
                        <h3 className="font-semibold">SUMMARY</h3>
                        <p className="text-sm sm:text-base mt-2">
                            Highly motivated Java Developer skilled in building scalable full-stack applications using Spring Boot and React. Experienced in developing REST APIs, working in Agile teams, and integrating AI solutions using Spring AI. Quick learner with strong problem-solving and debugging skills.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-semibold">CONTACT</h3>
                        <p className="text-sm mt-2">Pune, India</p>
                        <p className="text-sm mt-1"><FaPhoneAlt className="inline mr-2" />9518904616</p>
                        <p className="text-sm mt-1"><FaEnvelope className="inline mr-2" />ratnayadav9171@gmail.com</p>
                        <p className="text-sm mt-1"><FaLinkedin className="inline mr-2" />linkedin.com/in/your-profile</p>
                        <p className="text-sm mt-1"><FaGithub className="inline mr-2" />github.com/ratn7921</p>
                    </div>
                </div>

                {/* Right */}
                <div className="w-full md:w-2/3 p-6 sm:p-8">
                    <section className="mb-6">
                        <h2 className="text-xl font-bold mb-3">PROFESSIONAL & TECHNICAL SKILLS</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="font-semibold">Professional Skills</h4>
                                <ul className="list-disc pl-5 text-sm mt-2">
                                    <li>Design Understanding</li>
                                    <li>Problem Solving</li>
                                    <li>Team Collaboration</li>
                                    <li>Visual Design</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="font-semibold">Technical Skills</h4>
                                <p className="text-sm mt-2">Java, Spring Boot, Spring AI, React, HTML, CSS, JavaScript, MySQL, REST APIs, Git, Agile, WebSocket, JIRA, Postman</p>
                            </div>
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-bold mb-3">PROJECTS</h2>

                        <div className="mb-4">
                            <h4 className="font-semibold">Google Drive (Jan 2023 – May 2023)</h4>
                            <p className="text-sm mt-1">Created a cloud-based file storage system with secure user authentication. Enabled file upload, download, delete, and folder creation using REST APIs and React UI. Implemented back-end logic using Spring Boot and MySQL.</p>
                        </div>

                        <div className="mb-4">
                            <h4 className="font-semibold">Ocean Sentinel (Jun 2023 – Aug 2023)</h4>
                            <p className="text-sm mt-1">Built a web app using Node.js and React to help combat whale hunting and ocean crimes. Used maps APIs and a clean React UI for visualization and reporting.</p>
                        </div>

                        <div className="mb-4">
                            <h4 className="font-semibold">MovieMind — AI-Powered Movie Recommendation</h4>
                            <p className="text-sm mt-1">Full-stack cinematic platform with intelligent recommendations using ML. React (Vite) frontend with Tailwind and Framer Motion; Node.js/Express API gateway; Python AI backend using scikit-learn for similarity-based recommendations. Live demo: <a href="https://moviemind-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">moviemind-six.vercel.app</a></p>
                        </div>

                        <div className="mb-4">
                            <h4 className="font-semibold">PHP Hotel Management</h4>
                            <p className="text-sm mt-1">Lightweight hotel booking system built with PHP and MySQL featuring admin panel, payment integration, and PDF receipt generation. Deployment example: <a href="https://ratna9171-hotel2026.free.nf/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">ratna9171-hotel2026.free.nf</a></p>
                        </div>

                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-bold mb-3">EXPERIENCE</h2>
                        <div>
                            <h4 className="font-semibold">Project Engineer (Academic Role) — Jan 2023 - Jun 2023</h4>
                            <ul className="list-disc pl-5 text-sm mt-2">
                                <li>Implemented full-stack applications using Java, Spring Boot, and React.</li>
                                <li>Collaborated in 3+ group projects, taking lead on backend development.</li>
                                <li>Followed Agile process with sprint-based deliveries; participated in code reviews and debugging sessions.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-bold mb-3">EDUCATION</h2>
                        <div className="mb-3">
                            <h4 className="font-semibold">Bachelor of Computer Application — Sep 2019 - Sep 2023</h4>
                            <p className="text-sm">Institute of computer and management studies Pandharpur (ICMS), Pandharpur — CGPA: 7.84. Completed key projects using Java, Spring Boot, React, Spring AI. Active participant in technical clubs and coding contests.</p>
                        </div>

                        <div>
                            <h4 className="font-semibold">MCA in AI and ML — 2026 - 2028</h4>
                            <p className="text-sm">University punysholk solapur, College KBP Pandharpur (starting 2026). Focus on AI, machine learning, and advanced software engineering.</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">ADDITIONAL INFORMATION</h2>
                        <p className="text-sm">Languages: English, Hindi, Marathi.</p>
                        <p className="text-sm mt-1">Certifications & Awards: AWS Certified Cloud Practitioner. Python Programming Certificate: <a href="https://www.coursera.org/api/certificate.v1/pdf/B4NXGQMHKR8G" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">Coursera Certificate</a></p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Resume;

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
                    <h2 className="text-lg sm:text-xl font-semibold mb-4">MCA Student | Full-Stack Developer</h2>

                    <div className="mb-4">
                        <p className="text-sm">Santhpeth, Sangolnaka, Pandharpur</p>
                        <p className="text-sm mt-1"><FaPhoneAlt className="inline mr-2" />9518904616 (Work)</p>
                        <p className="text-sm mt-1"><FaEnvelope className="inline mr-2" />ratnakardashrathyadav1228@gmail.com</p>
                        <p className="text-sm mt-1"><FaLinkedin className="inline mr-2" /><a href="https://www.linkedin.com/in/ratnakar-dashrath-yadav" target="_blank" rel="noopener noreferrer" className="text-white underline">linkedin.com/in/ratnakar-dashrath-yadav</a></p>
                        <p className="text-sm mt-1"><FaGithub className="inline mr-2" /><a href="https://github.com/ratn7921" target="_blank" rel="noopener noreferrer" className="text-white underline">github.com/ratn7921</a></p>
                        <p className="text-sm mt-1">Portfolio: <a href="https://resumeofratnakar.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-white underline">resumeofratnakar.vercel.app</a></p>
                    </div>

                    <div className="mb-4">
                        <h3 className="font-semibold">SUMMARY</h3>
                        <p className="text-sm mt-2">Highly motivated Java Developer skilled in building scalable full-stack applications using Spring Boot and React. Experienced in developing REST APIs, working in Agile teams, and integrating AI solutions. Quick learner with strong problem-solving and debugging skills.</p>
                    </div>
                </div>

                {/* Right */}
                <div className="w-full md:w-2/3 p-6 sm:p-8">
                    <section className="mb-6">
                        <h2 className="text-xl font-bold mb-3">TOP SKILLS</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                            <div>
                                <ul className="list-disc pl-5">
                                    <li>Full-Stack Development</li>
                                    <li>Java, Spring Boot</li>
                                    <li>React, JavaScript</li>
                                    <li>Python & Machine Learning</li>
                                </ul>
                            </div>
                            <div>
                                <ul className="list-disc pl-5">
                                    <li>REST APIs, WebSocket</li>
                                    <li>MySQL, MongoDB</li>
                                    <li>Git, CI/CD</li>
                                    <li>Deep Learning & MLOps concepts</li>
                                </ul>
                            </div>
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-bold mb-3">PROJECTS & LINKS</h2>
                        <div className="mb-3 text-sm">
                            <h4 className="font-semibold">AQUA</h4>
                            <p>AI-powered marine conservation & water management platform. Live: <a href="https://aqua-x1qc.onrender.com/dashboard-user" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">aqua-x1qc.onrender.com/dashboard-user</a></p>
                        </div>

                        <div className="mb-3 text-sm">
                            <h4 className="font-semibold">MovieMind</h4>
                            <p>AI-based movie recommendation platform. Demo: <a href="https://moviemind-six.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">moviemind-six.vercel.app</a></p>
                        </div>

                        <div className="mb-3 text-sm">
                            <h4 className="font-semibold">PHP Hotel Management</h4>
                            <p>Lightweight hotel booking system (PHP, MySQL). Example deployment: <a href="https://ratna9171-hotel2026.free.nf/" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">ratna9171-hotel2026.free.nf</a></p>
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-bold mb-3">EXPERIENCE</h2>
                        <div className="text-sm">
                            <h4 className="font-semibold">Project Engineer (Academic Role) — Jan 2023 - Nov 2023</h4>
                            <ul className="list-disc pl-5 mt-2">
                                <li>Implemented full-stack applications using Java, Spring Boot, and React.</li>
                                <li>Led backend development in group projects and followed Agile practices.</li>
                            </ul>
                        </div>
                    </section>

                    <section className="mb-6">
                        <h2 className="text-xl font-bold mb-3">EDUCATION</h2>
                        <div className="mb-3 text-sm">
                            <h4 className="font-semibold">Punyashlok Ahilyadevi Holkar Solapur University, Solapur</h4>
                            <p>Bachelor of Computer Application — Aug 2021 - Jun 2024</p>
                        </div>
                        <div className="mb-3 text-sm">
                            <h4 className="font-semibold">Vivek Vardhini Vidyalaya Jr College, Pandharpur</h4>
                            <p>High School (Commerce) — Jun 2019 - Apr 2021</p>
                        </div>
                        <div className="text-sm">
                            <h4 className="font-semibold">Punyashlok Ahilyadevi Holkar Solapur University</h4>
                            <p>MCA in AI and ML — starting Jan 2026</p>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold mb-3">ADDITIONAL</h2>
                        <p className="text-sm">Languages: Hindi (Full Professional), English (Full Professional), Marathi (Native/Bilingual)</p>
                        <p className="text-sm mt-2">Certifications: Machine Learning, Programming for Everybody (Coursera), AWS Certified Cloud Practitioner, Advanced Learning Algorithms.</p>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default Resume;

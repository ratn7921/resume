import React from 'react';
import image from '../assets/6644b34c91f57f8d40a4eaa94e3cb797 - Copy.png'
import TypingEffect from '../TypingEffect'

function Header() {
  return (
    <header className="text-center py-10">
      <img src={image} alt="Profile Picture" className="w-40 h-40 rounded-full mx-auto"/>
      <h1 className="text-4xl font-bold mt-4">Ratnakar Dashrath Yadav</h1>
      <p className="text-xl text-gray-600">Software Developer</p>
      <p className="mt-2 text-gray-500">ratnakardashrathyadav1228@gmail.com | 9518904616 | Pandharpur</p>

      <div className="flex justify-center space-x-6 mt-6">
        <a href="https://github.com/ratn7921" target="_blank" className="text-blue-500">GitHub</a>
        <a href="https://x.com/ratnakarspeeks" target="_blank" className="text-blue-500">Twitter</a>
        <a href="https://www.linkedin.com/in/ratnakar-dashrath-yadav/" target="_blank" className="text-blue-500">LinkedIn</a>
        <a href="https://www.example.com/portfolio" target="_blank" className="text-blue-500">Portfolio</a>
      </div>

    </header>
  );
}

export default Header;

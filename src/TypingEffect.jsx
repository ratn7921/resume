import React, { useEffect, useState } from 'react';
import './TypingEffect.css'; // Make sure you have the CSS file for styling

const TypingEffect = ({ text, speed = 100 }) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let index = 0; // Start typing from the beginning of the text

    const typingEffect = () => {
      if (index < text.length) {
        setTypedText((prev) => prev + text.charAt(index)); // Append next character
        index++; // Move to the next character
        setTimeout(typingEffect, speed); // Call the function again after the delay
      }
    };

    typingEffect(); // Start the typing effect

    // Clean up function to avoid memory leaks
    return () => {
      index = text.length; // Prevent further updates if the component unmounts
    };
  }, [text, speed]);

  return <h3 className="typing-effect">{typedText}</h3>; // Using h3 for better semantics
};

export default TypingEffect;

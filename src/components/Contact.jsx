import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://brave-connection.up.railway.app/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Message sent successfully');
        // Optionally reset form data
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Error sending message');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message');
    }
  };

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-semibold">Name:</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="border rounded w-full py-2 px-3" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-semibold">Email:</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="border rounded w-full py-2 px-3" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-semibold">Message:</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} className="border rounded w-full py-2 px-3" rows="4" required></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

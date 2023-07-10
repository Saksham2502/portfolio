import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [topic, setTopic] = useState('General Inquiry');

  const handleSubmit = (e) => {
    e.preventDefault();
    let data={
        email:email,
        topic:topic
    }
    fetch("https://contact-saksham.onrender.com/portfolio/contactus",{
        method:"POST",
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    
    .then(async (response)=>
    {
        response=await response.json();
        alert(response.status);
    })
    setEmail('');
    setTopic('General Inquiry');
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Enter your email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="topic">Topic:</label>
          <select
            id="topic"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            required
          >
            
            <option value="General Inquiry">General Inquiry</option>
            <option value="Support">About Project</option>
            <option value="About Internships">About Internships</option>
            <option value="About My work">About My work</option>
            <option value="Others">Others</option>
            
          </select>
        </div>
        <button type="submit">Send Request</button>
      </form>
    </section>
  );
};

export default Contact;

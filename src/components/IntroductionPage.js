import React from 'react';
import './IntroductionPage.css'; // Import the CSS file

const IntroductionPage = () => {


  const gotolink =(link)=>
  {
      window.open(link ,'_blank')
  }
  return (
    <section className="container" id='introduction'>
      <h1>Welcome to My Website</h1>
      <div className="intro">
        <p>Hello, I'm Saksham Bansal,</p>
        <p>a student at IIT Ropar pursuing my B.Tech in mathematics and Computing.</p>
        <p>I'm passionate about DSA and Machine Learning</p>
        <p>On this website, you'll find information about my projects, achievements, and skills.</p>
      </div>
      <div className="image-box"></div>
      <div className="contact-info">
        <h2>Contact Information</h2>
        <ul>
          <li>Email :  2021mcb1243@iitrpr.ac.in</li>   
          <li onClick={()=>gotolink('https://www.linkedin.com/in/saksham-bansal-580071247/')}>LinkedIn : Saksham Bansal</li>
          <li onClick={()=>gotolink('https://github.com/Saksham2502')}>Github : Saksham2502</li>
        </ul>
      </div>
    </section>
  );
};

export default IntroductionPage;

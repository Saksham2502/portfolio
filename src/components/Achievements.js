import React, { useEffect, useState } from 'react';
import './Achievements.css';

const Achievements = () => {

   
    const achievements = [
        { title: 'JEE Advanced Rank', content: 'AIR - 1979' },
        { title: 'JEE Mains Rank', content: 'AIR -3601' },
        { title: 'Core Team Member at Cultural Fest', content: 'will be managing the fest' },
        { title: 'UFMC member' }
    ];

    return (
        <section id="achievements" className="achievements">
            <h2>My Achievements</h2>
            <div className="achievements-grid">
                {achievements.map((achievement, index) => (
                    <div className="achievement-box" key={index}>
                        <div className="front">
                            <strong>{achievement.title}</strong>
                        </div>
                        <div className="back">
                            <p>{achievement.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;

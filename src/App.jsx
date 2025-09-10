import React from 'react';
import Navbar from './components/Navbar';
import StoreBadges from './components/StoreBadges';
import './App.css';
import WavySplit from './components/Wavysplit';

function App() {
    return (
        <div className="app-container">
            <div className="bg-decoration"></div>
            
            <Navbar />
            <div className="star-decoration star-left">✦</div>
            <div className="star-decoration star-right">✧˖°。</div>
            <div className="star-decoration star-bottom">✦</div>
            
            <main className="hero-section">
                <div >
                    <div >
                        <h2 className="hero-title">
                            INDIA'S FIRST<br />
                        </h2>
                        <h1 className="hero-main-title">
                            <div>
                                <span className="quick-text">QUICK</span> SERVICE APP
                            </div>
                        </h1>
                        <p className="hero-subtitle">
                            On-demand home services to empower<br />
                            urban households
                        </p>
                    </div>
                </div>
                <StoreBadges />
                <div className="hero-illustrations">
                    <img className="illustration left-svg" src="/svg-image-1%202.svg" alt="Cleaner Illustration Left" />
                    <img className="illustration right-svg" src="/svg-image-1.svg" alt="Cleaner Illustration Right" />
                </div>
            </main>

            <WavySplit />
            <div>
                
            </div>
        </div>
    );
}

export default App;
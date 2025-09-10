import React from 'react';

const WavySplit = () => {
    return (
        <div className="h-screen bg-white relative overflow-hidden">
            <svg 
              className="absolute inset-0 w-full h-full" 
              viewBox="0 0 1200 800" 
              preserveAspectRatio="none"
            >
              {/* Pink background */}
              <path
                d="M0,0 L1200,0 L1200,800 L0,800 Z"
                fill="#0F1740"
              />
              {/* Top wave cutout */}
              <path
                d="M0,0 L0,25 C300,-15 900,65 1200,25 L1200,0 Z"
                fill="#ffffff"
              />
              {/* Bottom wave cutout */}
              <path
                d="M0,800 L0,700 C300,740 900,660 1200,700 L1200,800 Z"
                fill="#ffffff"
              />
            </svg>
            <div className="relative z-10 h-full flex">
              <div className="flex-1 flex items-center justify-center">
                <div className="text-4xl font-bold uppercase tracking-wider text-pink-500">
                  {/* ONE */}
                </div>
              </div>
              <div className="flex-1 flex items-center justify-center">
                <div className="text-4xl font-bold uppercase tracking-wider text-white">
                  {/* MANY */}
                </div>
              </div>
            </div>
        </div>
    );
}


export default WavySplit;
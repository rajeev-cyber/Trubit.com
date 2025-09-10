import React from 'react';

const StoreBadges = () => {
    return (
        <div className="store-badges">
            <a
                className="store-badge store-badge--google"
                href="https://play.google.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Get it on Google Play"
            >
                <img className="store-badge__icon" src="/Play Store.svg" alt="Google Play" draggable={false} />
                <div className="store-badge__text">
                    <span className="store-badge__overline">GET IT ON</span>
                    <span className="store-badge__title">Google Play</span>
                </div>
            </a>

            <a
                className="store-badge store-badge--apple"
                href="https://www.apple.com/app-store/"
                target="_blank"
                rel="noreferrer"
                aria-label="Download on the App Store"
            >
                <img className="store-badge__icon" src="/Apple.svg" alt="Apple App Store" draggable={false} />
                <div className="store-badge__text">
                    <span className="store-badge__overline">Download on the</span>
                    <span className="store-badge__title">App Store</span>
                </div>
            </a>
        </div>
    );
}

export default StoreBadges;
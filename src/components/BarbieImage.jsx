import React from 'react';
import { useBarbie } from '../context/BarbieContext';

const BarbieImage = ({ previewMode = false }) => {
    const { outfit } = useBarbie();

    return (
        <div className="barbie-image-wrapper" style={{
            position: 'relative',
            width: previewMode ? '250px' : '300px',
            height: previewMode ? '400px' : '500px',
            transition: 'all 0.3s ease',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            {/* Placeholder shape for Barbie Body */}
            <div style={{
                width: '60%',
                height: '90%',
                background: '#FFD1DC', // Skin tone
                borderRadius: '40px',
                position: 'absolute',
                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                zIndex: 1
            }}></div>

            {/* Base "Face" */}
            <div style={{
                width: '30%',
                height: '15%',
                background: '#FFE0BD',
                borderRadius: '50%',
                position: 'absolute',
                top: '5%',
                zIndex: 2
            }}></div>

            {/* Outfit Layer */}
            {outfit ? (
                // Use image if available, else fallback logic could go here
                // For now assuming we might just rely on the 'color' to tint a dress shape if image fails
                <>
                    <img
                        src={outfit.src}
                        alt={outfit.name}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            zIndex: 3,
                            filter: 'drop-shadow(0 0 5px rgba(255,20,147,0.5))'
                        }}
                        onError={(e) => {
                            e.target.style.display = 'none';
                            // Show fallback dress shape
                            const fallback = e.target.nextSibling;
                            if (fallback) fallback.style.display = 'block';
                        }}
                    />
                    <div className="fallback-dress" style={{
                        display: 'none',
                        width: '70%',
                        height: '50%',
                        background: outfit.color,
                        position: 'absolute',
                        top: '30%',
                        borderRadius: '20px 20px 10px 10px',
                        zIndex: 3,
                        opacity: 0.8
                    }}></div>
                </>
            ) : (
                // Default Base Dress
                <div style={{
                    width: '50%',
                    height: '40%',
                    background: '#FF69B4',
                    position: 'absolute',
                    top: '30%',
                    borderRadius: '10px 10px 30px 30px',
                    zIndex: 2,
                }}></div>
            )}

            {/* Sparkle overlay */}
            <div className="sparkle-overlay" style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                pointerEvents: 'none',
                zIndex: 4,
            }} />
        </div>
    )
}
export default BarbieImage;

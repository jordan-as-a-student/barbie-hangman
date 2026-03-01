import React from 'react';
import { useBarbie } from '../../context/BarbieContext';
import { availableBarbies } from '../../data/barbies';
import BarbieImage from '../BarbieImage';

const BarbieSelectionScreen = () => {
    const {
        barbieName,
        setBarbieName,
        selectedBarbieIndex,
        setSelectedBarbieIndex,
        finishSetup
    } = useBarbie();

    const handleNext = () => {
        if (selectedBarbieIndex < availableBarbies.length - 1) {
            setSelectedBarbieIndex(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (selectedBarbieIndex > 0) {
            setSelectedBarbieIndex(prev => prev - 1);
        }
    };

    return (
        <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url("/images/background.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            zIndex: 100
        }}>

            <h1 style={{ color: '#FFF', fontFamily: 'var(--font-script)', fontSize: '3.5rem', textShadow: '2px 2px 4px rgba(0,0,0,0.3)', marginBottom: '20px' }}>
                Choose My Barbie
            </h1>

            {/* Name Input Area */}
            <input
                value={barbieName}
                onChange={(e) => setBarbieName(e.target.value)}
                placeholder="Name your Barbie"
                style={{
                    background: 'rgba(255,255,255,0.8)',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '10px 20px',
                    textAlign: 'center',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '1.5rem',
                    color: '#FF1493',
                    outline: 'none',
                    width: '300px',
                    marginBottom: '30px',
                    boxShadow: 'inset 0 2px 5px rgba(0,0,0,0.1), 0 5px 15px rgba(0,0,0,0.2)'
                }}
            />

            {/* Scrolling Carousel Area */}
            <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '40px'
            }}>
                <button
                    onClick={handlePrev}
                    disabled={selectedBarbieIndex === 0}
                    style={{
                        background: '#FFF',
                        color: '#FF1493',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        fontSize: '2rem',
                        cursor: selectedBarbieIndex === 0 ? 'default' : 'pointer',
                        opacity: selectedBarbieIndex === 0 ? 0.3 : 1,
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                    }}
                >
                    ◄
                </button>

                {/* The Barbie Preview Stage */}
                <div style={{
                    width: '280px',
                    height: '400px',
                    background: 'rgba(255,255,255,0.2)',
                    borderRadius: '20px',
                    border: '4px solid #fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: 'inset 0 0 20px rgba(255,105,180,0.3), 0 10px 30px rgba(0,0,0,0.3)'
                }}>
                    {/* Fake reflection */}
                    <div style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 50%)',
                        pointerEvents: 'none',
                        zIndex: 10
                    }} />

                    {/* Rendering the current Barbie image directly from the list */}
                    <img
                        src={availableBarbies[selectedBarbieIndex].src}
                        alt="Selected Barbie"
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'contain',
                            filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.2))'
                        }}
                    />
                </div>

                <button
                    onClick={handleNext}
                    disabled={selectedBarbieIndex === availableBarbies.length - 1}
                    style={{
                        background: '#FFF',
                        color: '#FF1493',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        fontSize: '2rem',
                        cursor: selectedBarbieIndex === availableBarbies.length - 1 ? 'default' : 'pointer',
                        opacity: selectedBarbieIndex === availableBarbies.length - 1 ? 0.3 : 1,
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                    }}
                >
                    ►
                </button>
            </div>

            {/* Save Button */}
            <button
                onClick={finishSetup}
                style={{
                    background: '#FFF',
                    color: '#FF1493',
                    border: 'none',
                    borderRadius: '30px',
                    padding: '15px 40px',
                    fontFamily: 'var(--font-ui)',
                    fontSize: '1.5rem',
                    fontWeight: '900',
                    cursor: 'pointer',
                    boxShadow: '0 8px 15px rgba(0,0,0,0.2)',
                    textTransform: 'uppercase',
                    transition: 'transform 0.2s'
                }}
            >
                Save Barbie
            </button>
        </div>
    );
};
export default BarbieSelectionScreen;

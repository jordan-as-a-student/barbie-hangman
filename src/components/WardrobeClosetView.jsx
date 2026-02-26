import React, { useState } from 'react';
import { useBarbie } from '../context/BarbieContext';
import { outfitCategories, outfits } from '../data/outfits';
import BarbieImage from './BarbieImage';

const WardrobeClosetView = () => {
    const { toggleWardrobe, changeOutfit, outfit: currentOutfit } = useBarbie();
    const [selectedCategory, setSelectedCategory] = useState('princess');

    return (
        <div className="wardrobe-closet-view" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(135deg, #FFB6C1, #FF1493)',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            animation: 'fadeIn 0.5s ease-out',
            boxSizing: 'border-box'
        }}>
            <div className="closet-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <h1 style={{ color: '#FFF', fontFamily: 'var(--font-script)', fontSize: '3rem', margin: 0, textShadow: '2px 2px 4px rgba(0,0,0,0.3)' }}>
                    Glamour Closet ✨
                </h1>
                <button
                    onClick={toggleWardrobe}
                    style={{
                        background: '#FFF',
                        color: '#FF1493',
                        border: 'none',
                        borderRadius: '50%',
                        width: '50px',
                        height: '50px',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        cursor: 'pointer',
                        boxShadow: '0 4px 10px rgba(0,0,0,0.2)'
                    }}
                >
                    ✕
                </button>
            </div>

            <div className="closet-content" style={{ display: 'flex', flex: 1, gap: '20px', overflow: 'hidden' }}>

                {/* Left Column: Categories */}
                <div style={{
                    width: '200px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px',
                    background: 'rgba(255,255,255,0.25)',
                    borderRadius: '20px',
                    padding: '20px',
                    backdropFilter: 'blur(10px)',
                    overflowY: 'auto'
                }}>
                    <h3 style={{ color: 'white', fontFamily: 'var(--font-ui)', textAlign: 'center', marginBottom: '10px' }}>Categories</h3>
                    {outfitCategories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setSelectedCategory(cat.id)}
                            style={{
                                padding: '15px 10px',
                                borderRadius: '15px',
                                background: selectedCategory === cat.id ? '#FFF' : 'rgba(255,255,255,0.5)',
                                color: selectedCategory === cat.id ? '#FF1493' : '#D20078',
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                boxShadow: selectedCategory === cat.id ? '0 5px 15px rgba(255,20,147,0.4)' : 'none',
                                transform: selectedCategory === cat.id ? 'scale(1.05)' : 'scale(1)'
                            }}
                        >
                            <span style={{ marginRight: '8px' }}>{cat.icon}</span> {cat.name}
                        </button>
                    ))}
                </div>

                {/* Middle Column: The Barbie (Centered) */}
                <div style={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '20px',
                    boxShadow: 'inset 0 0 30px rgba(255,105,180,0.3)',
                    position: 'relative'
                }}>
                    {/* A nicely modeled stage ring under her */}
                    <div style={{
                        position: 'absolute',
                        bottom: '5%',
                        width: '300px',
                        height: '60px',
                        background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
                        borderRadius: '50%',
                        zIndex: 0
                    }}></div>

                    <div style={{ transform: 'scale(1.1)', zIndex: 1 }}>
                        <BarbieImage previewMode={true} />
                    </div>
                </div>

                {/* Right Column: The Clothing Choices */}
                <div style={{
                    width: '350px',
                    display: 'flex',
                    flexDirection: 'column',
                    background: 'rgba(255,255,255,0.25)',
                    borderRadius: '20px',
                    padding: '20px',
                    backdropFilter: 'blur(10px)',
                    overflowY: 'auto'
                }}>
                    <h3 style={{ color: 'white', fontFamily: 'var(--font-ui)', textAlign: 'center', marginBottom: '20px' }}>
                        {outfitCategories.find(c => c.id === selectedCategory)?.name || 'Options'}
                    </h3>

                    <div className="outfit-grid" style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(2, 1fr)',
                        gap: '15px'
                    }}>
                        {outfits[selectedCategory]?.map(item => (
                            <div
                                key={item.id}
                                onClick={() => changeOutfit(item)}
                                style={{
                                    background: 'rgba(255,255,255,0.9)',
                                    borderRadius: '15px',
                                    padding: '15px 10px',
                                    cursor: 'pointer',
                                    border: currentOutfit?.id === item.id ? '4px solid #FF1493' : '2px solid transparent',
                                    transform: currentOutfit?.id === item.id ? 'scale(1.05)' : 'scale(1)',
                                    transition: 'all 0.2s',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                                }}
                            >
                                <div style={{
                                    width: '70px',
                                    height: '70px',
                                    background: item.color || '#ddd',
                                    borderRadius: '10px',
                                    marginBottom: '10px',
                                    boxShadow: 'inset 0 0 10px rgba(0,0,0,0.2)'
                                }}>
                                    {/* Real clothing thumbnail can go here */}
                                </div>
                                <span style={{ fontSize: '0.9rem', color: '#FF1493', fontWeight: 'bold', textAlign: 'center' }}>{item.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};
export default WardrobeClosetView;

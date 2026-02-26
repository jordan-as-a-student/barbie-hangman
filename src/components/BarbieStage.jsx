import React from 'react';
import { useBarbie } from '../context/BarbieContext';
import { availableBarbies } from '../data/barbies';
import BarbieNameInput from './BarbieNameInput';

const BarbieStage = ({ gameStatus }) => {
    const { barbieName, selectedBarbieIndex } = useBarbie();
    const currentBarbieImg = availableBarbies[selectedBarbieIndex]?.src;

    // Check if player won
    const isWinner = gameStatus === 'won';

    return (
        <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '350px',
            height: '450px', // Fixed height based on your box image aspect ratio expectations
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: '40px'
        }}>
            {/* The Actual Barbie Box Image You Provide */}
            <div className={`barbie-box-container ${isWinner ? 'box-opened' : ''}`} style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 1
            }}>
                <img
                    src="/images/my_barbie_box.png" // The file you will add to public/images!
                    alt="Barbie Box"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                        zIndex: 1,
                        position: 'relative'
                    }}
                />

                {/* The Custom Name Placed OVER your custom box image */}
                <div style={{
                    position: 'absolute',
                    top: '10%', // Adjust this percentage so it sits perfectly where the name should go on YOUR box image
                    width: '100%',
                    textAlign: 'center',
                    fontFamily: 'var(--font-script)',
                    fontSize: '2rem',
                    color: '#FFF',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                    zIndex: 3
                }}>
                    {barbieName}
                </div>
            </div>

            {/* The actual doll inside */}
            {/* We position her absolute so she sits perfectly inside the box image */}
            <img
                src={currentBarbieImg}
                alt="Your Barbie"
                style={{
                    position: 'absolute',
                    bottom: '5%', // Adjust this bottom/height constraint so she fits inside the transparent window of YOUR specific box image!
                    height: '75%',
                    objectFit: 'contain',
                    zIndex: isWinner ? 10 : 0, // 0 = behind the box image window (if your box image has a transparent cutout), 10 = in front when stepping out
                    transform: isWinner ? 'translateX(140px) scale(1.3)' : 'translateX(0) scale(1)',
                    transition: 'all 1s cubic-bezier(0.175, 0.885, 0.32, 1.275)', // Springy stepping out animation
                }}
            />
        </div>
    )
}
export default BarbieStage;

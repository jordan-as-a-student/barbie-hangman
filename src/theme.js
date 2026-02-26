export const theme = {
  colors: {
    // Deep Pinks
    deepPink1: '#E0218A',
    deepPink2: '#FF0F8A',
    deepPink3: '#FF1493',
    deepPink4: '#FF3EB5',
    deepPink5: '#FF008C',
    deepPink6: '#F400A1',
    deepPink7: '#EC008C',

    // Medium Pinks
    mediumPink1: '#FF66C4',
    mediumPink2: '#D63384',
    mediumPink3: '#B76E79',
    mediumPink4: '#FF99DD',
    mediumPink5: '#FF85D8',

    // Light Pinks
    lightPink1: '#FCE4F6',
    lightPink2: '#FFC1E3',
    lightPink3: '#FFD6EC',
    lightPink4: '#F8C8DC',
    lightPink5: '#FFB7E8',
    lightPink6: '#F7A8C4',
    lightPink7: '#F4A6D7',

    white: '#FFFFFF',
    black: '#000000',
    transparent: 'transparent',
    
    // Semantic aliases
    primary: '#FF1493',
    secondary: '#FFB6C1',
    accent: '#FF008C',
    text: '#E0218A',
    background: '#FCE4F6',
    success: '#FF66C4',
    error: '#EC008C',
  },
  
  gradients: {
    main: 'linear-gradient(135deg, #FF69B4 0%, #FFB6C1 100%)',
    hotPink: 'linear-gradient(180deg, #FF1493 0%, #FF008C 100%)',
    softPink: 'linear-gradient(180deg, #FFC1E3 0%, #F8C8DC 100%)',
    glossy: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0) 100%)',
    wardrobe: 'linear-gradient(to right, #FF1493, #E0218A, #FF1493)',
  },

  fonts: {
    script: "'Great Vibes', cursive", // Fallback script font
    ui: "'Nunito', sans-serif", // Rounded, friendly UI font
  },

  sparkles: {
    intensity: 1.0,
    color: '#FFFFFF',
  },

  animation: {
    fast: '0.2s',
    medium: '0.5s',
    slow: '1.0s',
  },

  shadows: {
    soft: '0 4px 15px rgba(255, 105, 180, 0.3)',
    glow: '0 0 20px rgba(255, 20, 147, 0.6)',
    card: '0 8px 32px rgba(255, 105, 180, 0.15)',
  }
};

import React from 'react';
import landworksColor from '../assets/landworks-color.png';

export function LandingPage({ }: {}) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <img src={landworksColor} alt="Landworks Logo" style={{ maxWidth: '100%', maxHeight: '100%' }} />
    </div>
  );
}

export default LandingPage;
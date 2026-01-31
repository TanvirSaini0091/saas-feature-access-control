import React from 'react';
import { useAuth } from '../context/AuthContext';
import { TIERS } from '../lib/permissions';

const TierSwitcher = () => {
  const { user, setUser } = useAuth();

  const handleTierChange = (newTier) => {
    // In a real app, this might involve an API call to update the user profile
    setUser({ ...user, tier: newTier });
  };

  const style = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    background: '#1a1a1a',
    color: 'white',
    padding: '15px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.5)',
    zIndex: 9999,
  };

  return (
    <div style={style}>
      <p style={{ margin: '0 0 10px 0', fontSize: '12px', fontWeight: 'bold' }}>
        DEV TOOLS: Current Tier: <span style={{ color: '#00ff00' }}>{user.tier.toUpperCase()}</span>
      </p>
      <div style={{ display: 'flex', gap: '5px' }}>
        {Object.values(TIERS).map((tier) => (
          <button
            key={tier.id}
            onClick={() => handleTierChange(tier.id)}
            style={{
              padding: '5px 10px',
              cursor: 'pointer',
              backgroundColor: user.tier === tier.id ? '#007bff' : '#444',
              color: 'white',
              border: 'none',
              borderRadius: '4px'
            }}
          >
            {tier.id.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TierSwitcher;
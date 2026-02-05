import React from 'react';
import { useAuth } from '../context/AuthContext';

const FeatureGuard = ({ 
  permission, 
  children, 
  fallback = null, 
  mode = 'hide', 
  onDenied 
}) => {
  const { hasPermission } = useAuth();
  const isAllowed = hasPermission(permission);

  if (isAllowed) return children;

  // Handle 'disable' mode: Show the element but prevent interaction
  if (mode === 'disable') {
    return (
      <div 
        onClickCapture={(e) => {
          // onClickCapture catches the click before it reaches the button
          e.stopPropagation();
          if (onDenied) onDenied();
        }}
        style={{ 
          cursor: 'not-allowed', 
          opacity: 0.5,
          display: 'inline-block' // Ensures the div wraps the button tightly
        }}
      >
        {/* We use pointerEvents: 'none' to ensure the button itself doesn't trigger */}
        <div style={{ pointerEvents: 'none' }}>
          {children}
        </div>
      </div>
    );
  }

  // Default: Return the fallback (or null)
  return fallback;
};

export default FeatureGuard;
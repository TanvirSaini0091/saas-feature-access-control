import React, { createContext, useContext, useState, useMemo } from 'react';
import { TIERS } from '../lib/permissions';
import { auditAccess } from '../utils/logger';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  // We simulate a logged-in user. In production, this would be an API call.
  const [user, setUser] = useState({
    id: '123',
    name: 'Jane Doe',
    tier: TIERS.FREE.id, // Default to Free
  });

  // Optimization: Memoize the permission check logic
  const value = useMemo(() => {
    const permissions = TIERS[user.tier.toUpperCase()]?.permissions || [];
    
  const hasPermission = (permission) => {
  const isAllowed = permissions.includes(permission);
  
  if (!isAllowed) {
    auditAccess(user, permission, "DENIED");
  }

  return isAllowed;
};

    return {
      user,
      setUser,
      hasPermission,
    };
  }, [user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Custom hook for cleaner consumption in components
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
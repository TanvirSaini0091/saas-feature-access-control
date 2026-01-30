import React from 'react';
import { useAuth } from '../context/AuthContext';

/**
 * FeatureGuard
 * @param {string} permission - The required permission string from PERMISSIONS lib
 * @param {React.ReactNode} children - The protected content
 * @param {React.ReactNode} fallback - What to show if access is denied
 */
const FeatureGuard = ({ permission, children, fallback = null }) => {
  const { hasPermission } = useAuth();

  const isAllowed = hasPermission(permission);

  if (!isAllowed) {
    // If no fallback is provided, the component simply "disappears"
    return fallback;
  }

  return <>{children}</>;
};

export default FeatureGuard;
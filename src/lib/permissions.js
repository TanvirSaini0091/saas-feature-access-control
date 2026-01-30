export const PERMISSIONS = {
  VIEW_DASHBOARD: 'view_dashboard',
  VIEW_ANALYTICS: 'view_analytics',
  GENERATE_REPORTS: 'generate_reports',
  MANAGE_TEAM: 'manage_team',
};

export const TIERS = {
  FREE: {
    id: 'free',
    permissions: [PERMISSIONS.VIEW_DASHBOARD],
  },
  PRO: {
    id: 'pro',
    permissions: [PERMISSIONS.VIEW_DASHBOARD, PERMISSIONS.VIEW_ANALYTICS, PERMISSIONS.GENERATE_REPORTS],
  },
};
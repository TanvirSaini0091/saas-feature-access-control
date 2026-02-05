import React from 'react';
import FeatureGuard from '../../guards/FeatureGuard';
import { PERMISSIONS } from '../../lib/permissions';

const Dashboard = () => {
  return (
    <div style={{ padding: '20px', maxWidth: '900px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <header style={{ borderBottom: '2px solid #eee', marginBottom: '30px' }}>
        <h1>Enterprise Dashboard</h1>
      </header>

      <div style={{ display: 'grid', gap: '20px' }}>
        {/* PUBLIC SECTION: Visible to everyone */}
        <section style={cardStyle}>
          <h3>System Status</h3>
          <p style={{ color: 'green' }}>● All systems operational</p>
        </section>

        {/* BASIC SECTION: Requires VIEW_DASHBOARD */}
        <FeatureGuard permission={PERMISSIONS.VIEW_DASHBOARD}>
          <section style={{ ...cardStyle, borderLeft: '5px solid #007bff' }}>
            <h3>User Overview</h3>
            <p>Active Users: 1,402</p>
            <p>New Signups (24h): 42</p>
          </section>
        </FeatureGuard>

        {/* PRO SECTION: Requires VIEW_ANALYTICS with a Fallback */}
<section style={{ ...cardStyle, borderLeft: '5px solid #28a745' }}>
  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
    <h3>Advanced Analytics</h3>
    
    {/* This will now be visible to FREE users, but in 'disable' mode */}
    <FeatureGuard 
      permission={PERMISSIONS.GENERATE_REPORTS}
      mode="disable"
      onDenied={() => alert("🔒 Pro Feature: Upgrade to export reports.")}
    >
      <button style={upgradeBtnStyle}>Export Report</button>
    </FeatureGuard>
  </div>

  {/* We can still hide the sensitive DATA for Free users */}
  <FeatureGuard 
    permission={PERMISSIONS.VIEW_ANALYTICS} 
    fallback={<p style={{color: '#999'}}>Data hidden. Upgrade to Pro to view metrics.</p>}
  >
    <p>Retention Rate: 84%</p>
    <p>Average Session Duration: 4m 32s</p>
  </FeatureGuard>
</section>
      </div>
    </div>
  );
};

const cardStyle = {
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
  border: '1px solid #eee'
};

const upgradeBtnStyle = {
  padding: '8px 16px',
  backgroundColor: '#007bff',
  color: 'white',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer'
};

export default Dashboard;
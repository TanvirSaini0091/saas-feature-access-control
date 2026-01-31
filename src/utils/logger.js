export const auditAccess = (user, permission, status) => {
  const timestamp = new Date().toISOString();
  const logMessage = `[${timestamp}] AUDIT: User "${user.name}" (${user.id}) | Action: ${permission} | Status: ${status}`;
  
  if (status === 'DENIED') {
    console.warn(logMessage);
    // In production, this would be: fetch('/api/logs', { method: 'POST', body: ... })
  } else {
    console.log(logMessage);
  }
};
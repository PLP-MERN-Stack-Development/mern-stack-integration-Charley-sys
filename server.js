// Root server.js - This redirects to the actual server in the server folder
console.log('🚀 Medical Equipment System - Root server starting...');
console.log('📁 Loading server from ./server/server.js...');

try {
  require('./server/server.js');
  console.log('✅ Root server.js loaded actual server successfully');
} catch (error) {
  console.error('❌ Failed to load server:', error.message);
  process.exit(1);
}
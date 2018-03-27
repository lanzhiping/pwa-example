const os = require('os');
const ifaces = os.networkInterfaces();
const ips = process.env.NODE_ENV !== 'production' && ifaces.en0
const ipv4 = ips.find(iface => iface.family === 'IPv4')

module.exports = ipv4;

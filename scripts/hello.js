// deployed purely via GitHub REST API
const os = require('os')
console.log('hello from GitHub-hosted api demo')
console.log('deployed at:', new Date().toISOString())
console.log('host:', os.hostname(), os.platform(), os.arch())

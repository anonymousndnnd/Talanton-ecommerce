const fs = require('fs');
const path = require('path');

const clientDir = path.join(__dirname, '..', 'node_modules', '.prisma', 'client');

console.log('Checking Prisma client folder at:', clientDir);

if (!fs.existsSync(clientDir)) {
  console.error('PRISMA_CLIENT_DIR_MISSING');
  process.exit(3);
}

const files = fs.readdirSync(clientDir);
files.forEach(f => console.log(f));

const hasEngine = files.some(f => /rhel-openssl-3\.0\.x|query-engine|libquery_engine|query_engine/.test(f));
if (hasEngine) {
  console.log('PRISMA_ENGINE_PRESENT');
  process.exit(0);
} else {
  console.error('PRISMA_ENGINE_MISSING');
  process.exit(2);
}

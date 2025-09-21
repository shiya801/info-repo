const fs = require('fs');
const path = require('path');

// Read people.html
const htmlPath = path.join(__dirname, 'people.html');
if (!fs.existsSync(htmlPath)) {
  console.error('❌ people.html not found');
  process.exit(1);
}

const html = fs.readFileSync(htmlPath, 'utf-8');

// Extract spans with class names
const matches = html.match(/<span class="(name|neuid|email|slackhandle|github)">(.+?)<\/span>/g);
if (!matches) {
  console.log('No valid span elements found.');
  process.exit(0);
}

console.log('✅ Extracted Info:');
matches.forEach(match => {
  const [, cls, value] = match.match(/class="(.+?)">(.+?)<\/span>/);
  console.log(`${cls}: ${value}`);
});

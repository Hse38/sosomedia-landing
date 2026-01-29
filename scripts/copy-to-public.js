/**
 * Vercel: copy built site to public/ so outputDirectory: "public" works.
 */
const fs = require('fs');
const path = require('path');

const out = 'public';
fs.mkdirSync(out, { recursive: true });

function copySync(src, dest) {
  const stat = fs.statSync(src);
  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const name of fs.readdirSync(src)) {
      copySync(path.join(src, name), path.join(dest, name));
    }
  } else {
    fs.copyFileSync(src, dest);
  }
}

['index.html', 'js', 'img', 'css'].forEach((name) => {
  if (fs.existsSync(name)) {
    copySync(name, path.join(out, name));
  }
});

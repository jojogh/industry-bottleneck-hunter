#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_NAME = 'industry-bottleneck-hunter';
const TARGET_DIR = path.join(os.homedir(), '.claude', 'skills', SKILL_NAME);
const SOURCE_DIR = __dirname;

// Files/directories that should not be copied into the skill installation
const SKIP_NAMES = new Set([
  'install.js',
  'package.json',
  'package-lock.json',
  'node_modules',
  '.git',
  '.github',
  '.gitignore',
  '.DS_Store'
]);

function copyRecursive(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    if (SKIP_NAMES.has(entry.name)) {
      continue;
    }

    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function main() {
  if (path.resolve(SOURCE_DIR) === path.resolve(TARGET_DIR)) {
    console.log(`The skill is already located at the installation target:\n   ${TARGET_DIR}`);
    console.log('No action needed.');
    return;
  }

  console.log(`\nInstalling "${SKILL_NAME}" Claude Code skill...`);
  console.log(`Source: ${SOURCE_DIR}`);
  console.log(`Target: ${TARGET_DIR}\n`);

  if (fs.existsSync(TARGET_DIR)) {
    const backupDir = `${TARGET_DIR}.backup.${Date.now()}`;
    fs.renameSync(TARGET_DIR, backupDir);
    console.log(`⚠️  Existing skill found and backed up to:\n   ${backupDir}\n`);
  }

  try {
    copyRecursive(SOURCE_DIR, TARGET_DIR);
    console.log(`✅ Skill "${SKILL_NAME}" installed successfully.`);
    console.log(`\nYou can now use it in Claude Code by referencing:`);
    console.log(`   /industry-bottleneck-hunter`);
    console.log(`or by saying things like:`);
    console.log(`   "Analyze the AI chip supply chain and find bottlenecks"`);
  } catch (err) {
    console.error(`\n❌ Installation failed: ${err.message}`);
    process.exit(1);
  }
}

main();

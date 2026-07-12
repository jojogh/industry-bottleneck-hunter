#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const os = require('os');

const SKILL_NAME = 'industry-bottleneck-hunter';
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
  '.DS_Store',
  '.claude',
  '.codex'
]);

function parseArgs(argv) {
  let agent = 'claude';
  let local = false;
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg === '--agent' || arg === '-a') {
      agent = argv[++i];
    } else if (arg.startsWith('--agent=')) {
      agent = arg.slice('--agent='.length);
    } else if (arg === '--local' || arg === '-l') {
      local = true;
    } else if (arg === '--help' || arg === '-h') {
      printUsage();
      process.exit(0);
    }
  }
  return { agent, local };
}

function printUsage() {
  console.log(`Usage: industry-bottleneck-hunter [options]

Options:
  -a, --agent <claude|codex|all>   Target agent (default: claude)
  -l, --local                      Install into the current project directory
  -h, --help                       Show this help

Examples:
  industry-bottleneck-hunter                       # global Claude Code install
  industry-bottleneck-hunter -a codex              # global Codex install
  industry-bottleneck-hunter -a all                # install to both agents globally
  industry-bottleneck-hunter -a codex -l           # project-local Codex install
`);
}

function baseDirForAgent(agent, local) {
  if (local) {
    return agent === 'codex'
      ? path.join(process.cwd(), '.codex', 'skills', SKILL_NAME)
      : path.join(process.cwd(), '.claude', 'skills', SKILL_NAME);
  }
  return agent === 'codex'
    ? path.join(os.homedir(), '.codex', 'skills', SKILL_NAME)
    : path.join(os.homedir(), '.claude', 'skills', SKILL_NAME);
}

function readPackageFiles() {
  const pkgPath = path.join(SOURCE_DIR, 'package.json');
  if (!fs.existsSync(pkgPath)) {
    return null;
  }
  try {
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
    if (Array.isArray(pkg.files) && pkg.files.length > 0) {
      return pkg.files;
    }
  } catch (err) {
    // Fall back to recursive copy if package.json cannot be read.
  }
  return null;
}

function copyPackageFiles(targetDir) {
  const files = readPackageFiles();
  if (!files) {
    copyRecursive(SOURCE_DIR, targetDir, targetDir);
    return;
  }

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  for (const relativePath of files) {
    if (SKIP_NAMES.has(path.basename(relativePath))) {
      continue;
    }

    const srcPath = path.join(SOURCE_DIR, relativePath);
    const destPath = path.join(targetDir, relativePath);
    const destDir = path.dirname(destPath);

    if (!fs.existsSync(srcPath)) {
      continue;
    }

    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    const stat = fs.statSync(srcPath);
    if (stat.isDirectory()) {
      copyRecursive(srcPath, destPath, targetDir);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function copyRecursive(src, dest, targetRoot) {
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

    // Avoid copying the target directory into itself when the target
    // happens to live inside the source tree (e.g., project-local installs).
    if (targetRoot && path.resolve(srcPath) === path.resolve(targetRoot)) {
      continue;
    }

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath, targetRoot);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function installTo(targetDir) {
  if (path.resolve(SOURCE_DIR) === path.resolve(targetDir)) {
    console.log(`The skill is already located at the installation target:\n   ${targetDir}`);
    console.log('No action needed.');
    return false;
  }

  if (fs.existsSync(targetDir)) {
    const backupDir = `${targetDir}.backup.${Date.now()}`;
    fs.renameSync(targetDir, backupDir);
    console.log(`⚠️  Existing installation found and backed up to:\n   ${backupDir}\n`);
  }

  copyPackageFiles(targetDir);
  return true;
}

function printInstructions(agent) {
  if (agent === 'codex') {
    console.log(`✅ Skill "${SKILL_NAME}" installed for OpenAI Codex CLI.`);
    console.log(`\nInvoke with:`);
    console.log(`   $${SKILL_NAME}`);
    console.log(`or via the /skills picker.`);
  } else {
    console.log(`✅ Skill "${SKILL_NAME}" installed for Claude Code.`);
    console.log(`\nInvoke with:`);
    console.log(`   /${SKILL_NAME}`);
    console.log(`or by describing the analysis you want.`);
  }
}

function main() {
  const { agent, local } = parseArgs(process.argv.slice(2));
  const supported = ['claude', 'codex', 'all'];

  if (!supported.includes(agent)) {
    console.error(`\n❌ Unknown agent "${agent}". Use: claude, codex, all.`);
    process.exit(1);
  }

  const targets = agent === 'all' ? ['claude', 'codex'] : [agent];

  for (const a of targets) {
    const targetDir = baseDirForAgent(a, local);
    console.log(`\nInstalling "${SKILL_NAME}" for ${a}...`);
    console.log(`Source: ${SOURCE_DIR}`);
    console.log(`Target: ${targetDir}\n`);

    try {
      installTo(targetDir);
      printInstructions(a);
    } catch (err) {
      console.error(`\n❌ Installation failed for ${a}: ${err.message}`);
      process.exit(1);
    }
  }
}

module.exports = { parseArgs, baseDirForAgent };

if (require.main === module) {
  main();
}

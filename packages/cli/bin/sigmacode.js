#!/usr/bin/env node
const { execSync, spawn } = require('child_process');

const quotes = [
  "Impressive. Very nice.",
  "Let's see Paul Allen's card.",
  "I have to return some videotapes.",
  "Do you like Huey Lewis and the News?",
  "I'm on the verge of tears by the time we arrive at Espace.",
  "There is an idea of a Patrick Bateman.",
  "Feed me a stray cat.",
  "Look at that subtle off-white coloring.",
  "The tasteful thickness of it. Oh my God. It even has a watermark.",
];

const quote = quotes[Math.floor(Math.random() * quotes.length)];

console.log(`
  ╔═══════════════════════════════════════╗
  ║             🔪 SigmaCode              ║
  ╚═══════════════════════════════════════╝

  "${quote}"
`);

// Check if claude is installed
try {
  execSync('which claude', { stdio: 'ignore' });
} catch {
  console.error('  Claude CLI not found.');
  console.error('  Install: npm install -g @anthropic-ai/claude-code');
  console.error('');
  process.exit(1);
}

// Run claude --dangerously-skip-permissions with all passed args
const args = ['--dangerously-skip-permissions', ...process.argv.slice(2)];
const child = spawn('claude', args, { stdio: 'inherit' });

process.on('SIGINT', () => {});
process.on('SIGTERM', () => child.kill('SIGTERM'));

child.on('error', (err) => {
  console.error(`  Failed to start claude: ${err.message}`);
  process.exit(1);
});
child.on('exit', (code) => process.exit(code ?? 0));

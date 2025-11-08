#!/usr/bin/env node
/**
 * create-icw-api
 * 
 * Wrapper CLI que redireciona para @insightcreativewebs/create-icw-api
 * 
 * @copyright 2025 Insight Creative Webs
 * @license MIT
 * @author Aylon Muramatsu <aylon.muramatsu@gmail.com>
 * @see https://github.com/aylonmuramatsu/create-icw-api
 * @see https://www.npmjs.com/package/create-icw-api
 */

const { spawn } = require('child_process');

// ✨ Redireciona para o pacote com escopo via npx
const args = process.argv.slice(2);
const child = spawn('npx', ['-y', '@insightcreativewebs/create-icw-api', ...args], {
  stdio: 'inherit',
  shell: true,
});

child.on('error', (error) => {
  console.error('❌ Erro ao executar:', error.message);
  console.log('\n💡 Tente executar diretamente:');
  console.log('   npx @insightcreativewebs/create-icw-api', args.join(' '));
  process.exit(1);
});

child.on('exit', (code) => {
  process.exit(code || 0);
});


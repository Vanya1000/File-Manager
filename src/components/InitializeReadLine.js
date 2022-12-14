import readline from 'readline';
import actionRouter from '../action/actionRouter.js';
import parseUserNameArg from './parseUserNameArg.js';

const initializeReadLine = () => {
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (input) => {
    if (input.trim().toLowerCase() === '.exit') {
      rl.close();
    }
    actionRouter(input);
  })
  .on('SIGINT', () => rl.close())
  .on('close', () => {
    console.log(`Thank you for using File Manager, ${parseUserNameArg() || 'unknown'}, goodbye!`);
    process.exit(0);
  })
}

export default initializeReadLine;
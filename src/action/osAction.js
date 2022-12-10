import { EOL, cpus, homedir, userInfo } from 'os';
import { arch } from 'process';
import printCurrentDirectory from '../components/currentDirectory.js';

const cpusInfo = () => {
  return cpus().map(({ model, speed }) => ({
    model,
    speed: `${speed / 1000} GHz`,
  }));
};

const osAction = ([command]) => {
  try {
    if (!command) throw new Error('No command');

    switch (command) {
      case '--EOL':
        console.log(JSON.stringify(EOL));
        break;
      case '--cpus':
        console.log(cpusInfo());
        break;
      case '--homedir':
        console.log(homedir());
        break;
      case '--username':
        console.log(userInfo().username);
        break;
      case '--architecture':
        console.log(arch);
        break;
      default:
        console.log('Invalid command');
    }
    printCurrentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};

export default osAction;

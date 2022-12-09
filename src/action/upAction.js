import { join } from 'path';
import printCurrentDirectory from '../components/currentDirectory.js';

const upAction = () => {
  const currentDirectory = process.cwd();
  const parentDirectory = join(currentDirectory, '..');
  process.chdir(parentDirectory);
  printCurrentDirectory();
}

export default upAction;
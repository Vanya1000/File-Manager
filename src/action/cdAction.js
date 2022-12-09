import { join, sep } from 'path';
import printCurrentDirectory from '../components/currentDirectory.js';

const cdAction = (pathArr) => {
  if (pathArr.length === 0) {
    console.log('Please provide a path');
    return;
  }
  const path = pathArr[0];
  try {
    if (path.includes(':')) {
      path.length === 2 ? process.chdir(path + sep) : process.chdir(path);
      printCurrentDirectory();
      return;
    }
    const currentDirectory = process.cwd();
    const newDirectory = join(currentDirectory, path);
    process.chdir(newDirectory);
    printCurrentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};

export default cdAction;
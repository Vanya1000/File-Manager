import fs from 'fs/promises';
import { join } from 'path';
import printCurrentDirectory from '../components/currentDirectory.js';

const isExistFile = async (path) => {
  try {
    await fs.access(path , fs.constants.F_OK);
    return true;
  } catch (error) {
    return false;
  }
}

const rnAction = async (fileName) => {
  const [name, newName] = fileName;
  const currentDir = process.cwd();
  const pathSource = join(currentDir, name);
  const pathDestination = join(currentDir, newName);
  try {
    if (await isExistFile(pathDestination)) throw new Error('File already exists');
    await fs.rename(pathSource, pathDestination);
    printCurrentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};

export default rnAction;
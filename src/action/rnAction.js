import fs from 'fs/promises';
import { join } from 'path';
import printCurrentDirectory from '../components/currentDirectory.js';
import { isExistFile } from '../utils/utils.js';

const rnAction = async (fileName) => {
  const [name, newName] = fileName;
  const currentDir = process.cwd();
  const pathSource = join(currentDir, name);
  const pathDestination = join(currentDir, newName);
  try {
    const isExistSourceFile = await isExistFile(pathDestination)
    if (isExistSourceFile) throw new Error('File already exists');
    await fs.rename(pathSource, pathDestination);
    printCurrentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};

export default rnAction;
import { writeFile } from 'fs/promises';
import { join } from 'path';
import printCurrentDirectory from '../components/currentDirectory.js';

const addAction = async (fileName) => {
  const [name] = fileName;
  const currentDir = process.cwd();
  const path = join(currentDir, name);
  try {
    await writeFile(path, '', {flag: 'wx', encoding: 'utf8'});
    printCurrentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};

export default addAction;
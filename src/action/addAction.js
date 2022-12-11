import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import printCurrentDirectory from '../components/currentDirectory.js';

const addAction = async ([ name ]) => {
  const path = resolve(name);
  try {
    await writeFile(path, '', {flag: 'wx', encoding: 'utf8'});
    printCurrentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};

export default addAction;
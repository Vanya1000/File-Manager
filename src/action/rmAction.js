import { rm } from 'fs/promises';
import { resolve } from 'path';
import printCurrentDirectory from '../components/currentDirectory.js';

const rmAction = async ([ file ]) => {
  try {
    const path = resolve(file);

    await rm(path);
    printCurrentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};

export default rmAction;

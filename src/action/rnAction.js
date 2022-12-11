import fs from 'fs/promises';
import { resolve, parse } from 'path';
import printCurrentDirectory from '../components/currentDirectory.js';
import { isExistFile } from '../utils/utils.js';

const rnAction = async ([ name, newName ]) => {
  try {
    const pathSource = resolve(name);
    const { dir } = parse(pathSource);
    const pathDestination = resolve(dir, newName);

    const isExistSourceFile = await isExistFile(pathDestination);
    if (isExistSourceFile) throw new Error('File already exists');
    await fs.rename(pathSource, pathDestination);
    printCurrentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};

export default rnAction;

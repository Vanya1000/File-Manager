import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import { colorizeInGreen } from '../utils/utils.js';

const addAction = async ([name]) => {
  const path = resolve(name);
  console.log(path);
  await writeFile(path, '', { flag: 'wx', encoding: 'utf8' });
  console.log(colorizeInGreen('File success created'));
};

export default addAction;

import { writeFile } from 'fs/promises';
import { resolve } from 'path';
import { successMessage } from '../utils/utils.js';

const addAction = async ([name]) => {
  const path = resolve(name);
  console.log(path);
  await writeFile(path, '', { flag: 'wx', encoding: 'utf8' });
  successMessage('File success created');
};

export default addAction;

import { rm } from 'fs/promises';
import { resolve } from 'path';
import { successMessage } from '../utils/utils.js';

const rmAction = async ([file]) => {
  const path = resolve(file);
  await rm(path);
  successMessage('File success removed');
};

export default rmAction;

import { rm } from 'fs/promises';
import { resolve } from 'path';
import { colorizeInGreen } from '../utils/utils.js';

const rmAction = async ([file]) => {
  const path = resolve(file);
  await rm(path);
  console.log(colorizeInGreen('File success removed'))
};

export default rmAction;

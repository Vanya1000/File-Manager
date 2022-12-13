import fs from 'fs/promises';
import { resolve, parse } from 'path';
import { colorizeInGreen, isExistFile } from '../utils/utils.js';

const rnAction = async ([name, newName]) => {
  const pathSource = resolve(name);
  const { dir } = parse(pathSource);
  const pathDestination = resolve(dir, newName);

  const isExistSourceFile = await isExistFile(pathDestination);
  if (isExistSourceFile) throw new Error('File already exists');
  await fs.rename(pathSource, pathDestination);
  console.log(colorizeInGreen('File success renamed'))
};

export default rnAction;

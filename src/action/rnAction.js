import fs from 'fs/promises';
import { resolve, parse } from 'path';
import { successMessage, isExistFile } from '../utils/utils.js';

const rnAction = async ([name, newName]) => {
  const pathSource = resolve(name);
  const { dir } = parse(pathSource);
  const pathDestination = resolve(dir, newName);

  const isExistSourceFile = await isExistFile(pathDestination);
  if (isExistSourceFile) throw new Error('File already exists');
  await fs.rename(pathSource, pathDestination);
  successMessage('File success renamed');
};

export default rnAction;

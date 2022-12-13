import { createReadStream, createWriteStream } from 'fs';
import { rm } from 'fs/promises';
import { resolve, parse } from 'path';
import { pipeline } from 'stream/promises';
import { successMessage, isExistFile } from '../utils/utils.js';

const mvAction = async ([nameSource, nameDirDestination]) => {
  const filePathSource = resolve(nameSource);
  const { base } = parse(filePathSource);
  const dirPathDestination = resolve(nameDirDestination, base);

  const isExistSourceFile = await isExistFile(filePathSource);
  if (!isExistSourceFile) throw new Error('File not found');
  const readableStream = createReadStream(filePathSource);
  const writableStream = createWriteStream(dirPathDestination);
  await pipeline(readableStream, writableStream);
  await rm(filePathSource);
  successMessagen('File success moved');
};

export default mvAction;

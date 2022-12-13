import { createReadStream, createWriteStream } from 'fs';
import { resolve, parse } from 'path';
import { pipeline } from 'stream/promises';
import { colorizeInGreen, isExistFile } from '../utils/utils.js';

const cpAction = async ([nameSource, nameDestination]) => {
  const filePathSource = resolve(nameSource);
  const { base } = parse(filePathSource);
  const filePathDestination = resolve(nameDestination, base);

  const isExistSourceFile = await isExistFile(filePathSource);
  if (!isExistSourceFile) throw new Error('File not found');
  const readableStream = createReadStream(filePathSource);
  const writableStream = createWriteStream(filePathDestination, {
    flags: 'wx',
  });
  await pipeline(readableStream, writableStream);
  console.log(colorizeInGreen('File success copied'))
};

export default cpAction;

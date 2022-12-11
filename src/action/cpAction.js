import { createReadStream, createWriteStream } from 'fs';
import { resolve, parse } from 'path';
import { pipeline } from 'stream/promises';
import printCurrentDirectory from '../components/currentDirectory.js';
import { isExistFile } from '../utils/utils.js';

const cpAction = async ([ nameSource, nameDestination ]) => {
  try {
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
    printCurrentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};

export default cpAction;

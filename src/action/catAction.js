import { createReadStream } from 'fs';
import { resolve } from 'path';
import { pipeline } from 'stream/promises';

import printCurrentDirectory from '../components/currentDirectory.js';
import { myWritable } from '../utils/castomWritableStream.js';

const catAction = async ([ file ]) => {
  const pathFile = resolve(file);
  try {
    const readableStream = createReadStream(pathFile);
    const writableStream = new myWritable();
    await pipeline(readableStream, writableStream);
    printCurrentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};

export default catAction;
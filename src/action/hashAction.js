import { pipeline } from 'stream/promises';
import { createReadStream } from 'fs';
import { resolve } from 'path';
import { myWritable } from '../utils/castomWritableStream.js';
import printCurrentDirectory from '../components/currentDirectory.js';
const { createHash } = await import('crypto');

const hashAction = async ([fileName]) => {
  try {
    const pathFile = resolve(fileName);
    const readableStream = createReadStream(pathFile);
    const hash = createHash('sha256');
    const writableStream = new myWritable();
    await pipeline(
      readableStream, 
      hash.setEncoding('hex'), 
      writableStream
      );
    printCurrentDirectory();
  } catch (error) {
    console.log('Operation failed');
  }
};

export default hashAction;